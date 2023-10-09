import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';

// this should load all the books from the search
// when you add one, i would like to have an animation that shows it was added to your profile
// you can clear results individually, or you can clear them all
// you can get the last result you deleted
// results are limited to 10?

function BookResults({book}){
    console.log(book)

    const [work, setWork] = ('')
    const [bookKey, setBookKey] = ('')

    const getWork = () => {
        let url = `https://openlibrary.org/works${bookKey}`
        fetch(url)
        .then((res) => res.json())
        .then((b) => setWork(b))
    }

    const getKey = (e) => {
        console.log('specific book click', book)
    }

    return(

        <Card style={{width: '18rem'}} onClick={(getKey)}>
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.author_name[0]}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BookResults;