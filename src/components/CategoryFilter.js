import React from "react";

function CategoryFilter(props) {
  // console.log(props.categories)
  const { categories, selectedCategory, onCategoryClick } = props;

  const displayCategory = categories.map((category) => {
    // console.log(category)
    return <button key={category} className={selectedCategory === category ? "selected" : ""}
          onClick={() => onCategoryClick(category)}>{category}</button>

  })

  
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {displayCategory}
     
    </div>
  );
}

export default CategoryFilter;
