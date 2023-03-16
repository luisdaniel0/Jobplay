import React from 'react'
import "./Nav.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
import award from "../imgs/award.png"
import job from "../imgs/job.png"
import network from "../imgs/networking.png"
import dash from "../imgs/dashboard.png"
import skills from "../imgs/skills.png"

function BasicExample() {
  return (
    <Navbar bg="light" className="nav-container">
      <Container>
        <Navbar.Brand as={Link} to={"/dashboard"}><img src={dash} alt="dashboard" /></Navbar.Brand>
        <Navbar.Brand as={Link} to={"/skills"}><img src={skills} alt="skills" /></Navbar.Brand>
        <Navbar.Brand as={Link} to={"/jobs"}><img src={job} alt="jobs" /></Navbar.Brand>
        <Navbar.Brand as={Link} to={"/network"}><img src={network} alt="network" /></Navbar.Brand>
        <Navbar.Brand as={Link}to={"/reward"}><img src={award} alt='award' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />      
      </Container>
      </Navbar>
  );
}

export default BasicExample;