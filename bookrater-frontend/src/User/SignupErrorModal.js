import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SignupErrorModal({error, showModal, setShowModal}){

    const handleClose = () => setShowModal(false)

    return(
        <Modal show={showModal}>
            <Modal.Dialog>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>Error!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{error}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="seconday" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}

export default SignupErrorModal;