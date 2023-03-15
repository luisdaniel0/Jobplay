import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import EditJobForm from '../EditJobForm/EditJobForm';

import { useDispatch, useSelector } from 'react-redux'


const EditJobModal = (props) => {
    const { loading, user } = useSelector((state) => state.auth)

    const [editJobFormData, setEditJobFormData] = useState({
        title: props.title,
        company: props.company,
        status: props.status,
        starred: props.starred,
        notes: props.notes,
        applicant: user.profile,
    })
    
    const handleEditJobFormChange = (event) => {
        setEditJobFormData({ ...editJobFormData, [event.target.name]: event.target.value })
    }

    const handleEditJobFormSubmit = (event) => {
        // event.preventDefault()
        props.handleEditJob(props.id, editJobFormData)
    }


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Header closeButton />

            <Modal.Body>
                <EditJobForm
                    editJobFormData={editJobFormData}
                    handleEditJobFormChange={handleEditJobFormChange}
                    handleEditJobFormSubmit={handleEditJobFormSubmit}
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditJobModal