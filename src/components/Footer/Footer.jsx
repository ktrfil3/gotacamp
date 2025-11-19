import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-contact">
          <h3>
            Want to write? <br />
            contact<span>@</span>gotacamp.com
            <br />
            <br />
            (760) 892-4682
          </h3>

          <p className="secondary">
            GOTA Camp was born out of a mission: to restore health, renew hope, and guide people toward a fulfilling life in a Christian environment.
          </p>

          <Link to="/contact" className="btn">
            Get in Touch
          </Link>
        </div>

        <div className="footer-nav">
          <Link to="/" className="footer-nav-item">
            <span>Home</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/work" className="footer-nav-item">
            <span>Work</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/about" className="footer-nav-item">
            <span>About</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/contact" className="footer-nav-item">
            <span>Contact</span>
            <span>&#8594;</span>
          </Link>
          <Link to="/Blog" className="footer-nav-item">
            <span>Blog</span>
            <span>&#8594;</span>
          </Link>
          <Link to="/faq" className="footer-nav-item">
            <span>FAQ</span>
            <span>&#8594;</span>
          </Link>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-header">
          <h1>GOTA</h1>
          <h1>CAMP</h1>
        </div>

        <div className="footer-copyright-line">
          <p className="primary sm">&copy; Gotacamp 2025</p>
          <p className="primary sm">Website by <a href="https://neuronixve.vercel.app">Neuronix</a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
