import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import AddJobBtn from '../AddJobBtn/AddJobBtn'

import "./JobFilter.css"


const JobFilter = ({ filters, handleJobFilter, handleAddJob }) => {
  return (
    <>
      <div className="job-filter-container">
        <div className="job-filter-btn-group">
          <ButtonGroup>
            {
              filters.map((filter, index) => (
                <button
                  className={`job-filter-btn pill-button justify-content-center ${filter === 'all' ? 'active' : ''}`}
                  key={index}
                  value={filter}
                  onClick={() => handleJobFilter(filter)}
                >
                  {filter}
                </button>
              ))
            }

          </ButtonGroup >
        </div>
      </div>

        <AddJobBtn
          handleAddJob={handleAddJob}
        />
    </>
  )
}

export default JobFilter