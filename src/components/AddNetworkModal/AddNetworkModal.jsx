import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux'
import AddNetworkForm from '../AddNetworkForm/AddNetworkForm';


const AddNetworkModal = (props) => {
  const { loading, user } = useSelector((state) => state.auth)

  const [networkFormData, setNetworkFormData] = useState({
    name: "",
    title: "",
    company: "",
    eventName: "",
    networker: user.profile,
  })

  const handleNetworkFormChange = (event) => {
    setNetworkFormData({ ...networkFormData, [event.target.name]: event.target.value })
  }

  const handleNetworkFormSubmit = (event) => {
    props.handleAddNetwork(networkFormData)
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
          Add Connection/Event
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <AddNetworkForm
          networkFormData={networkFormData}
          handleNetworkFormChange={handleNetworkFormChange}
          handleNetworkFormSubmit={handleNetworkFormSubmit}
        />
      </Modal.Body>

    </Modal>
  );
}

export default AddNetworkModal