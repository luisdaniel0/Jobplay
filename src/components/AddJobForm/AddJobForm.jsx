import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Star from '../../assets/Star.png'
import FilledStar from '../../assets/FilledStar.png'


function AddJobForm({ star, jobFormData, handleFavorite, handleUnfavorite, handleJobFormChange, handleJobFormSubmit }) {
    return (
        <Form onSubmit={handleJobFormSubmit}>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                    Job Title
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        required
                        name="title"
                        placeholder="Job Title"
                        value={jobFormData.title}
                        onChange={handleJobFormChange}

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
                        value={jobFormData.company}
                        onChange={handleJobFormChange}
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
                        onChange={handleJobFormChange}
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
                placeholder="Notes"
                id="notes"
                value={jobFormData.notes}
                onChange={handleJobFormChange}
                style={{ height: '100px' }}
            />

            <img
                src={star ? FilledStar : Star}
                onClick={star ? handleUnfavorite : handleFavorite}
                style={{ cursor: 'pointer', float: 'right' }}
            />

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit" className="save-job-btn">Save Job Info</Button>
                </Col>
            </Form.Group>
        </Form>
    );
}

export default AddJobForm;