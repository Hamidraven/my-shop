import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ResetPassword() {
  return (
    <motion.div
      className="reset-password"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3>Reset your password</h3>
      <h4>We will send you an email to reset your password.</h4>
      <form>
        <input type="text" placeholder="Email" />
        <button>Submit</button>
      </form>
      <div className="log-back">
        <span>
          <Link
            to="/login"
            style={{
              textDecoration: "underline",
              color: "black",
            }}
          >
            Login
          </Link>
        </span>
      </div>
    </motion.div>
  );
}
