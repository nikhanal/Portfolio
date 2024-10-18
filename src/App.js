import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import CVPage from "./components/CVPage";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </div>
  );
}
export default App;
