import { React } from "react";
import { Link, useLocation } from "react-router-dom";

export const Products = () => {
  const items = useLocation().state.items;

  return (
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
  );
};

export default Products;
