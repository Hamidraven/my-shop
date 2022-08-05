import React from "react";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  return (
    <div className="reset-password">
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
    </div>
  );
}
