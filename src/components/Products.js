import { React } from "react";
import { Link } from "react-router-dom";
import products from "./data";

export const Products = ({ items }) => {
  return (
    <div className="products-list">
      {items.map((item) => {
        const { id, name, price, image } = item;
        return (
          <Link to={`/products/${id}`}>
            <article key={id}>
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
  );
};

export default Products;
