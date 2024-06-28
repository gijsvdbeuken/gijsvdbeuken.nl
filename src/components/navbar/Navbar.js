import React from "react";
import { Link } from "react-router-dom";
import "../../Global.css";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Logo here</div>
        <div className="navbar-links">
          <Link className="navbar-link" to="/portfolio">
            Portfolio
          </Link>
          <Link className="navbar-link" to="/about">
            Over
          </Link>
        </div>
        <div className="navbar-contact">
          <Link className="navbar-btn" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
