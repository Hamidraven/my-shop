import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Category = ({ categoryList, filterCategory }) => {
  const [active, isActive] = useState(false);

  const handleClick = () => {
    isActive((active) => !active);
  };

  const mobileHeight = window.innerWidth < 768 && active;

  return (
    <div className="category-list">
      <button className="bar" onClick={handleClick}>
        Filter
        <FaPlus style={{ fontSize: 15, marginLeft: 5 }} />
      </button>
      <ul className="category-list" style={{ height: mobileHeight && "25ch" }}>
        {categoryList.map((category, index) => {
          return (
            <li key={index} onClick={() => filterCategory(category)}>
              <button key={index} onClick={() => filterCategory(category)}>
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
