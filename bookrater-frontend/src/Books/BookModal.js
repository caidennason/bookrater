import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { submitBook } from './bookSlice';
import CloseButton from 'react-bootstrap/esm/CloseButton';

function BookModal({showModal, setShowModal, work, author, isbn}){

    const currentUser = useSelector((state) => state.users.currentUser)
    const handleClose = () => setShowModal(false);
    const dispatch = useDispatch()

    const photoSrc = `https://covers.openlibrary.org/b/oclc/${isbn}-M.jpg`

    const addBook = () => {
        const postedBook = {
            user_id: currentUser.id,
            title: work.title,
            author: author,
            about: work.description && work.description.value ? work.description.value : 'No description available',
            photo_url: photoSrc,
            wishlist: false
        };
        console.log(postedBook)
        dispatch(submitBook(postedBook));
    }

    const addToWishlist = () => {
        const wishlistBook = {
            user_id: currentUser.id,
            title: work.title,
            author: author, 
            about: work.description && work.description.value ? work.description.value : 'No description available',
            photo_url: photoSrc,
            wishlist: true
        }
        console.log(wishlistBook)
        dispatch(submitBook(wishlistBook))
    }

    return (
        <>
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{work.title} by {author}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={photoSrc}/>
            </Modal.Body>
            {work && work.description && work.description.value ? <Modal.Body>{work.description.value}</Modal.Body> : 'No description available.'}
            <Modal.Footer>
                <Button onClick={addBook}>
                    I've Read It!
                </Button>
                <Button onClick={addToWishlist}>
                    Add it to the wishlist!
                </Button>
                <br></br>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default BookModal;