import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Hero />} />
      </Routes>
    </div>
  );
}
export default App;
