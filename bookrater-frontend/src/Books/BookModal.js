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

    // const [title, setTitle] = useState('') 
    // const [writer, setWriter] = useState('')
    // const [about, setAbout] = useState('')
    // const [photoUrl, setPhotoUrl] = useState('')

    // const book = {
    //     user_id: currentUser.id,
    //     title: title, 
    //     author: writer, 
    //     about: about, 
    //     photo_url: photoUrl
    // }

    const photoSrc = `https://covers.openlibrary.org/b/oclc/${isbn}-M.jpg`
    // const addBook = () => {
    //     setTitle(work.title)
    //     setWriter(author)
    //     work && work.description && work.description.value ? setAbout(work.description.value) : setAbout('No description available')
    //     setPhotoUrl(photoSrc)
    //     dispatch(submitBook(book))
    // }

    const addBook = () => {
        const postedBook = {
            user_id: currentUser.id,
            title: work.title,
            author: author,
            about: work.description && work.description.value ? work.description.value : 'No description available',
            photo_url: photoSrc,
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
    }

    // console.log(book)


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
                <CloseButton onClick={handleClose}>
                </CloseButton>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default BookModal;