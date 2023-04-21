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


// function Task(props) {
//   const deleteTask = () => {
//       var task = props
//       console.log(task)
//       // console.log(TASKS.indexOf(props))

//       // task.onDelete(props.text, props.category);
//       delete TASKS.props
     
//   }

//   // const onDelete = (text , category) =>{
//   //   delete props

//   // }
//   return (
//     <div className="task">
//       <div className="label">{props.category}</div>
//       <div className="text">{props.text}</div>
//       <button className="delete" onClick={deleteTask}>X</button>
//     </div>
//   );
// }

export default Task;
