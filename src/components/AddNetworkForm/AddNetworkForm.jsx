import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AddNetworkForm({ networkFormData, handleNetworkFormChange, handleNetworkFormSubmit }) {
    return (
        <Form onSubmit={handleNetworkFormSubmit}>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                    Name
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                      name="title"
                      placeholder="Enter your connection's name"
                      value={networkFormData?.connection?.name}
                      onChange={handleNetworkFormChange}
                    />
                </Col>
                <Form.Label column sm={2}>
                    Company
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                      name="company"
                      placeholder="Enter your connection's company"
                      value={networkFormData?.connection?.company}
                      onChange={handleNetworkFormChange}
                    />
                </Col>
                <Form.Label column sm={2}>
                    Position
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                      name="title"
                      placeholder="Enter your connection's position"
                      value={networkFormData?.connection?.title}
                      onChange={handleNetworkFormChange}
                    />
                </Col>
            </Form.Group>
            <br></br>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                    Event
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                      name="eventName"
                      placeholder="Enter event attended (if applicable)"
                      value={networkFormData.eventName}
                      onChange={handleNetworkFormChange}
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

export default AddNetworkForm;