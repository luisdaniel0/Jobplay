import { useState, useEffect } from 'react'
import './SkillList.css'
import { index } from '../../services/skillService'
import { Container, Row, Col, Card } from 'react-bootstrap'

const SkillList = () => {

  const [skills, setSkills] = useState([])

  useEffect(() => {
    const fetchAllSkills = async () => {
      const data = await index()
      setSkills(data)
    }
    fetchAllSkills()
  }, [])

  return (
    <Container>
      <Row>
        {skills.map((skill) => (
          <Col key={skill.id}>
            <Card>
              <Card.Body>
                <Card.Title>{skill.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}


export default SkillList