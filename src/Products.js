import React from "react";

export const Products = ({ items }) => {
  return (
    <div className="products-list">
      {items.map((item) => {
        const { id, name, price, image } = item;
        return (
          <article key={id}>
            <img
              src={image[0]}
              alt={name}
              onMouseOver={setTimeout(() => (this.src = image[1]), 1000)}
            />
            <div className="details">
              <h4>{name}</h4>
              <p>${price}.00</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
/*
const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { name, price, image } = item;
        return (
          <h2>{name}</h2>
        );
      })}
    </div>
  );
};
*/

export default Products;
