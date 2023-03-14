import React, { useState, useEffect } from 'react'
import JobCard from '../../Components/JobCard/JobCard'
import JobsFilter from '../../Components/JobFilter/JobFilter'
import AddJobBtn from '../../Components/AddJobBtn/AddJobBtn'


const Jobs = ({ jobs, handleAddJob }) => {
  const days = "X"
  const filters = ['All Jobs', 'Applied', 'In-Progress', 'Starred']

  const loaded = () => {
    let allJobs = jobs.map(job => {
      return (
        <div key={job._id}>
          <JobCard
            main={job.title}
            sub={job.company}
            sub2={job.status}
            sub3={`Applied ${days} days ago`}
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
        <JobsFilter 
          filters={filters}
        />
        <AddJobBtn
          handleAddJob={handleAddJob}
        />
      </div>

      {jobs ? loaded() : loading()}

    </div>
  )
}

export default Jobs