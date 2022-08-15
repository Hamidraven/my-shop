import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>About Us</h2>
      <p>
        Soseki is proud to offer you an ever expanding, exclusive collection of
        one of a kind merchandise. This completely handmade collection
        encompasses various rare and iconic prints alike, an array of chain
        stitched and hand painted jackets, and a glimpse into music’s rich
        history through decades of unique designs and techniques. Some of our
        favorites are featured on this page, with all one of a kind styles
        available in the link below.
      </p>

      <address>
        <h4>ADRESS</h4>
        2211 N Hollywood Way <br />
        burbank, ca 91505
        <h4>MAIL</h4>
        <a href="info@Soseki.com">info@Soseki.com</a>
      </address>
    </motion.div>
  );
};

export default About;
