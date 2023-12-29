import React, { useState } from "react";
import TaskForm from "./TaskForm";
import "./TasksList.css";
import Task from "./Task";

function TasksList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    console.log("Task added");
    console.log(task);
  };

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
