import React, { useState } from "react";
import "./App.css";
import { CalculatorContainer } from "./components/Calculator/CalculatorContainer";
import { ButtonContainer } from "./components/ButtonContainer/ButtonContainer";
import { ResultDisplay } from "./components/ResultDisplay/ResultDisplay";
import { CalculationDisplay } from "./components/CalculationDisplay/CalculationDisplay";

function App() {
  const [calculation, setCalculation] = useState(0);
  const [calculationLog, setCalculationLog] = useState("0");
  const [previousTyped, setPreviousTyped] = useState("");

  const resetCalculator = () => {
    setCalculation(0);
    setCalculationLog("0");
    setPreviousTyped("");
  };

  const calculate = () => {
    const accumulator = calculationLog;
    accumulator.split("").map((value) => {
      console.log({ value });
    });
  };
  const handleClick = (buttonValue: string) => {
    const typeButtonValue = parseInt(buttonValue);
    console.log({ buttonValue, test: parseInt(buttonValue) });

    if (buttonValue === "C") {
      resetCalculator();
    } else if (!isNaN(typeButtonValue)) {
      if (previousTyped === "") {
        setPreviousTyped(`${buttonValue}`);
        setCalculationLog(`${buttonValue}`);
      } else {
        setPreviousTyped(`${buttonValue}`);
        setCalculationLog(`${calculationLog}${buttonValue}`);
      }
    } else {
      switch (buttonValue) {
        case "+":
          if (!isNaN(Number(previousTyped))) {
            setCalculationLog(`${calculationLog}${buttonValue}`);
            setPreviousTyped(buttonValue);
          }
          break;
        case "=":
          setCalculationLog(`${calculationLog}`);
          calculate();
          break;
      }
    }
  };

  return (
    <div className="App">
      <CalculatorContainer>
        <ResultDisplay>Calculation: {calculation}</ResultDisplay>
        <CalculationDisplay calculation={calculationLog} />
        <ButtonContainer handleClick={handleClick} />
      </CalculatorContainer>
    </div>
  );
}

export default App;
