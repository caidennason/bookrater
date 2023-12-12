import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function SearchErrorModal({handleErrorModal, showErrorModal}){

    console.log(showErrorModal)

    return(
        <>
        <Modal show={showErrorModal} onHide={handleErrorModal}>
            <Modal.Header>
                <Modal.Title>Hmm...we can't find that book. Try again!</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={handleErrorModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default SearchErrorModal;