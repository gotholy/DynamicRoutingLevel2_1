import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Car from "./components/Car";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Car/:id" element={<Car />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
