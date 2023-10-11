import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { submitBook } from './bookSlice';

function BookModal({showModal, setShowModal, work, author, isbn}){

    const currentUser = useSelector((state) => state.users.currentUser)
    const handleClose = () => setShowModal(false);
    const dispatch = useDispatch()

    const [title, setTitle] = useState('') 
    const [writer, setWriter] = useState('')
    const [about, setAbout] = useState('')

    const book = {
        user_id: currentUser.id,
        title: title, 
        author: writer, 
        about: about
    }

    const addBook = () => {
        setTitle(work.title)
        setWriter(author)
        work && work.description && work.description.value ? setAbout(work.description.value) : setAbout('No description available')
    }

    console.log(book)


    return (
        <>
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{work.title} by {author}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={`https://covers.openlibrary.org/b/oclc/${isbn}-M.jpg`}/>
            </Modal.Body>
            {work && work.description && work.description.value ? <Modal.Body>{work.description.value}</Modal.Body> : 'No description available.'}
            <Modal.Footer>
                <Button onClick={handleClose}>
                    Close
                </Button>
                <Button onClick={addBook}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default BookModal;