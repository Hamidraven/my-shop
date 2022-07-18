import React from "react";
import { useParams } from "react-router-dom";
import products from "./data";

const Item = () => {
  let { itemId } = useParams();
  const item = products.find((product) => product.id == itemId);
  const {
    name,
    availableSizes,
    price,
    color,
    material,
    countryOfOrigin,
    extraInfo,
    description,
    image,
  } = item;

  const sizeList = [];

  for (const [key, value] of Object.entries(availableSizes)) {
    sizeList.push({ key, value });
  }

  console.log(sizeList);
  console.log(availableSizes);

  return (
    <div className="product">
      <div className="image-container">
        <img src={image[0]} alt={name} className="img1" />
        <img src={image[1]} alt={name} className="img2" />
        {image[2] ? (
          <img src={image[2]} alt={name} className="img3" />
        ) : undefined}
      </div>
      <div className="details">
        <h5>{name}</h5>
        <p className="price">${price}.00</p>
        <p className="color">{color}</p>
        <p className="material-countryOfOrigin">
          {material} - MADE IN THE {countryOfOrigin}
        </p>
        {extraInfo ? <p className="extraInfo">{extraInfo}</p> : undefined}
        <p className="description">{description}</p>
      </div>
      <div className="shop">
        <ul className="size-list">
          {sizeList.map((size) => {
            return (
              <li>
                <input type="radio" name="size" value={size.key} />
                <label htmlFor={size.key}>{size.key.toUpperCase()}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Item;
