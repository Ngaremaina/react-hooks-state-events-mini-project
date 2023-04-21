import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const [categories, setCategories] = useState(CATEGORIES);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (text, category) => {
    const newTask = {
      text: text,
      category: category,
      id: tasks.length + 1,
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  let displayedTasks = tasks;
  if (selectedCategory !== "All") {
    displayedTasks = tasks.filter(
      (task) => task.category === selectedCategory
    );
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} selectedCategory={selectedCategory}  onCategoryClick={handleCategoryClick}
      />
      <TaskList tasks={displayedTasks} onDeleteTask={handleDeleteTask} />
      <NewTaskForm
        categories={categories.filter((category) => category !== "All")}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
    </div>
  );



  // const [category, setCategory] = useState("All");
  // const [tasks, setTasks] = useState(TASKS)
  

  // function handleCategoryClick(clickedCategory) {
  //   setCategory(clickedCategory);
  // }
  // function onTaskFormSubmit(text, category) {
  //   const newTask = { text, category };
  //   setTasks([...tasks, newTask]);
  // }

  // const filteredTasks = category === "All" ? TASKS : TASKS.filter((task) => task.category === category);

  // return (
  //   <div className="App">
  //     <h2>My tasks</h2>
  //     <NewTaskForm categories = {CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
  //     <TaskList tasks={filteredTasks} />
  //     <CategoryFilter categories={CATEGORIES} selectedCategory={category} onCategoryClick={handleCategoryClick}/>
  //   </div>
  // );
}

export default App;
