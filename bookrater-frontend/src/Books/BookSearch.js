import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function BookSearch(){

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleTitleInput = (e) => {
        setTitle(e.target.value)
    }

    const handleAuthorInput = (e) => {
        setAuthor(e.target.value)
    }

    const findBook = () => {
        fetch(`https://openlibrary.org/search.json?title=${title}&author=${author}`)
        .then((res) => res.json())
        .then((data) => data)
    }

    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
        <Form className="w-50 p-4 rounded bg-light rounded shadow">
            <Form.Label>Search for a book</Form.Label>
            <Form.Control
            className="mb-3" 
            controlId="name"
            type="search" 
            placeholder="Book title" 
            value={title}
            onChange={handleTitleInput}/> 
            <Form.Control
            className="mb-3" 
            controlId="name"
            type="search" 
            placeholder="Book author" 
            value={author}
            onChange={handleAuthorInput}/> 
            <Button>Search</Button>
        </Form>
        </div>
    )
}

export default BookSearch