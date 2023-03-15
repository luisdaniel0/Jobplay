import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import EditJobModal from '../EditJobModal/EditJobModal';


const JobCardModal = (props) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Header closeButton />

            <Modal.Body>
                <h3 className="body-title">Job Title:</h3>
                <p className="body-detail">
                    {props.title}
                </p>

                <h3 className="body-title">Company:</h3>
                <p className="body-detail">
                    {props.company}
                </p>

                <h3 className="body-title">Status:</h3>
                <p className="body-detail">
                    {String(props.status)}
                </p>

                <Button
                    type="submit"
                    className="edit-job-btn"
                    onClick={() => setModalShow(true)}
                >
                    Edit Job Info
                </Button>

                <EditJobModal
                    title={props.title}
                    company={props.company}
                    status={props.status}
                    starred={props.starred}
                    id={props.id}
                    timeAgo={props.timeAgo}
                    showStar={props.showStar}
                    notes={props.notes}
                    handleEditJob={props.handleEditJob}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

                {props.showStar(props.starred)}
            </Modal.Body>
        </Modal>)
}

export default JobCardModal