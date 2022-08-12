import React from "react";
import about from "./image/about.jpg";
import about1 from "./image/about1.jpg";
import { Link } from "react-router-dom";
import products from "./components/data";
import { motion } from "framer-motion";

export default function Landing() {
  const shuffled = products.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 4);

  return (
    <motion.div
      className="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Link to="products" style={{ textDecoration: "none" }}>
        <div className="start-shopping">
          <p>start shopping</p>
        </div>
      </Link>
      <div className="feautered-products">
        <h4>- FEATURED PRODUCTS -</h4>
        <div className="products">
          {selected.map((item) => {
            const { id, name, price, image } = item;
            return (
              <Link
                to={`products/${id}`}
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
                    <p>${price}.00</p>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="our-story">
        <p>
          Soseki was founded around the idea that not all garments are created
          equal. Picture the distinct feel, fit, and finish of your favorite
          vintage rock tee. Like individual canvasses - the bold colors spring
          to life with texture, imperfection, and soul.
        </p>
        <img src={about} alt="" />
        <p>
          The ink cracks and fades with wear - the fabric gets softer from
          repeated washings. Markings and holes appear, sharing the memories and
          experiences of its owner. Every little detail, no matter how small
          adds to the overall story. A relic of a time gone by - your personal
          holy grail. These are the fundamentals of Soseki.
        </p>
        <img src={about1} alt="err" />
        <p>
          Each of our premium tees is first created around the sense of touch.
          Our cotton and fabrics are beaten, sanded, bashed and thrashed to
          replicate years of wear and adoration. The unisex fit is a harmonious
          balance of styles old and new, and effortlessly accommodates a wide
          range of body types.
        </p>
      </div>
    </motion.div>
  );
}
