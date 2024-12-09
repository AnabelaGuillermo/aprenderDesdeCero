import React, { useState, useEffect } from 'react';
import SumInput from '../components/AdditionView/SumInput';
import SumStep from '../components/AdditionView/SumStep';
import Result from '../components/AdditionView/Result';

import '../css/AdditionView.css';

const AdditionView = () => {
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [finalResult, setFinalResult] = useState(null);

  const startSum = (num1, num2) => {
    let n1 = num1.toString().split('').reverse().map(Number);
    let n2 = num2.toString().split('').reverse().map(Number);

    let maxLength = Math.max(n1.length, n2.length);
    let carry = 0;
    let stepsArray = [];
    let result = [];

    while (n1.length < maxLength) n1.push(0);
    while (n2.length < maxLength) n2.push(0);

    for (let i = 0; i < maxLength; i++) {
      const sum = n1[i] + n2[i] + carry;
      carry = Math.floor(sum / 10);
      result.push(sum % 10);

      stepsArray.push({
        step: i + 1,
        n1: n1[i],
        n2: n2[i],
        partialSum: sum % 10,
        carry,
      });
    }

    if (carry > 0) {
      result.push(carry);
    }

    setSteps(stepsArray);
    setFinalResult(result.reverse().join(''));
    setCurrentStep(0);
  };

  const speakStep = ({ n1, n2, partialSum }) => {
    const utterance = new SpeechSynthesisUtterance(
      `${n1} más ${n2}, igual a ${partialSum}`
    );
    window.speechSynthesis.speak(utterance);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      const next = currentStep + 1;
      setCurrentStep(next);
      speakStep(steps[next]);
    } else if (currentStep === steps.length - 1) {
      const utterance = new SpeechSynthesisUtterance(
        `El resultado de la suma es ${finalResult}`
      );
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    if (steps.length > 0) {
      speakStep(steps[0]);
    }
  }, [steps]);

  return (
    <div className="App">
      <h1>Aprende a sumar paso a paso</h1>
      <SumInput onStartSum={startSum} />
      {steps.length > 0 && (
        <>
          <SumStep {...steps[currentStep]} />
          <button onClick={nextStep}>Siguiente paso</button>
        </>
      )}
      <Result sum={finalResult} />
    </div>
  );
};

export default AdditionView;
