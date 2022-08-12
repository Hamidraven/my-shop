import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CreateAccount() {
  return (
    <motion.div
      className="create-account"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3>Create Account</h3>
      <form>
        <span className="name">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </span>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Create</button>
      </form>
      <span>
        <Link
          to="/my-shop/login"
          style={{ textDecoration: "underline", color: "black" }}
        >
          Return to login
        </Link>
      </span>
    </motion.div>
  );
}
