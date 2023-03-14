import React from 'react'
import "./Nav.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Switch, Route, Link }from "react-router-dom"

function BasicExample() {
  return (
    <Router>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Avatar here</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/jobs"}>Jobs</Nav.Link>
              <Nav.Link as={Link} to={"/network"}>Network</Nav.Link>
              <Nav.Link as={Link} to={"/skills"}>Skills</Nav.Link>
            <NavDropdown title="Gain Rewards" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Jobs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Network
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Skills</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </Router>
  );
}

export default BasicExample;