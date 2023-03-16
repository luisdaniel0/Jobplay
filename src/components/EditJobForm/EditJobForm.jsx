import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Star from '../../assets/Star.png'
import FilledStar from '../../assets/FilledStar.png'


import Trash from '../../assets/Trash.png'

import './EditJobForm.css'

const EditJobForm = ({ editJobFormData, id, star, handleFavorite, handleUnfavorite, handleDeleteJob, handleEditJobFormChange, handleEditJobFormSubmit }) => {
    return (
        <>
            <Form className="edit-job-form" onSubmit={handleEditJobFormSubmit}>
                <Form.Group className="edit-job-form-group" style={{ paddingTop: "16px" }} as={Row}>
                    <Form.Label className="edit-job-form-label">
                        Job Title
                    </Form.Label>
                    <Form.Control
                        required
                        name="title"
                        placeholder="Job Title"
                        value={editJobFormData.title}
                        onChange={handleEditJobFormChange}

                    />
                </Form.Group>

                <Form.Group className="edit-job-form-group" as={Row}>
                    <Form.Label className="edit-job-form-label" column sm={2}>
                        Company
                    </Form.Label>
                    <Form.Control
                        required
                        name="company"
                        placeholder="Company"
                        value={editJobFormData.company}
                        onChange={handleEditJobFormChange}
                    />
                </Form.Group>

                <img
                    src={star ? FilledStar : Star}
                    onClick={star ? handleUnfavorite : handleFavorite}
                    style={{ cursor: 'pointer', float: 'right', margin: '38px 20px 0 0' }}
                />


                <Form.Group className="edit-job-form-group" style={{ padding: '0' }} as={Row}>
                    <Form.Label className="edit-job-form-label" as="legend" column sm={2}>
                        Status
                    </Form.Label>
                    <Form.Select
                        aria-label="Default select example"
                        name="status"
                        style={{ width: '50%' }}
                        onChange={handleEditJobFormChange}
                        required
                    >
                        <option selected disabled>Select</option>
                        <option
                            id="applied"
                            value="APPLIED"
                        >
                            Applied
                        </option>

                        <option
                            id="in-progress"
                            value="IN-PROGRESS"
                        >
                            In-Progress
                        </option>
                    </Form.Select>
                </Form.Group>


                <Form.Group className="edit-job-form-group" as={Row}>
                    <Form.Label className="edit-job-form-label" column sm={2}>
                        Notes
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        name="notes"
                        placeholder={editJobFormData.notes}
                        id="notes"
                        value={editJobFormData.notes}
                        onChange={handleEditJobFormChange}
                        style={{ height: '100px' }}
                    />
                </Form.Group>

                <img
                    src={Trash}
                    onClick={() => handleDeleteJob(id)}
                    style={{ cursor: 'pointer', float: 'right', marginTop: '26px' }}
                />

                <Form.Group className="mb-3" as={Row} style={{ paddingBottom: "16px" }}>
                    <button type="submit" className="save-job-btn">Save Job Info</button>
                </Form.Group>
            </Form>

        </>
    )
}

export default EditJobForm