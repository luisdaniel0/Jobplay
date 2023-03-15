import React from 'react'
import Card from 'react-bootstrap/Card';
import Star from '../../assets/Star.png'
import FilledStar from '../../assets/FilledStar.png'
import AppliedIconCheck from '../../assets/AppliedIconCheck.png'

import { getTimeDifference } from '../../hooks/getTimeDifference';


const JobCard = ({ title, company, status, starred, createdDate, id, handleDeleteJob }) => {
    const showStar = (starred) => {
        if (starred) {
            return (
                <img src={FilledStar} alt="filledstar" style={{ float: 'right' }} />
            )
        } else {
            return (
                <img src={Star} alt="star" style={{ float: 'right' }} />
            )
        }
    }

    const showStatus = (status) => {
        if (status === "APPLIED") {
            return (
                <img src={AppliedIconCheck} alt="applied-icon-check" />
            )
        } else {
            return (
                <img src={Star} alt="star" />
            )
        }
    }

    const showTimeAgo = () => {
        const timeAgo = getTimeDifference(createdDate)

        if (timeAgo.days) {
            return (
                <Card.Subtitle className="mb-2 text-muted">
                    {timeAgo.days} days ago
                </Card.Subtitle>
            )
        }
        else if (timeAgo.hours) {
            return (
                <Card.Subtitle className="mb-2 text-muted">
                    {timeAgo.hours} hours ago
                </Card.Subtitle>
            )
        }
        else if (timeAgo.minutes) {
            return (
                <Card.Subtitle className="mb-2 text-muted">
                    {timeAgo.minutes} minutes ago
                </Card.Subtitle>
            )
        }
        else {
            return (
                <Card.Subtitle className="mb-2 text-muted">
                    {timeAgo.seconds} minutes ago
                </Card.Subtitle>
            )
        }
    }

    showTimeAgo()
    return (
        <Card style={{ width: '22rem' }}>
            <Card.Body>
                <Card.Title>
                    {title}

                    <span style={{ float: 'right' }} onClick={() => handleDeleteJob(id)}>X</span>
                </Card.Title>

                <Card.Subtitle className="mb-2 text-muted">{company}</Card.Subtitle>

                <Card.Subtitle className="mb-2 text-muted">
                    {showStatus(status)}
                    {showStar(starred)}
                </Card.Subtitle>

                <br />

                {showTimeAgo()}
            </Card.Body>
        </Card>
    );
}

export default JobCard