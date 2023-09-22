import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function BookSearch(){

    const [formInput, setFormInput] = useState("")

    const handleFormInput = (e) => {
        setFormInput(e.target.value)
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
            value={formInput}
            onChange={handleFormInput}/> 
            <Button>Search</Button>
        </Form>
        </div>
    )
}

export default BookSearch