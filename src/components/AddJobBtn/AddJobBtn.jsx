import React, { useState } from 'react'
import AddJobModal from "../AddJobModal/AddJobModal";

import Button from 'react-bootstrap/Button';

const AddJobBtn = ({ handleAddJob }) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                +
            </Button>

            <AddJobModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                handleAddJob={handleAddJob}
            />
        </>
    );
}

export default AddJobBtn