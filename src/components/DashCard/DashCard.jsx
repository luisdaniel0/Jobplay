import React from "react";
import Card from "react-bootstrap/Card";
import jobIcon from "../../assets/Job.png";
import { useNavigate } from "react-router";

const DashCard = ({ card }) => {
  const navigate = useNavigate()
  const navi = () => {
    navigate(`/${card.link}`);
  }
  return (
    <Card className="card-cont" onClick={navi}>
      <Card.Img style={{ width: "11rem"}} className="card-img" src={card.icon} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
          <Card.Text>50 {card.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DashCard;
