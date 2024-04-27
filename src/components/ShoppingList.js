import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className="ShoppingList">
   
      <ItemForm />
      

      <Filter onCategoryChange={handleCategoryChange} />
      
  
      <ItemForm onItemFormSubmit={onItemSubmit} />
      
      
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={setSearch} />
      
      
      <ul className="Items">
        {items
          
          .filter((item) => selectedCategory === "All" || item.category === selectedCategory)
          // Filtering by search term
          .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
          .map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
