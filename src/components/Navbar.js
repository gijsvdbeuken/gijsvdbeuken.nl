import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo"></div>
        <div className="navbar-links">
          <Link className="navbar-link" to="/portfolio">
            Portfolio
          </Link>
          <Link className="navbar-link" to="/about">
            About
          </Link>
          <Link className="navbar-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
