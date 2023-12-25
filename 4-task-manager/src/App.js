import "./App.css";
import freeCodeCampLogo from "./imgs/freecodecamp-logo.png";
import TaskForm from "./Components/TaskForm";

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
      <div className="principal-to-do-list">
        <h1>My Tasks</h1>
        <TaskForm />
      </div>
    </div>
  );
}

export default App;
