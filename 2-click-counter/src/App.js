import "./App.css";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const handleClick = () => {
    console.log("Click");
  };

  const restartCounter = () => {
    console.log("Restart");
  };

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
        <Counter numClicks={"5"} />
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

export default App;
