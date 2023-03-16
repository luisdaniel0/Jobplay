import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoutes from "./components/Protection/ProtectedRoutes"
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBS from "./components/Navbar/Nav.jsx"
import Jobs from "./pages/Jobs/Jobs";
import SkillList from "./pages/SkillList/SkillList";
import NetworkList from "./pages/NetworkList/NetworkList";
import Badges from "./pages/Badges/Badges";
import "./App.css";
import Reward from "./pages/Reward/Reward";
import SkillRewardPage from "./components/RewardPage/SkillRewardPage";
import JobRewardPage from "./components/RewardPage/JobRewardPage";
import NetRewardPage from "./components/RewardPage/NetRewardPage";

function App() {
  return (
    <div className="App">
      <NavBS />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/skills" element={<SkillList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/network" element={<NetworkList />} />
          <Route path="/jobs/" element={<Jobs />} />
          <Route path="/reward/" element={<Reward />} />
          <Route path="/skillreward" element={<SkillRewardPage />} />
          <Route path="/jobreward" element={<JobRewardPage />} />
          <Route path="/netreward" element={<NetRewardPage />} />
          <Route path="/badge" element={<Badges />}/>
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App

