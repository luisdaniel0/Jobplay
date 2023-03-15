import React from 'react'
import Button from 'react-bootstrap/Button'

const JobFilter = ({ filters, handleJobFilter }) => {
  return (
    <div>
      {filters.map((filter, index) => (
        <Button
          key={index}
          value={filter}
          onClick={() => handleJobFilter(filter)}
        >
          {filter}
        </Button>
      ))}
    </div>
  )
}

export default JobFilter