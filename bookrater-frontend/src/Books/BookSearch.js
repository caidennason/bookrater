import React, { useState } from 'react';
import BookResults from './BookResults';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function BookSearch(){

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [books, setBooks] = useState(null)

    const handleTitleInput = (e) => {
        setTitle(e.target.value)
    }

    const handleAuthorInput = (e) => {
        setAuthor(e.target.value)
    }

    const findBook = () => {
        let url = `https://openlibrary.org/search.json?title=${title}`;
  
        if (author) {
          url += `&author=${author}`;
        }
        fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Something went wrong, try again')
            }
            return res.json()
        })
        .then((data) => {
            console.log(data.docs);
            setBooks(data.docs.slice(0, 5));
        })
        .catch((error) => {
            return { error: error.message }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, author)
        findBook()
        console.log(books)
        setTitle('')
        setAuthor('')
    }

    return(

        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
        <Form onSubmit={handleSubmit} className="w-100 p-4 rounded bg-light rounded shadow">
            <Form.Label>Search for a book</Form.Label>
            <Form.Control
            className="mb-3" 
            placeholder="Book title" 
            value={title}
            onChange={handleTitleInput}/> 
            <Form.Control
            className="mb-3" 
            placeholder="Book author" 
            value={author}
            onChange={handleAuthorInput}/> 
            <Button type="submit">Search</Button>
        </Form>
        <div className="mt-4">
        {books && books.length > 0 ? (
            books.map((book) => {
                return <BookResults book={book}/>;
            })
        ) : (
            ''
        )}
        </div>
        </div>
        </div>
    )
}

export default BookSearch