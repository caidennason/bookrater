import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function BookSearch(){

    const [formInput, setFormInput] = useState("")

    const handleFormInput = (e) => {
        setFormInput(e.target.value)
    }

    return(
        <>
        <Form>
            <Form.Label>Search for a book</Form.Label>
            <Form.Control
            type="search" 
            placeholder="Book title" 
            value={formInput}
            onChange={handleFormInput}/> 
        </Form>
        </>
    )
}

export default BookSearch