import React, { useState } from "react";
import {
  FaSearch,
  FaUserAlt,
  FaShoppingBag,
  FaBars,
  FaRegTimesCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "./Search";

const Nav = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(() => !show);
  };

  return (
    <nav>
      <Link to="/" className="logo">
        Soseki
      </Link>
      <div className="nav-wrapper">
        <ul className={`nav ${show && "slide-nav"}`}>
          <FaRegTimesCircle className="close" onClick={() => handleToggle()} />
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
      </div>
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
          <a href="#" className="show-nav" onClick={() => handleToggle()}>
            <FaBars />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
