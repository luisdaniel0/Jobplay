import React from 'react'
import JobCard from '../../Components/JobCard/JobCard'
import JobsFilter from '../../Components/JobFilter/JobFilter'
import AddJobBtn from '../../Components/AddJobBtn/AddJobBtn'


const Jobs = ({ jobs, handleAddJob, handleDeleteJob, handleJobFilter }) => {
  const days = "X"
  const filters = ['All Jobs', 'Applied', 'Not-Applied', 'In-Progress', 'Starred']

  const loaded = () => {
    let allJobs = jobs.map(job => {
      return (
        <div key={job._id}>
          <JobCard
            title={job.title}
            company={job.company}
            status={job.status}
            starred={job.starred}
            id={job._id}
            sub={`Applied ${days} days ago`}
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
        <JobsFilter
          filters={filters}
          handleJobFilter={handleJobFilter}
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