import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function BookModal({showModal, setShowModal, work, author}){

    const handleClose = () => setShowModal(false);

    return (
        <>
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{work.title} by {author}</Modal.Title>
            </Modal.Header>
            {work && work.description && work.description.value ? <Modal.Title>{work.description.value}</Modal.Title> : 'No description available.'}
            <Modal.Footer>
                <Button variant="seconday" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default BookModal;