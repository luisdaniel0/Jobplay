import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import AddJobForm from "../AddJobForm/AddJobForm";
import { useDispatch, useSelector } from "react-redux";

import "./AddJobModal.css";
import { useNavigate } from "react-router-dom";

const AddJobModal = (props) => {
  const { loading, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [star, setStar] = useState(false);

  const [jobFormData, setFormData] = useState({
    title: "",
    company: "",
    status: "",
    starred: false,
    notes: "",
    applicant: user.profile,
  });

  const handleFavorite = async () => {
    setFormData({ ...jobFormData, starred: true });
    setStar(true);
  };

  const handleUnfavorite = async () => {
    setFormData({ ...jobFormData, starred: false });
    setStar(false);
  };

  const handleJobFormChange = (event) => {
    setFormData({ ...jobFormData, [event.target.name]: event.target.value });
  };

  const handleJobFormSubmit = (e) => {
    e.preventDefault();
    props.handleAddJob(jobFormData);
    navigate("/jobreward", { replace: true });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{
        width: "370px",
        margin: "auto",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Modal.Header closeButton />

      <Modal.Body className="add-job-modal-body">
        <AddJobForm
          star={star}
          jobFormData={jobFormData}
          handleFavorite={handleFavorite}
          handleUnfavorite={handleUnfavorite}
          handleJobFormChange={handleJobFormChange}
          handleJobFormSubmit={handleJobFormSubmit}
        />
      </Modal.Body>
    </Modal>
  );
};

export default AddJobModal;
