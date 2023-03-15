import React from 'react'
import Card from 'react-bootstrap/Card';

const JobCard = ({ main, sub, sub2, sub3 }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{main}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{sub}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{sub2}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{sub3}</Card.Subtitle>
            </Card.Body>
        </Card>
    );
}

export default JobCard