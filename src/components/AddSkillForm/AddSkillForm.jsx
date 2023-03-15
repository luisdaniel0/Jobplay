import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AddSkillForm({ skillFormData, handleSkillFormChange, handleSkillFormSubmit }) {
    return (
        <Form onSubmit={handleSkillFormSubmit}>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                    Skill Name
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                      name="skillName"
                      placeholder="Skill Name"
                      value={skillFormData.skillName}
                      onChange={handleSkillFormChange}
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

export default AddSkillForm;