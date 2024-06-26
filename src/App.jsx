import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/contact/Contact"
import AboutUs from "./pages/aboutUs/AboutUs"

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
