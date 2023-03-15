import React, { useState, useEffect } from 'react'
import JobCard from '../../Components/JobCard/JobCard'
import JobsFilter from '../../Components/JobFilter/JobFilter'
import AddJobBtn from '../../Components/AddJobBtn/AddJobBtn'

import * as jobService from '../../services/jobService.js'


const Jobs = () => {
  const filters = ['All Jobs', 'Applied', 'In-Progress', 'Starred']

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

  const handleEditJob = async (id, jobData) => {
    console.log('edit job data', jobData)
    const editedJob = await jobService.updateJob(id, jobData)
    const newJobsArray = jobs.map(job =>
      job._id === editedJob._id ? editedJob : job
    )
    setJobs(newJobsArray)
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
        <div
          key={job._id}
          className="d-flex justify-content-center align-item-center col"
        >
          <JobCard
            title={job.title}
            company={job.company}
            status={job.status}
            starred={job.starred}
            notes={job.notes}
            id={job._id}
            createdDate={job.createdAt}
            handleEditJob={handleEditJob}
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
    <div className="container-fluid g-3 row row-cols-lg-2 row-cols-md-1 row-cols-1">
      <h1 style={{ textDecoration: "underline" }}>Jobs</h1>

      <div>
        <JobsFilter
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