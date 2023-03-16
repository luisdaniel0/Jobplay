import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import EditJobModal from '../EditJobModal/EditJobModal';

import Star from '../../assets/Star.png'
import FilledStar from '../../assets/FilledStar.png'

import "./JobCardModal.css"

const JobCardModal = (props) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ width: "370px", margin: "auto", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
            >

            <Modal.Header closeButton />

            <Modal.Body>
                <div className="job-card-modal-desc">
                    <p className="job-card-modal-body-title">Job Title:</p>
                    <p className="job-card-modal-body-detail">
                        {props.title}
                    </p>
                </div>

                <div className="job-card-modal-desc">
                    <p className="job-card-modal-body-title">Company:</p>
                    <p className="job-card-modal-body-detail">
                        {props.company}
                    </p>
                </div>

                <div className="job-card-modal-desc">
                    <p className="job-card-modal-body-title">Status:</p>
                    <p className="job-card-modal-body-detail">
                        {String(props.status)}
                    </p>
                </div>

                <button
                    type="submit"
                    className="edit-job-btn"
                    onClick={() => setModalShow(true)}
                    style={{ display: "inline-block" }}
                >
                    Edit Job Info
                </button>

                <img
                    src={props.starred ? FilledStar : Star}
                    style={{ cursor: 'pointer', display: "inline-block", marginLeft: "100px" }}
                />


                <EditJobModal
                    title={props.title}
                    company={props.company}
                    status={props.status}
                    starred={props.starred}
                    id={props.id}
                    timeAgo={props.timeAgo}
                    showStar={props.showStar}
                    notes={props.notes}
                    handleDeleteJob={props.handleDeleteJob}
                    handleEditJob={props.handleEditJob}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Modal.Body>
        </Modal>)
}

export default JobCardModal