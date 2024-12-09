import React, { useState, useEffect } from "react";
import SumInput from "../components/AdditionView/SumInput";
import SumStep from "../components/AdditionView/SumStep";
import Result from "../components/AdditionView/Result";

import "../css/AdditionView.css";

const AdditionView = () => {
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [finalResult, setFinalResult] = useState(null);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const startSum = (num1, num2) => {
    let n1 = num1.toString().split("").reverse().map(Number);
    let n2 = num2.toString().split("").reverse().map(Number);

    const maxLength = Math.max(n1.length, n2.length);
    while (n1.length < maxLength) n1.push(0);
    while (n2.length < maxLength) n2.push(0);

    const stepsArray = [];
    let carry = 0;
    const result = [];

    for (let i = 0; i < maxLength; i++) {
      const sum = n1[i] + n2[i] + carry;
      const currentDigit = sum % 10;
      carry = Math.floor(sum / 10);

      stepsArray.push({
        step: i + 1,
        n1: n1[i],
        n2: n2[i],
        partialSum: sum,
      });

      result.push(currentDigit);
    }

    if (carry > 0) {
      result.push(carry);
    }

    const startSum = (num1, num2) => {
      let n1 = num1.toString().split("").reverse().map(Number);
      let n2 = num2.toString().split("").reverse().map(Number);

      const maxLength = Math.max(n1.length, n2.length);
      while (n1.length < maxLength) n1.push(0);
      while (n2.length < maxLength) n2.push(0);

      const stepsArray = [];
      let carry = 0;
      const result = [];

      for (let i = 0; i < maxLength; i++) {
        const sum = n1[i] + n2[i] + carry;
        const currentDigit = sum % 10;
        carry = Math.floor(sum / 10);

        stepsArray.push({
          step: i + 1,
          n1: n1[i],
          n2: n2[i],
          partialSum: sum,
        });

        result.push(currentDigit);
      }

      if (carry > 0) {
        result.push(carry);
      }

      setSteps(stepsArray);
      setFinalResult(parseInt(result.reverse().join(""), 10).toString());
      setCurrentStep(0);
      setHighlightIndex(0);
    };

    setSteps(stepsArray);
    setFinalResult(result.reverse().join(""));

    setCurrentStep(0);
    setHighlightIndex(0);
  };

  const speakStep = (step) => {
    const { n1, n2, partialSum } = step;
    const utterance = new SpeechSynthesisUtterance(
      `${n1} más ${n2}, igual a ${partialSum}`
    );
    window.speechSynthesis.speak(utterance);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      const next = currentStep + 1;
      setCurrentStep(next);
      setHighlightIndex(next);
      speakStep(steps[next]);
    } else if (currentStep === steps.length - 1) {
      const utterance = new SpeechSynthesisUtterance(
        `El resultado final es ${finalResult}`
      );
      window.speechSynthesis.speak(utterance);
      setHighlightIndex(-1);
    }
  };

  useEffect(() => {
    if (steps.length > 0) {
      speakStep(steps[0]);
    }
  }, [steps]);

  return (
    <section className="container mt-5 text-center">
      <h1>Aprende a sumar paso a paso</h1>
      <p className="mb-5">
        Ingresa dos números, haz clic en iniciar suma y luego en siguiente paso
        para aprender a sumar.
      </p>
      <SumInput onStartSum={startSum} highlightIndex={highlightIndex} />
      {steps.length > 0 && (
        <>
          <SumStep {...steps[currentStep]} />
          <button className="next-step" onClick={nextStep}>
            Siguiente paso
          </button>
        </>
      )}
      <Result sum={finalResult} />
    </section>
  );
};

export default AdditionView;
