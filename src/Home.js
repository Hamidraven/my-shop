import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import Category from "./components/Category";
import Nav from "./components/Nav";
import Landing from "./Landing";
import products from "./components/data";

// const categoryList = [
//   "all",
//   ...new Set(products.map((product) => product.category)),
// ];

export default function Home() {
  const [items, setItems] = useState(products);

  // const filterCategory = (category) => {
  //   if (category === "all") {
  //     setItems(products);
  //     return;
  //   }

  //   const newCategory = products.filter((item) => item.category === category);
  //   setItems(newCategory);
  //   console.log(category);
  // };

  return (
    <div>
      <header>
        <Nav />
        <div className="background-filter"></div>
      </header>
      <main>
        {/* <h2 className="featured">Featured Products</h2>
        <Category categoryList={categoryList} filterCategory={filterCategory} />
        <Products items={items} /> */}
        <Link to="/products" state={{ items: items }}>
          shop
        </Link>
        <Outlet />
      </main>
      <footer>
        <form>
          <label htmlFor="email-list">JOIN THE SOSEKI MAILING LIST</label>
          <input
            type="text"
            id="email-list"
            htmlFor="email-list"
            placeholder="email address"
          />
          <input type="submit" value="subscribe" />
          <p className="copyright">©2022 SOSEKI - All Rights Reserved</p>
        </form>
        <div className="contact-us">
          <div className="social-media">
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com">
              <FaFacebookF />
            </a>
          </div>
          <div className="footer-nav">
            <ul>
              <li>contact</li>
              <li>returns</li>
              <li>privacy policy</li>
              <li>accessibility</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
