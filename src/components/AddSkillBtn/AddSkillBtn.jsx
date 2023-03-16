import React, { useState } from 'react'
import AddSkillModal from "../AddSkillModal/AddSkillModal";
import './AddSkillBtn.css'

import Button from 'react-bootstrap/Button';

const AddSkillBtn = ({ handleAddSkill }) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button className='add-skill-btn' variant="primary" onClick={() => setModalShow(true)}>
                +
            </Button>

            <AddSkillModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                handleAddSkill={handleAddSkill}
            />
        </>
    );
}

export default AddSkillBtn