import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Star from '../../assets/Star.png'
import FilledStar from '../../assets/FilledStar.png'

import "./AddJobForm.css"


function AddJobForm({ star, jobFormData, handleFavorite, handleUnfavorite, handleJobFormChange, handleJobFormSubmit }) {
    return (
        <Form className="add-job-form" onSubmit={handleJobFormSubmit}>
            <Form.Group as={Row}>
                <Form.Label className="add-job-form-label" column sm={2}>
                    Job Title
                </Form.Label>
                    <Form.Control
                        required
                        name="title"
                        value={jobFormData.title}
                        onChange={handleJobFormChange}

                    />
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label className="add-job-form-label" column sm={2}>
                    Company
                </Form.Label>
                    <Form.Control
                        required
                        name="company"
                        value={jobFormData.company}
                        onChange={handleJobFormChange}
                    />
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label className="add-job-form-label" as="legend" column sm={2}>
                    Status
                </Form.Label>
                    <Form.Select
                        aria-label="Default select example"
                        name="status"
                        style={{ width: '50%' }}
                        onChange={handleJobFormChange}
                        required
                    >
                        <option selected disabled></option>
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

            <Form.Group as={Row}>
                <Form.Label className="add-job-form-label" column sm={2}>
                    Notes
                </Form.Label>
                    <Form.Control
                        as="textarea"
                        name="notes"
                        id="notes"
                        value={jobFormData.notes}
                        onChange={handleJobFormChange}
                        style={{ height: '100px' }}
                    />
            </Form.Group>

            <img
                src={star ? FilledStar : Star}
                onClick={star ? handleUnfavorite : handleFavorite}
                style={{ cursor: 'pointer', float: 'right', marginTop: '26px' }}
            />

            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                    <button type="submit" className="save-job-btn">Save Job Info</button>
                </Col>
            </Form.Group>
        </Form >
    );
}

export default AddJobForm;