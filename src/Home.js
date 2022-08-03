import React, { useState, useEffect, createContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import Nav from "./components/Nav";


export default function Home() {
  const [page, setPage] = useState("");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("products")) {
      setPage(() => "Products");
    } else if (location.pathname.includes("about")) {
      setPage(() => "About");
    } else {
      setPage(() => "");
    }
  }, [location]);


  const handleAddToCart = () => {
    console.log("tada!");
  };

  return (
    <div>
      <header>
        <Nav />
        <div className="background-filter"></div>
        <h1 style={{ fontFamily: "Shadows Into Light, serif" }}>{page}</h1>
      </header>
      <main>
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
