import React from "react";
import TaskForm from "./TaskForm";
import "./TasksList.css";

function TasksList() {
  return (
    <>
      <TaskForm />
      <div className="tasks-list-container">TASKS LISTS</div>
    </>
  );
}

export default TasksList;
