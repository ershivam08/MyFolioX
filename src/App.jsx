import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Footer from "./Component/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer/>
    </>
  );
}
