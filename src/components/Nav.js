import React from "react";
import { FaSearch, FaUserAlt, FaShoppingBag, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "./Search";

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        Soseki
      </Link>
      <ul className="nav">
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <ul className="utilities">
        <li>
          <a onClick={() => <Search />}>
            <FaSearch />
          </a>
          <a href="#">
            <FaUserAlt />
          </a>
          <a href="#">
            <FaShoppingBag />
          </a>
          <a href="#"></a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
