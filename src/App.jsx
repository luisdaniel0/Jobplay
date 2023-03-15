import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import ProtectedRoutes from "./components/Protection/ProtectedRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBS from "./components/Navbar/Nav.jsx"
import Jobs from "./pages/Jobs/Jobs";
import SkillList from "./pages/SkillList/SkillList";

import "./App.css";

import * as jobService from './services/jobService.js'

function App() {
  const [jobs, setJobs] = useState()

  const [filteredJobs, setFilteredJobs] = useState(jobs)

  const handleJobFilter = (filter = "ALL JOBS") => {
    let filterWord = filter.toUpperCase()

    if (filterWord === "ALL JOBS") {
      console.log("jobs", jobs)
      setFilteredJobs(jobs)
    }
    else if (filterWord === "STARRED") {
      let jobFilter = jobs.filter(job => job.starred === true)
      setFilteredJobs(jobFilter)
    }
    else {
      let jobFilter = jobs.filter(job => job.status === filterWord)
      setFilteredJobs(jobFilter)
    }
  }

  const handleAddJob = async (jobData) => {
    const newJob = await jobService.createJob(jobData)
    setJobs([newJob, ...jobs])
  }

  const handleDeleteJob = async (id) => {
    const deletedJob = await jobService.deleteJob(id)
    setJobs(jobs.filter(job => job._id !== deletedJob._id))
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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobs/"
            element={
              <Jobs
                jobs={filteredJobs}
                handleAddJob={handleAddJob}
                handleDeleteJob={handleDeleteJob}
                handleJobFilter={handleJobFilter}
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
