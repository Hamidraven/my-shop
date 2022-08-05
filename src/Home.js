import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import Nav from "./components/Nav";
import shopping from "./image/shopping.jpg";
import about1 from "./image/about1.jpg";
import bannerphone from "./image/bannerphone.jpg";
import banner from "./image/banner.jpg";

export default function Home() {
  const [page, setPage] = useState("");
  const location = useLocation();
  const [headerImage, setHeaderImage] = useState(about1);

  useEffect(() => {
    if (location.pathname.includes("products")) {
      setPage(() => "Products");
      setHeaderImage(() => shopping);
    } else if (location.pathname.includes("about")) {
      setPage(() => "About");
      setHeaderImage(() => about1);
    } else {
      setPage(() => "");
      if (window.innerWidth < 768) {
        setHeaderImage(() => bannerphone);
      } else {
        setHeaderImage(() => banner);
      }
    }
  }, [location]);

  return (
    <div>
      <header style={{ backgroundImage: `url(${headerImage})` }}>
        <Nav />
        <div className="background-filter"></div>
        <div className="header-message">
          <h1 style={{ fontFamily: "Shadows Into Light, serif" }}>{page}</h1>
        </div>
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
          <input
            type="submit"
            value="subscribe"
            onClick={(e) => e.preventDefault}
          />
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
