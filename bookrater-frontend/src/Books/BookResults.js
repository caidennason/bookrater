import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import BookModal from './BookModal';

// this should load all the books from the search
// when you add one, i would like to have an animation that shows it was added to your profile
// you can clear results individually, or you can clear them all
// you can get the last result you deleted
// results are limited to 10?

function BookResults({book}){
    console.log(book)

    const [work, setWork] = useState('')
    const [bookKey, setBookKey] = useState('')
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        console.log(work)
    }, [work])


    const getKey = (e) => {
        setBookKey(book.key)
        getWork(book.key)
        setShowModal(true)
    }

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

    return(
        <>
        <div>
        <Card style={{width: '18rem'}} onClick={(getKey)}>
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.author_name[0]}</Card.Text>
            </Card.Body>
        </Card>
        </div>
        <BookModal author={book.author_name[0]} work={work} showModal={showModal} setShowModal={setShowModal}/>
        </>
    )
}

export default BookResults;