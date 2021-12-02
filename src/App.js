import "./App.css";
import React, { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";
import Signup from "./Signup"

//import ResponsiveNavBar from "./ResponsiveNavBar.js";
import Navbar from "./Navbar.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
