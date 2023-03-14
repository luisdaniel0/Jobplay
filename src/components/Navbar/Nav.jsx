import React from 'react'
import "./Nav.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom"

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link}to={"/"}>Avatar here</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link as={Link} to={"/dashboard"}>Dashboard</Nav.Link>
            <NavDropdown title="Gain Rewards" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link}to={'/jobs'}>Jobs</NavDropdown.Item>
              <NavDropdown.Item as={Link}to={'/network'}>
                Network
              </NavDropdown.Item>
              <NavDropdown.Item as={Link}to={'/skills'}>Skills</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link}to={'/signup'}>
                Sign Up
              </NavDropdown.Item>
              <NavDropdown.Item as={Link}to={'/login'}>
                Login
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
  );
}

export default BasicExample;