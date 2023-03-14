import { useState, useEffect } from 'react'
import './SkillList.css'
import { index, create, update  } from '../../services/skillService'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SkillList = () => {
  const navigate = useNavigate()
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const fetchAllSkills = async () => {
      const data = await index()
      setSkills([newSkill, ...skills])
      navigate
    }
    fetchAllSkills()
  }, [])

  const handleAddSkill = async (skillData) => {
    const newSkill = await create(skillData)
    setSkills([newSkill, ...skills])
    navigate('/skills')
  }

  const handleUpdateSkill = async (skillData) => {
    const updatedSkill = await update(skillData)
    setSkills(skills.map((skill) => skillData._id === skill._id ? updatedSkill : skill))
    navigate('/skills')
  }

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