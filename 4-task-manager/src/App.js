import "./App.css";
import freeCodeCampLogo from "./imgs/freecodecamp-logo.png";

function App() {
  return (
    <div className="task-manager">
      <div className="freecodecamp-logo-container">
        <img
          src={freeCodeCampLogo}
          alt="freecodecamp-logo"
          className="freecodecamp-logo"
        />
      </div>
    </div>
  );
}

export default App;
