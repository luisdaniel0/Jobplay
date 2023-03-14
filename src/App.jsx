import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import { Routes, Route } from "react-router-dom";
// import DashBoard from "./DashBoard.jsx";
// import Login from "./Login.jsx";
// import Register from "./Register.jsx";
import ProtectedRoutes from "./components/Protection/ProtectedRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBS from "./components/Navbar/Nav.jsx"
import SkillList from "./pages/SkillList/SkillList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBS />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          {/* <Route path="/" element={<DashBoard />} /> */}
        </Route>
        <Route path="/skills" element={<SkillList />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} /> */}
      </Routes>
    </div>
  );
}

export default App;
