import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Category from "../components/Category";
import products from "../components/data";
import Loading from "../components/Loading";
import { motion } from "framer-motion";

export const Products = () => {
  const [items, setItems] = useState(products);
  const [numberOfItems, setNumberOfItems] = useState(8);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setNumberOfItems((e) => e + 4);
    }, 2000);
  };

  return (
    <motion.div
      className="shop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Category categoryList={categoryList} filterCategory={filterCategory} />
      <div className="products-list">
        {items.map((item) => {
          const { id, name, price, image } = item;
          return (
            <Link
              to={`${id}`}
              key={id}
              style={{ color: "black", textDecoration: "none" }}
            >
              <article>
                <div className="image-container">
                  <div className="backdrop-filter"></div>
                  <img src={image[0]} alt={name} />
                </div>
                <div className="details">
                  <h4>{name}</h4>
                  <p>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      currencyDisplay: "narrowSymbol",
                    }).format(price)}
                    .00
                  </p>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
      <div className="button-load">
        {!loading ? (
          <button onClick={() => loadMore()}>load more</button>
        ) : (
          <Loading />
        )}
      </div>
    </motion.div>
  );
};

export default Products;
