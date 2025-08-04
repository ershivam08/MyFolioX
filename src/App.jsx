import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Footer from "./Component/Footer";
import Generator from "./Pages/Generator";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Generator" element={<Generator/>} />
      </Routes>
      <Footer/>
    </>
  );
}
