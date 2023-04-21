import React from "react";

function CategoryFilter ({ categories, selectedCategory, onCategoryClick }) {
  const categoryButtons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : "";
    return (
      <button
        key={category}
        className={className}
        onClick={() => onCategoryClick(category)}
      >
        {category}
      </button>
    );
  });
  return  (<div className="categories">
    <h5>Category filters</h5>
    {categoryButtons}
    </div>);
};

// function CategoryFilter(props) {
//   // console.log(props.categories)
//   const { categories, selectedCategory, onCategoryClick } = props;

//   const displayCategory = categories.map((category) => {
//     // console.log(category)
//     return <button key={category} className={selectedCategory === category ? "selected" : ""}
//           onClick={() => onCategoryClick(category)}>{category}</button>

//   })

  
  
//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {/* render <button> elements for each category here */}
//       {displayCategory}
     
//     </div>
//   );
// }

export default CategoryFilter;
