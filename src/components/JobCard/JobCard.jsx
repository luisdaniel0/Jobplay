import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Star from '../../assets/Star.png'
import FilledStar from '../../assets/FilledStar.png'
import AppliedIconCheck from '../../assets/AppliedIconCheck.png'
import InProgressEllipses from '../../assets/InProgressEllipses.png'

import { getTimeDifference } from '../../hooks/getTimeDifference';
import JobCardModal from '../JobCardModal/JobCardModal';


const JobCard = ({ title, company, status, starred, notes, createdDate, id, handleEditJob, handleDeleteJob }) => {
    const [modalShow, setModalShow] = useState(false);

    const showStar = (starred) => {
        if (starred) {
            return (
                <img src={FilledStar} alt="filledstar" style={{ cursor: 'pointer', float: 'right' }} />
            )
        } else {
            return (
                <img src={Star} alt="star" style={{ cursor: 'pointer', float: 'right' }} />
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
                <img src={InProgressEllipses} alt="in-progress-ellipses" />
            )
        }
    }

    const showTimeAgo = () => {
        const timeAgo = getTimeDifference(createdDate)

        if (timeAgo.days) {
            return (
                <Card.Subtitle className="text-muted" style={{ margin: 0 }}>
                    {timeAgo.days} days ago
                </Card.Subtitle>
            )
        }
        else if (timeAgo.hours) {
            return (
                <Card.Subtitle className="text-muted">
                    {timeAgo.hours} hours ago
                </Card.Subtitle>
            )
        }
        else if (timeAgo.minutes) {
            return (
                <Card.Subtitle className="text-muted">
                    {timeAgo.minutes} minutes ago
                </Card.Subtitle>
            )
        }
        else {
            return (
                <Card.Subtitle className="text-muted">
                    {timeAgo.seconds} minutes ago
                </Card.Subtitle>
            )
        }
    }

    return (
        <>
            <Card
                style={{ width: '22rem' }}
                onClick={() => setModalShow(true)}
            >
                <Card.Body>
                    <Card.Title>
                        {title}

                        <span style={{ float: 'right' }} onClick={() => handleDeleteJob(id)}>X</span>
                    </Card.Title>

                    <Card.Subtitle className="mb-2 text-muted">{company}</Card.Subtitle>

                    <Card.Subtitle className="mb-2 text-muted">
                        {showStatus(status)}
                    </Card.Subtitle>

                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {showTimeAgo()}
                        {showStar(starred)}
                    </div>
                </Card.Body>
            </Card>

            <JobCardModal
                title={title}
                company={company}
                status={status}
                starred={starred}
                notes={notes}
                id={id}
                timeAgo={getTimeDifference(createdDate)}
                showStar={showStar}
                handleEditJob={handleEditJob}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default JobCard