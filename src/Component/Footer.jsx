import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="logo">MyFolio<span>X</span></h2>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/template">Templates</Link>
          <Link to="/generate">Generate</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-social">
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} MyFolioX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
