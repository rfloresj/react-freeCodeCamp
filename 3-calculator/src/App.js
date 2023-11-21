import "./App.css";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img
          src={freeCodeCampLogo}
          alt="freeCodeCamp-logo"
          className="freecodecamp-logo"
        />
      </div>
      <div className="calculator-container">
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
