import React, { useState } from "react";
import products from "./components/data";
import Products from "./components/Products";
import Category from "./components/Category";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const categoryList = [
  "all",
  ...new Set(products.map((product) => product.category)),
];

export default function App() {
  const [items, setItems] = useState(products);
  const [user, setUser] = useState(null);

  const filterCategory = (category) => {
    if (category === "all") {
      setItems(products);
      return;
    }

    const newCategory = products.filter((item) => item.category === category);
    setItems(newCategory);
    console.log(category);
  };

  return (
    <div>
      <header>
        <div className="background-filter"></div>
        <Nav />
      </header>
      <main>
        <h2 className="featured">Featured Products</h2>
        <Category categoryList={categoryList} filterCategory={filterCategory} />
        <Products items={items} />
      </main>
    </div>
  );
}
