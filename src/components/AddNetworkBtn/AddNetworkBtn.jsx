import React, { useState } from 'react'
import AddNetworkModal from '../AddNetworkModal/AddNetworkModal';
import Button from 'react-bootstrap/Button';

const AddNetworkBtn = ({ handleaddnetwork }) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                +
            </Button>

            <AddNetworkModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                handleaddnetwork={handleaddnetwork}
            />
        </>
    );
}

export default AddNetworkBtn