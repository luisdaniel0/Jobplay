import { useState, useEffect } from 'react';
import { index, createSkill } from '../../services/skillService';
import { Col, Card, Container, Row, ButtonGroup } from 'react-bootstrap';
import AddSkillBtn from '../../components/AddSkillBtn/AddSkillBtn';
import './SkillList.css';

const SkillList = () => {
  const [skills, setSkills] = useState([])
  const [filter, setFilter] = useState('all')

  const getTimeDifference = (date) => {
    const now = new Date();
    const createdDate = new Date(date);
    const diffInSeconds = Math.floor((now - createdDate) / 1000);
  
    const days = Math.floor(diffInSeconds / 86400);
    const hours = Math.floor(diffInSeconds / 3600) % 24;
    const minutes = Math.floor(diffInSeconds / 60) % 60;
    const seconds = diffInSeconds % 60;
  
    return { days, hours, minutes, seconds };
  };
  

  const loaded = () => {

    let filteredSkills = skills;

    if (filter === 'recent') {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      filteredSkills = filteredSkills.filter(
        (skill) => new Date(skill.createdAt) >= today
      );
    }

    let allSkills = filteredSkills.map((skill) => (
      <div key={skill._id} className="skill-card">
        <Card>
          <Card.Body>
            <Card.Title className='card-title'>{skill.skillName}</Card.Title>
            <Card.Text className="text-muted">
              Added {(() => {
                const { days, hours, minutes } = getTimeDifference(skill.createdAt);
                if (days === 1) return `${days} day ago`;
                if (days > 1) return `${days} days ago`;
                if (hours) return `${hours} hours ago`;
                return `${minutes} minutes ago`;
              })()}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    ));
  
    return <>{allSkills}</>;
  };

  const loading = () => {
    return <div>There are no skills...</div>;
  };

  const handleAddSkill = async skillData => {
    const newSkill = await createSkill(skillData);
    setSkills([newSkill, ...skills]);
  };

  useEffect(() => {
    const fetchAllSkills = async () => {
      const data = await index();
      setSkills(data);
    };
    fetchAllSkills();
  }, []);

  return (
    <div className='skill-container'>
      <Container>
        <div className="header-container w-100">
          <Row>
            <Col>
              <h1 className="skill-header">Skills</h1>
            </Col>
          </Row>
          <Row className="filter-row">
            <Col>
            <ButtonGroup>
              <button
                onClick={() => setFilter('all')}
                className={`pill-button justify-content-center ${filter === 'all' ? 'active' : ''}`}
              >
                All Skills
              </button>
              <button
                onClick={() => setFilter('recent')}
                className={`pill-button justify-content-center ${filter === 'recent' ? 'active' : ''}`}
              >
                Most Recent
              </button>
              <button
                onClick={() => setFilter('starred')}
                className={`pill-button justify-content-center ${filter === 'starred' ? 'active' : ''}`}
              >
                Starred
              </button>
            </ButtonGroup>
            </Col>
            <Col className="d-flex justify-content-end">
              <AddSkillBtn handleAddSkill={handleAddSkill} />
            </Col>
          </Row>
        </div>
        <Row>{skills ? loaded() : loading()}</Row>
      </Container>
    </div>
  );
};

export default SkillList;