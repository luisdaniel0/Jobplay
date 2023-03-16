import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import AddJobForm from '../AddJobForm/AddJobForm'
import { useDispatch, useSelector } from 'react-redux'


const AddJobModal = (props) => {
  const { loading, user } = useSelector((state) => state.auth)

  const [star, setStar] = useState(false)

  const [jobFormData, setFormData] = useState({
    title: "",
    company: "",
    status: "",
    starred: false,
    notes: "",
    applicant: user.profile,
  })

  const handleFavorite = async () => {
    setFormData({ ...jobFormData, starred: true })
    setStar(true)
  }

  const handleUnfavorite = async () => {
    setFormData({ ...jobFormData, starred: false })
    setStar(false)
  }

  const handleJobFormChange = (event) => {
    setFormData({ ...jobFormData, [event.target.name]: event.target.value })
  }

  const handleJobFormSubmit = (event) => {
    // event.preventDefault()
    props.handleAddJob(jobFormData)
  }


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Header closeButton/>

      <Modal.Body>
        <AddJobForm
          star={star}
          jobFormData={jobFormData}
          handleFavorite={handleFavorite}
          handleUnfavorite={handleUnfavorite}
          handleJobFormChange={handleJobFormChange}
          handleJobFormSubmit={handleJobFormSubmit}
        />
      </Modal.Body>

    </Modal>
  );
}

export default AddJobModal