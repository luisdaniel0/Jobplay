import React, { useState } from 'react'
import AddJobModal from "../AddJobModal/AddJobModal";

import addButton from "../../assets/addButton.png"

import "./AddJobBtn.css"

const AddJobBtn = ({ handleAddJob }) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="add-job-btn-container">
            <img src={addButton} alt="add-btn" onClick={() => setModalShow(true)} />


            <AddJobModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                handleAddJob={handleAddJob}
            />
        </div>
    );
}

export default AddJobBtn