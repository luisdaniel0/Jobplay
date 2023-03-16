import React, { useState, useEffect } from 'react'
import JobCard from '../../components/JobCard/JobCard'
import JobFilter from '../../components/JobFilter/JobFilter'
import AddJobBtn from '../../components/AddJobBtn/AddJobBtn'

import * as jobService from '../../services/jobService.js'


const Jobs = () => {
  const days = "X"
  const filters = ['All Jobs', 'Applied', 'Not-Applied', 'In-Progress', 'Starred']

  const [jobs, setJobs] = useState()
  const [filteredJobs, setFilteredJobs] = useState()

  const handleJobFilter = (filter = "ALL JOBS") => {
    let filterWord = filter.toUpperCase()
    console.log("Filter Word", filterWord)

    if (filterWord === "ALL JOBS") {
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
    window.location.reload()
  }

  useEffect(() => {
    const getAllJobs = async () => {
      const data = await jobService.index()
      setJobs(data)
      setFilteredJobs(data)
    }

    getAllJobs()
  }, [])

  const loaded = () => {
    let allJobs = filteredJobs.map(job => {
      return (
        <div key={job._id}>
          <JobCard
            title={job.title}
            company={job.company}
            status={job.status}
            starred={job.starred}
            id={job._id}
            createdDate={job.createdAt}
            handleDeleteJob={handleDeleteJob}
          />
        </div>
      )
    })

    return (
      <>
        {allJobs}
      </>
    )
  }

  const loading = () => {
    return (
      <div>
        There are no jobs...
      </div>
    )
  }

  console.log(jobs)

  return (
    <div className="container-fluid">
      <h1 style={{ textDecoration: "underline" }}>Jobs</h1>

      <div>
        <JobFilter
          filters={filters}
          handleJobFilter={handleJobFilter}
        />
        <AddJobBtn
          handleAddJob={handleAddJob}
        />
      </div>

      <div className="job-card-container">
        {jobs ? loaded() : loading()}
      </div>

    </div>
  )
}

export default Jobs