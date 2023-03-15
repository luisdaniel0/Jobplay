import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoutes from "./components/Protection/ProtectedRoutes"
import Login from "./pages/Login/Login";  
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import ProtectedRoutes from "./components/Protection/ProtectedRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBS from "./components/Navbar/Nav.jsx"
import Jobs from "./pages/Jobs/Jobs";
import SkillList from "./pages/SkillList/SkillList";
import NetworkList from "./pages/NetworkList/NetworkList";

import "./App.css";

import * as jobService from './services/jobService.js'

function App() {
  const [jobs, setJobs] = useState()

  const handleAddJob = async (jobData) => {
    const newJob = await jobService.createJob(jobData)
    console.log("newJob", newJob)
    setJobs([newJob, ...jobs])
  }

  useEffect(() => {
    const getAllJobs = async () => {
      const data = await jobService.index()
      setJobs(data)
    }

    getAllJobs()
  }, [])


  return (
    <div className="App">
      <NavBS />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/skills" element={<SkillList />} />
          <Route path="/skills/new" element={<NewSkill />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/network" element={<NetworkList />} />
          <Route path="/jobs/"
            element={
              <Jobs
                jobs={jobs}
                handleAddJob={handleAddJob}
              />
            }
          />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App

