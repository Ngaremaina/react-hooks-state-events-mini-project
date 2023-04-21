import React,{useState} from "react";

function NewTaskForm(props) {
  // console.log(props.categories)
  const { categories, onTaskFormSubmit } = props;
  const [text, setName] = useState({});
  const [category, setCategory] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit(category, text);
    
    // setName("");
  }

  function handleChange(event){
    let txt =  event.target.id
    
    
    setName(prevObj => {return {...prevObj,[txt]:event.target.value}})  
  }

  function handleChanging(event){
    let cat = event.target.id
    setCategory(prevObj => {return {...prevObj,[cat]:event.target.value}})  
    
  }
  const displayCategory = categories.map(category => {
    // console.log(category)
    return <option key={category}>{category}</option>
  })

 

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} id = "text" onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={category} id = "category" onChange={handleChanging}>
          {/* render <option> elements for each category here */}
          {displayCategory}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
