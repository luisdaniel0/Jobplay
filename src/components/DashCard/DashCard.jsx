import React from "react";
import Card from "react-bootstrap/Card";
import jobIcon from "../../assets/Job.png";

const DashCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={jobIcon} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <div>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DashCard;
