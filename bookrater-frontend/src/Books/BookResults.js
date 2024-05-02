import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import BookModal from './BookModal';
import Spinner from 'react-bootstrap/Spinner';

function BookResults({book, loading}){
    console.log(book)

    const [work, setWork] = useState('')
    const [bookKey, setBookKey] = useState('')
    const [showModal, setShowModal] = useState(false)

    console.log(loading)

    const getKey = (e) => {
        setBookKey(book.key)
        getWork(book.key)
        setShowModal(true)
    }

    console.log(loading)

    const getWork = async (bookKey) => {
        if (bookKey) {
        let url = `https://openlibrary.org${bookKey}.json`
        fetch(url)
        .then((res) => res.json())
        .then((b) => setWork(b))
        } else {
            console.log('hold up wait a minute')
        }
    }

    console.log(loading)

    return(
        <>
        {!loading ? (<div>
        <Card style={{width: '18rem'}} onClick={(getKey)}>
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                {book.author_name && book.author_name[0] && (
                    <Card.Text>{book.author_name[0]}</Card.Text>
                )}
            </Card.Body>
        </Card>
        </div>) : Spinner}
        <BookModal 
        isbn={book.oclc}
        author={book.author_name && book.author_name[0]} 
        work={work}
        showModal={showModal} 
        setShowModal={setShowModal}/>
        </>
    )
}

export default BookResults;