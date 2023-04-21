import React from "react";
// import { TASKS } from "../data";

function Task ({ task, onDeleteTask }) {
  const handleDeleteClick = () => {
    onDeleteTask(task.id);
  };

  return (
    <div className="task">
      <div className="label">{task.text}</div>
      <div className="text">{task.category}</div>
      <button className="delete" onClick={handleDeleteClick}>X</button>
    </div>
  );
};



export default Task;
