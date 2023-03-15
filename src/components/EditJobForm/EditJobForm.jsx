import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const EditJobForm = ({ editJobFormData, handleEditJobFormChange, handleEditJobFormSubmit }) => {
    return (
        <Form onSubmit={handleEditJobFormSubmit}>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                    Job Title
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        required
                        name="title"
                        placeholder="Job Title"
                        value={editJobFormData.title}
                        onChange={handleEditJobFormChange}

                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                    Company
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        required
                        name="company"
                        placeholder="Company"
                        value={editJobFormData.company}
                        onChange={handleEditJobFormChange}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={2}>
                    Status
                </Form.Label>
                <Col sm={10}>
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
                </Col>
            </Form.Group>

            <Form.Control className="mb-3"
                as="textarea"
                name="notes"
                placeholder={editJobFormData.notes}
                id="notes"
                value={editJobFormData.notes}
                onChange={handleEditJobFormChange}
                style={{ height: '100px' }}
            />

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit" className="save-job-btn">Save Job Info</Button>
                </Col>
            </Form.Group>
        </Form>
    )
}

export default EditJobForm