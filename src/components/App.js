import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [category, setCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS)
  

  function handleCategoryClick(clickedCategory) {
    setCategory(clickedCategory);
  }
  function onTaskFormSubmit(text, category) {
    const newTask = { text, category };
    setTasks([...tasks, newTask]);
  }

  const filteredTasks = category === "All" ? TASKS : TASKS.filter((task) => task.category === category);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <NewTaskForm categories = {CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} />
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onCategoryClick={handleCategoryClick}/>
    </div>
  );
}

export default App;
