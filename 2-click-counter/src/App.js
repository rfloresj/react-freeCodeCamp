import "./App.css";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="logo-freeCodeCamp"
        />
        <div className="principal-container"></div>
      </div>
    </div>
  );
}

export default App;
