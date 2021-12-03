import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <NavLink to="/" activeClassName="active" className="logo" onClick={()=>setIsMobile(false)}>
      <i className="fas fa-house-user">eState</i></NavLink>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <NavLink activeClassName="active" to="/home" className="home">
          <li>Home</li>
        </NavLink>
        <NavLink activeClassName="active" to="/services" className="services">
          <li>Services</li>
        </NavLink>
        <NavLink activeClassName="active" to="/about" className="about">
          <li>About</li>
        </NavLink>
        <NavLink activeClassName="active" to="/contact" className="contact">
          <li>Contact</li>
        </NavLink>
        <NavLink activeClassName="active" to="/signup" className="signup">
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
