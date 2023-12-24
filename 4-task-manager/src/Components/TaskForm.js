import React from "react";
import "./TaskForm.css";

function TaskForm(props) {
  return (
    <form className="task-form">
      <input
        className="input-task"
        type="text"
        placeholder="Wrire a task"
        name="text"
      />
      <button className="button-task">Add Task</button>
    </form>
  );
}

export default TaskForm;
