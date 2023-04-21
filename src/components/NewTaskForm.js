import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const displayCategories = categories.map((item) => (
    <option key={item}>{item}</option>
  ))

  function handleSubmit(e){
    e.preventDefault();
    onTaskFormSubmit({text, category});
    setText("");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {displayCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
