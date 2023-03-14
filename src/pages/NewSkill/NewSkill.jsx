import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NewSkill() {
  const [skillName, setSkillName] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSkillName('')
    navigate('/skills')
  }

  return (
    <Container className="mt-4">
      <h2>Add New Skill</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="skillName">
          <Form.Label>Skill Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter skill name"
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Skill
        </Button>
      </Form>
    </Container>
  );
}

export default NewSkill;
