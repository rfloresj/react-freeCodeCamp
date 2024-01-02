import React, { useState } from "react";
import "./TaskForm.css";
import { v4 as uuidv4 } from "uuid";

function TaskForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = (e) => {
    console.log("Sending form...");
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false,
    };
  };

  return (
    <form className="task-form" onSubmit={handleSend}>
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
