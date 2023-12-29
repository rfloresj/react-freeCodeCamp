import React, { useState } from "react";
import "./TaskForm.css";

function TaskForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    console.log("Writing...");
  };

  const handleSend = (e) => {
    const newTask = {
      id: "34545",
      text: "Hi",
    };
  };

  return (
    <form className="task-form">
      <input
        className="input-task"
        type="text"
        placeholder="Write a task"
        name="text"
        onChange={handleChange}
      />
      <button className="button-task">Add Task</button>
    </form>
  );
}

export default TaskForm;
