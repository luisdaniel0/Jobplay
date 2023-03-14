import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import AddJobForm from '../AddJobForm/AddJobForm'
import { useDispatch, useSelector } from 'react-redux'


const AddJobModal = (props) => {
  const { loading, user } = useSelector((state) => state.auth)

  const [jobFormData, setFormData] = useState({
    title: "",
    company: "",
    status: "",
    applicant: user.profile,
  })

  const handleJobFormChange = (event) => {
    setFormData({ ...jobFormData, [event.target.name]: event.target.value })
  }

  const handleJobFormSubmit = (event) => {
    event.preventDefault()

    console.log('jobFormData', jobFormData)
    props.handleAddJob(jobFormData)
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Job
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <AddJobForm
          jobFormData={jobFormData}
          handleJobFormChange={handleJobFormChange}
          handleJobFormSubmit={handleJobFormSubmit}
        />
      </Modal.Body>

    </Modal>
  );
}

export default AddJobModal