import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import AddNetworkForm from '../AddNetworkForm/AddNetworkForm';


const AddNetworkModal = (props) => {

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
        />
      </Modal.Body>

    </Modal>
  );
}

export default AddNetworkModal