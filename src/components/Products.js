import { React, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Category from "./Category";
import products from "./data";

export const Products = () => {
  const [items, setItems] = useState(products);
  const categoryList = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

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
    <div className="shop">
      <Category categoryList={categoryList} filterCategory={filterCategory} />
      <div className="products-list">
        {items.map((item) => {
          const { id, name, price, image } = item;
          return (
            <Link to={`/products/${id}`} key={id}>
              <article>
                <div className="image-container">
                  <div className="backdrop-filter"></div>
                  <img src={image[0]} alt={name} />
                </div>
                <div className="details">
                  <h4>{name}</h4>
                  <p>${price}.00</p>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
