import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AddJobForm({ jobFormData, handleJobFormChange, handleJobFormSubmit }) {
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
                    <Form.Check
                        required
                        type="radio"
                        label="Applied"
                        name="status"
                        id="applied"
                        value="APPLIED"
                        onChange={handleJobFormChange}
                    />
                    <Form.Check
                        required
                        type="radio"
                        label="Not Applied"
                        name="status"
                        id="not-applied"
                        value="NOT-APPLIED"
                        onChange={handleJobFormChange}
                    />
                    <Form.Check
                        required
                        type="radio"
                        label="In-Progress"
                        name="status"
                        id="in-progress"
                        value="IN-PROGRESS"
                        onChange={handleJobFormChange}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Submit</Button>
                </Col>
            </Form.Group>
        </Form>
    );
}

export default AddJobForm;