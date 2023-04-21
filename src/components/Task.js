import React from "react";
import { TASKS } from "../data";
function Task(props) {
  const deleteTask = () => {
      var task = props
      console.log(task)
      // console.log(TASKS.indexOf(props))

      // task.onDelete(props.text, props.category);
      delete TASKS.props
     
  }

  // const onDelete = (text , category) =>{
  //   delete props

  // }
  return (
    <div className="task">
      <div className="label">{props.category}</div>
      <div className="text">{props.text}</div>
      <button className="delete" onClick={deleteTask}>X</button>
    </div>
  );
}

export default Task;
