import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import AddSkillForm from '../AddSkillForm/AddSkillForm'
import { useDispatch, useSelector } from 'react-redux'


const AddSkillModal = (props) => {
  const { loading, user } = useSelector((state) => state.auth)

  const [skillFormData, setSkillFormData] = useState({
    skillName: "",
    skillOwner: user.profile,
  })

  const handleSkillFormChange = (event) => {
    setSkillFormData({ ...skillFormData, [event.target.name]: event.target.value })
  }

  const handleSkillFormSubmit = (event) => {
    props.handleAddSkill(skillFormData)
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Skill
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <AddSkillForm
          skillFormData={skillFormData}
          handleSkillFormChange={handleSkillFormChange}
          handleSkillFormSubmit={handleSkillFormSubmit}
        />
      </Modal.Body>

    </Modal>
  );
}

export default AddSkillModal