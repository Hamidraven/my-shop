import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <h3>Login</h3>
      <form>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>
          Sign In <FaArrowRight />
        </button>
      </form>
      <div className="forgot-create">
        <span>
          <Link
            to="/reset-password"
            style={{ textDecoration: "underline", color: "black" }}
          >
            Forgot Password?
          </Link>
        </span>
        <span>
          <Link
            to="/create-account"
            style={{ textDecoration: "underline", color: "black" }}
          >
            Create account
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
