import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const[isSelectedCategory, setSelectedCategory] = useState("All")

  function changeCategory(event) {
    setSelectedCategory(event.target.value)
  }



    const selectedCategory = items.filter((item) => {
      if (isSelectedCategory === "All"){
        return true
      } else {
        return item.category === isSelectedCategory;
      }
    })
  

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={changeCategory} >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items" >
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
