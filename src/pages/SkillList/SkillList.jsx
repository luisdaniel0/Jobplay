import { useState, useEffect } from 'react'
import { index, createSkill, update  } from '../../services/skillService'
import { Col, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './SkillList.css'
import AddSkillBtn from '../../components/AddSkillBtn/AddSkillBtn'

const SkillList = () => {
  const navigate = useNavigate()
  const [skills, setSkills] = useState([])

  const loaded = () => {
    let allSkills = skills.map(skill => {
      return (
        <div key={skill._id}>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>{skill.skillName}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
        </div>
      )
    })

    return (
      <>
        {allSkills}
      </>
    )
  }

  const loading = () => {
    return (
      <div>
        There are no skills...
      </div>
    )
  }

  
  const handleAddSkill = async (skillData) => {
    const newSkill  = await createSkill(skillData)
    setSkills([newSkill, ...skills])
  }
  
  const handleUpdateSkill = async (skillData) => {
    const updatedSkill = await update(skillData)
    setSkills(skills.map((skill) => skillData._id === skill._id ? updatedSkill : skill))
    navigate('/skills')
  }

  useEffect(() => {
    const fetchAllSkills = async () => {
      const data = await index()
      setSkills(data)
    }
    fetchAllSkills()
  }, [])

  return (
    <div>
      <AddSkillBtn handleAddSkill={handleAddSkill}/>
      {skills ? loaded() : loading()}
    </div>
  )
}


export default SkillList