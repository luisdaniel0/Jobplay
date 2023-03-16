import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { create } from "../../services/networkService";
import { useNavigate } from "react-router-dom";
import './AddNetworkForm.css'


function AddNetworkForm() {
  const { user } = useSelector((state) => state.auth);
  const eventNameRef = useRef();
  const nameRef = useRef();
  const titleRef = useRef();
  const companyRef = useRef();
  const navigate = useNavigate();

  const handleaddnetwork = async (networkData) => {
    const newNetwork = await create(networkData);
  };

  const handleNetworkFormSubmit = (e) => {
    e.preventDefault();
    const networkFormData = {
      networker: user.profile,
      eventName: eventNameRef.current.value,
      connection: {
        name: nameRef.current.value,
        title: titleRef.current.value,
        company: companyRef.current.value,
      },
    };
    handleaddnetwork(networkFormData);
    navigate("/netreward", { replace: true });
  };

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
            ref={nameRef}
          />
        </Col>
        <Form.Label column sm={2}>
          Company
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            name="company"
            placeholder="Enter your connection's company"
            ref={companyRef}
          />
        </Col>
        <Form.Label column sm={2}>
          Position
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            name="title"
            placeholder="Enter your connection's position"
            ref={titleRef}
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
            ref={eventNameRef}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit" className='network-form-btn'>Submit</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default AddNetworkForm;
