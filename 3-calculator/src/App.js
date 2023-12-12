import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import { useState } from "react";
import { evaluate } from "mathjs";
import Logo from "./components/Logo";

function App() {
  const [input, setInput] = useState("");

  const addInput = (val) => {
    // Check if the input is empty or the last character is an operator
    if (!input || isOperator(input.slice(-1))) {
      // If empty or last character is operator, only allow numbers
      if (!isNaN(val)) {
        setInput(input + val);
      }
    } else {
      // If not empty and last character is not operator, allow all characters
      setInput(input + val);
    }
  };

  const isOperator = (char) => {
    return ["+", "-", "*", "/", "."].includes(char);
  };

  const calcResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Please add values to do the operations.");
    }
  };

  /* const multipleOperators = () => {
    if(input){
      setInput()
    }
  } */

  return (
    <div className="App">
      <Logo />
      <div className="calculator-container">
        <Input input={input} />
        <div className="row">
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={calcResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => setInput("")}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
