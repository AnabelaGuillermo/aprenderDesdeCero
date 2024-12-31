import React, { useState, useEffect } from "react";
import SubtractionInput from "../components/SubtractionView/SubtractionInput";
import SubtractionStep from "../components/SubtractionView/SubtractionStep";
import Result from "../components/SubtractionView/Result";

const SubtractionView = () => {
    const [steps, setSteps] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [finalResult, setFinalResult] = useState(null);
    const [highlightIndex, setHighlightIndex] = useState(-1);
    const [borrowSpoken, setBorrowSpoken] = useState(false);
    const [borrowFlag, setBorrowFlag] = useState(false);

    const startSubtraction = (num1, num2) => {
        let n1 = num1.toString().split("").reverse().map(Number);
        let n2 = num2.toString().split("").reverse().map(Number);

        const maxLength = Math.max(n1.length, n2.length);
        while (n1.length < maxLength) n1.push(0);
        while (n2.length < maxLength) n2.push(0);

        const stepsArray = [];
        let borrow = 0;
        const result = [];

        for (let i = 0; i < maxLength; i++) {
            let diff = n1[i] - n2[i] - borrow;
            if (diff < 0) {
                diff += 10;
                borrow = 1;
            } else {
                borrow = 0;
            }

            stepsArray.push({
                step: i + 1,
                n1: n1[i],
                n2: n2[i],
                partialDifference: diff,
                borrow: borrow,
            });

            result.push(diff);
        }

        setSteps(stepsArray);
        setFinalResult(result.reverse().join(""));
        setCurrentStep(0);
        setHighlightIndex(0);
        setBorrowSpoken(false);
        setBorrowFlag(false);
    };

    const speakStep = (step, isLastStep) => {
        const { n1, n2, partialDifference, borrow } = step;
        let message = "";

        if (borrowFlag) {
            message = `${n1} menos ${n2}, más uno que pedí prestado, igual a ${partialDifference}`;
            setBorrowFlag(false);
        } else {
            message = `${n1} menos ${n2}, igual a ${partialDifference}`;
        }


        if (borrow > 0 && !isLastStep) {
            message += ", me pido uno al de al lado";
            setBorrowFlag(true);
        }

        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(utterance);
    };

    const nextStep = () => {
        window.speechSynthesis.cancel();
        if (currentStep < steps.length - 1) {
            const next = currentStep + 1;
            setCurrentStep(next);
            setHighlightIndex(next);
            speakStep(steps[next], next === steps.length - 1);
        } else if (currentStep === steps.length - 1) {
            const utterance = new SpeechSynthesisUtterance(`El resultado final es ${finalResult}`);

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
            <h1>Aprende a restar paso a paso</h1>
            <p className="mb-5">
                Ingresa dos números, haz clic en iniciar resta y luego en siguiente paso
                para aprender a restar.
            </p>
            <SubtractionInput
                onStartSubtraction={startSubtraction}
                highlightIndex={highlightIndex}
                subtraction={finalResult}
            />
            {steps.length > 0 && (
                <>
                    <SubtractionStep {...steps[currentStep]} />
                    <div className="d-flex justify-content-center">
                        <button className="next-step" onClick={nextStep}>
                            Siguiente paso
                        </button>
                    </div>
                </>
            )}
            <Result subtraction={finalResult} />
        </section>
    );
};

export default SubtractionView;