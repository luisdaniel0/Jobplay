import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import EditJobForm from '../EditJobForm/EditJobForm';

import { useDispatch, useSelector } from 'react-redux'

import './EditJobModal.css'

const EditJobModal = (props) => {
    const { loading, user } = useSelector((state) => state.auth)

    const [star, setStar] = useState(props.starred)

    const [editJobFormData, setEditJobFormData] = useState({
        title: props.title,
        company: props.company,
        status: props.status,
        starred: props.starred,
        notes: props.notes,
        applicant: user.profile,
    })

    const handleFavorite = async () => {
        setEditJobFormData({ ...editJobFormData, starred: true })
        props.handleEditJob(props.id, editJobFormData)
        setStar(true)
    }

    const handleUnfavorite = async () => {
        setEditJobFormData({ ...editJobFormData, starred: false })
        props.handleEditJob(props.id, editJobFormData)
        setStar(false)
    }

    const handleEditJobFormChange = (event) => {
        setEditJobFormData({ ...editJobFormData, [event.target.name]: event.target.value })
    }

    const handleEditJobFormSubmit = () => {
        props.handleEditJob(props.id, editJobFormData)
    }


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ width: "370px", margin: "auto", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        >

            <Modal.Header closeButton />

            <Modal.Body className="edit-job-modal-body">
                <EditJobForm
                    editJobFormData={editJobFormData}
                    id={props.id}
                    star={star}
                    handleFavorite={handleFavorite}
                    handleUnfavorite={handleUnfavorite}
                    handleDeleteJob={props.handleDeleteJob}
                    handleEditJobFormChange={handleEditJobFormChange}
                    handleEditJobFormSubmit={handleEditJobFormSubmit}
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditJobModal