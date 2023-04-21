import React from "react";
import Task from "./Task";

function TaskList(props) {
  const { tasks } = props;
  // console.log(props.tasks)
  // console.log(props.categories)
  const displayTasks = tasks.map(element=>{
    // console.log(element.text)
    // console.log(element.category)
    return <Task key={element.text} text = {element.text} category={element.category}/>
  })
  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}

      {displayTasks}
      
    </div>
  );
}

export default TaskList;
