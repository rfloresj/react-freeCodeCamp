import React from "react";
import "./Task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Task = ({ id, text, completed, completeTask, deleteTask }) => {
  return (
    <div className={completed ? "task-container completed" : "task-container"}>
      <div className="task-text" onClick={completeTask}>
        {text}
      </div>
      <div className="task-container-icons">
        <AiOutlineCloseCircle className="task-icon" />
      </div>
    </div>
  );
};

export default Task;
