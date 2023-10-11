import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { submitBook } from './bookSlice';

function BookModal({showModal, setShowModal, work, author}){

    const currentUser = useSelector((state) => state.users.currentUser)
    const handleClose = () => setShowModal(false);
    const dispatch = useDispatch()

    const [title, setTitle] = useState('') 
    const [writer, setWriter] = useState('')
    const [about, setAbout] = useState('')

    const addBook = () => {
        setTitle(work.title)
        setWriter(author)
        work && work.description && work.description.value ? setAbout(work.description.value) : setAbout('No description available')
    }

    const book = {
        user_id: currentUser.id,
        title: title, 
        author: writer, 
        about: about
    }

    console.log(book)


    return (
        <>
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{work.title} by {author}</Modal.Title>
            </Modal.Header>
            {work && work.description && work.description.value ? <Modal.Title>{work.description.value}</Modal.Title> : 'No description available.'}
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