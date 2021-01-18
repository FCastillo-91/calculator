import React, { useState } from "react";
import "./App.css";
import { CalculatorContainer } from "./components/Calculator/CalculatorContainer";
import { ButtonContainer } from "./components/ButtonContainer/ButtonContainer";
import { ResultDisplay } from "./components/ResultDisplay/ResultDisplay";
import { CalculationDisplay } from "./components/CalculationDisplay/CalculationDisplay";

function App() {
  const [calculation, setCalculation] = useState("0");

  const handleClick = (buttonLabel: string) => {
    const processingCalculation = calculation + buttonLabel;
    setCalculation(processingCalculation);
  };
  return (
    <div className="App">
      <CalculatorContainer>
        <ResultDisplay>7,875</ResultDisplay>
        <CalculationDisplay calculation={calculation} />
        <ButtonContainer handleClick={handleClick} />
      </CalculatorContainer>
    </div>
  );
}

export default App;
