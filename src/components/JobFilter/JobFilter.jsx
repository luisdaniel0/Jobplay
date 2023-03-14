import React from 'react'
import Button from 'react-bootstrap/Button'

const JobFilter = ({ filters }) => {
  return (
    <div>
      {filters.map((filter, index) => (
        <Button key={index}>{filter}</Button>
      ))}
    </div>
  )
}

export default JobFilter