import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';

// this should load all the books from the search
// when you add one, i would like to have an animation that shows it was added to your profile
// you can clear results individually, or you can clear them all
// you can get the last result you deleted
// results are limited to 10?

function BookResults({book}){
    console.log(book)

    const [work, setWork] = useState('')
    const [bookKey, setBookKey] = useState('')
    const [bookTitle, setBookTitle] = useState('')

    useEffect(() => {
        console.log(work)
    }, [work])


    const getKey = (e) => {
        setBookKey(book.key)
        getWork(book.key)
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
        <div>
            <p>{bookKey}</p>
        <Card style={{width: '18rem'}} onClick={(getKey)}>
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.author_name[0]}</Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}

export default BookResults;