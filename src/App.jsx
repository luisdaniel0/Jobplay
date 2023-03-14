import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import ProtectedRoutes from "./components/Protection/ProtectedRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBS from "./components/Navbar/Nav.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBS />
      <Routes>
        <Route element={<ProtectedRoutes />}>
        </Route>
          <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
