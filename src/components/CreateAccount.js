import React from "react";
import { Link } from "react-router-dom";

export default function CreateAccount() {
  return (
    <div className="create-account">
      <h3>Login</h3>
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
          to="/login"
          style={{ textDecoration: "underline", color: "black" }}
        >
          Return to login
        </Link>
      </span>
    </div>
  );
}
