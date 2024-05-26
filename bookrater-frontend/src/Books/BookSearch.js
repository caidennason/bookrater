import React, { useState } from 'react';
import BookResults from './BookResults';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SearchErrorModal from './SearchErrorModal';
import Spinner from 'react-bootstrap/esm/Spinner';

function BookSearch(){

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [books, setBooks] = useState(null)
    const [loading, setLoading] = useState(false)
    const [showErrorModal, setErrorModal] = useState(false)

    const handleErrorModal = () => {
        setErrorModal(!showErrorModal)
        setLoading(false)
    }

    const handleTitleInput = (e) => {
        setTitle(e.target.value)
    }

    const handleAuthorInput = (e) => {
        setAuthor(e.target.value)
    }

    const findBook = () => {
        setLoading(true)
        console.log(loading)
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
            // Setting books first 20 books for pagination
            // setBooks(data.docs.slice(0, 5));
            setBooks(data.docs.slice(0, 20));
            if (data.docs.length === 0) {
                handleErrorModal();
            }
            setLoading(false)
        })
        .catch((error) => {
            handleErrorModal()
            return { error: error.message }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        findBook()
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
                return <BookResults book={book} loading={loading}/>;
            })
        ) : (
            <>
            <SearchErrorModal handleErrorModal={handleErrorModal} showErrorModal={showErrorModal}/>
            </>
        )}
        {loading ? (
            <>
            <Spinner/>
            </>
        ) : (
            null
        )}
        </div>
        </div>
        </div>
    )
}

export default BookSearch