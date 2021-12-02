import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <NavLink to="/home" className="logo" onClick={()=>setIsMobile(false)}>Demo</NavLink>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <NavLink to="/home" className="home">
          <li>Home</li>
        </NavLink>
        <NavLink to="/services" className="services">
          <li>Services</li>
        </NavLink>
        <NavLink to="/about" className="about">
          <li>About</li>
        </NavLink>
        <NavLink to="/contact" className="contact">
          <li>Contact</li>
        </NavLink>
        <NavLink to="/signup" className="signup">
          <li>Signup</li>
        </NavLink>
      </ul>
      <button className="mobile-menu-icon"
      onClick={()=> setIsMobile(!isMobile)}>
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
