import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Star from '../../assets/Star.png'
import FilledStar from '../../assets/FilledStar.png'
import AppliedIconCheck from '../../assets/AppliedIconCheck.png'
import InProgressEllipses from '../../assets/InProgressEllipses.png'

import { getTimeDifference } from '../../hooks/getTimeDifference';
import JobCardModal from '../JobCardModal/JobCardModal';

import "./JobCard.css"

const JobCard = ({ title, company, status, starred, notes, createdDate, id, handleEditJob, handleDeleteJob }) => {
    const [modalShow, setModalShow] = useState(false);

    const showStar = (starred) => {
        if (starred) {
            return (
                <img
                    src={FilledStar}
                    alt="filledstar"
                    style={{ cursor: 'pointer', float: 'right' }}
                    className="job-card-subtitle-star"
                />
            )
        } else {
            return (
                <img
                    src={Star}
                    alt="star"
                    style={{ cursor: 'pointer', float: 'right' }}
                    className="job-card-subtitle-star"
                />
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
                <Card.Subtitle className="job-card-subtitle-timeAgo" style={{ margin: 0 }}>
                    {timeAgo.days} days ago
                </Card.Subtitle>
            )
        }
        else if (timeAgo.hours) {
            return (
                <Card.Subtitle className="job-card-subtitle-timeAgo">
                    {timeAgo.hours} hours ago
                </Card.Subtitle>
            )
        }
        else if (timeAgo.minutes) {
            return (
                <Card.Subtitle className="job-card-subtitle text-muted">
                    {timeAgo.minutes} minutes ago
                </Card.Subtitle>
            )
        }
        else {
            return (
                <Card.Subtitle className="job-card-subtitle text-muted">
                    {timeAgo.seconds} minutes ago
                </Card.Subtitle>
            )
        }
    }

    return (
        <>
            <div
                style={{ width: '22rem' }}
                onClick={() => setModalShow(true)}
                className="job-card"
            >
                <div className="job-card-body">
                    <div className="job-card-title">
                        {title}
                    </div>

                    <div className="job-card-subtitle">{company}</div>

                    <div className="job-card-subtitle">
                        {showStatus(status)}
                    </div>

                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {showTimeAgo()}
                        {showStar(starred)}
                    </div>
                </div>
            </div>

            <JobCardModal
                title={title}
                company={company}
                status={status}
                starred={starred}
                notes={notes}
                id={id}
                timeAgo={getTimeDifference(createdDate)}
                showStar={showStar}
                handleDeleteJob={handleDeleteJob}
                handleEditJob={handleEditJob}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default JobCard