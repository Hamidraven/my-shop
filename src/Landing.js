import React from "react";
import about from "./image/about.jpg";
import about1 from "./image/about1.jpg";

export default function Landing() {
  return (
    <div className="main">
      <div className="new-release">
        <p>NEW RELEASES</p>
      </div>
      <h2 className="featured">-Featured Products-</h2>
      <div className="one-kind">ONE OF A KIND</div>
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
