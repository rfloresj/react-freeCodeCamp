import React, { useState } from "react";
import TaskForm from "./TaskForm";
import "./TasksList.css";

function TasksList() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <TaskForm />
      <div className="tasks-list-container">
        {tasks.map((task) => (
          <Task text={task.text} completed={task.completed} />
        ))}
      </div>
    </>
  );
}

export default TasksList;
