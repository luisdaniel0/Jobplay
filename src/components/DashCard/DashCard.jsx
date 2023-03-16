import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";

const DashCard = ({ card, profile}) => {
  const navigate = useNavigate()
  const navi = () => {
    navigate(`/${card.link}`);
  }
  
  const total = (card) => {
    if (card.title === "Job Applications") {
      return profile.jobApplied.length
    }
    if (card.title === "Skills") {
      return profile.networksAchieved.length
    }
    if (card.title === "Connections") {
      return profile.skillsUnlocked.length
    }
    if (card.title === "Event") {
      return profile.networksAchieved.length
    }
  }

  if (!Object.keys(profile).length) return <h1>Loading...</h1>;
  
  return (
    <Card className="card-cont" onClick={navi} style={{ background: card.color, borderRadius: "1rem" }}>
      <Card.Img style={{ width: "11rem"}} className="card-img" src={card.icon} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{total(card)} {card.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DashCard;