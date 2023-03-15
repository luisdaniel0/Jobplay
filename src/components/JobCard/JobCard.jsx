import React from 'react'
import Card from 'react-bootstrap/Card';

const JobCard = ({ title, company, status, starred, sub, id, handleDeleteJob }) => {
    return (
        <Card style={{ width: '22rem' }}>
            <Card.Body>
                <Card.Title>
                    {title}

                    <span>STAR: {String(starred)}</span>

                    <span onClick={() => handleDeleteJob(id)}>X</span>
                </Card.Title>
                
                <Card.Subtitle className="mb-2 text-muted">{company}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{status}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{sub}</Card.Subtitle>
            </Card.Body>
        </Card>
    );
}

export default JobCard