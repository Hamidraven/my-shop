import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Category = ({ categoryList, filterCategory }) => {
  return (
    <div className="category-list">
      <button className="bar">
        <GiHamburgerMenu style={{ fontSize: 30 }} />
      </button>
      <ul>
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
