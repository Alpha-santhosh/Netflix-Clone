import { useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
