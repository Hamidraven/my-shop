import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Category from "./Category";
import products from "./data";

export const Products = () => {
  const [items, setItems] = useState(products);
  const [numberOfItems, setNumberOfItems] = useState(8);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false)


  //JS NUGGET FOR UNIQUE PROPERTIES
  const categoryList = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];


  //FILTER CATEGORY OF PRODUCTS
  const filterCategory = (category) => {
    setNumberOfItems(() => 8);
    if (category === "all") {
      setItems(products);
      return;
    }

    const newCategory = products.filter((item) => item.category === category);
    setItems(() => newCategory.slice(0, numberOfItems));
    setFilter(() => newCategory);
    console.log(newCategory);
  };


  //load more items on click
  useEffect(() => {
    if (filter.length === 0) {
      // IF FILTER IS "ALL PRODUCTS"
      setItems(() => products.slice(0, numberOfItems));
    } else {
      //IF PRODUCT LIST IS FILTERRED
      setItems(() => filter.slice(0, numberOfItems));
    }
  }, [numberOfItems]);


  //click to load 4 more items
  const loadMore = () => {
    setNumberOfItems((e) => e + 4);
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
      {!loading ? <button onClick={() => loadMore()}>load more</button> : "hel"}
    </div>
  );
};

export default Products;
