import React, { useState } from "react";
import about from "./image/about.jpg";
import about1 from "./image/about1.jpg";
import { Link } from "react-router-dom";
import products from "./components/data";

export default function Landing() {
  const [items, setItems] = useState(products);
  return (
    <div className="main">
      <Link
        to="/products"
        state={{ items: items }}
        style={{ textDecoration: "none" }}
      >
        <div className="start-shopping">
          <p>start shopping</p>
        </div>
      </Link>
      <div className="our-story">
        <p>
          MadeWorn was founded around the idea that not all garments are created
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
          holy grail. These are the fundamentals of Made Worn.
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
    </div>
  );
}
