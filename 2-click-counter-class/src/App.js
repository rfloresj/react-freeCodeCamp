import React from "react";
import "./App.css";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClicks: 0,
    };
  }

  handleClick() {
    this.setState();
  }

  render() {
    return (
      <div className="App">
        <div className="freecodecamp-logo-container">
          <img
            className="freecodecamp-logo"
            src={freeCodeCampLogo}
            alt="logo-freeCodeCamp"
          />
        </div>
        <div className="main-container">
          <Counter numClicks={this.state.numClicks} />
          <Button text="Click" isButtonClick={true} handleClick={handleClick} />
          <Button
            text="Reset"
            isButtonClick={false}
            handleClick={restartCounter}
          />
        </div>
      </div>
    );
  }
}

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  };

  const restartCounter = () => {
    setNumClicks(0);
  };
}

export default App;
