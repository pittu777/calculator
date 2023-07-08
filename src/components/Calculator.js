import React, { useState } from "react";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");

  const handleButtonClick = (value) => {
    if (displayValue === "0" || displayValue === "Error") {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  const handleClearClick = () => {
    setDisplayValue("0");
  };

  const handleDeleteClick = () => {
    if (displayValue.length === 1) {
      setDisplayValue("0");
    } else {
      setDisplayValue(displayValue.slice(0, -1));
    }
  };

  const handleEqualsClick = () => {
    try {
      const result = eval(displayValue);
      if (Number.isFinite(result)) {
        setDisplayValue(result.toString());
      } else {
        setDisplayValue("Error");
      }
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  const handleScientificFunctionClick = (func) => {
    try {
      const result = func(parseFloat(displayValue));
      if (Number.isFinite(result)) {
        setDisplayValue(result.toString());
      } else {
        setDisplayValue("Error");
      }
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  const handleSquareRootClick = () => {
    handleScientificFunctionClick(Math.sqrt);
  };

  const handleSquareClick = () => {
    handleScientificFunctionClick((num) => num * num);
  };

  const handleSinClick = () => {
    handleScientificFunctionClick(Math.sin);
  };

  const handleCosClick = () => {
    handleScientificFunctionClick(Math.cos);
  };

  const handleTanClick = () => {
    handleScientificFunctionClick(Math.tan);
  };

  const handleLogClick = () => {
    handleScientificFunctionClick(Math.log10);
  };

  return (
    <div className="calculator">
        <h1>Calculator</h1>
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
        <button onClick={handleClearClick}>C</button>
        <button onClick={handleDeleteClick}>DEL</button>
        <button onClick={handleEqualsClick}>=</button>
        <button onClick={handleSquareRootClick}>√</button>
        <button onClick={handleSquareClick}>x²</button>
        <button onClick={handleSinClick}>sin</button>
        <button onClick={handleCosClick}>cos</button>
        <button onClick={handleTanClick}>tan</button>
        <button onClick={handleLogClick}>log</button>
      </div>
    </div>
  );
};

export default Calculator;
