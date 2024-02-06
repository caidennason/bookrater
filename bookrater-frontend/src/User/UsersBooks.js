import React, {useState, useEffect, useSelector} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton';
import { useDispatch } from 'react-redux';
import { deleteBook, rateBook, readBookChange } from '../Books/bookSlice';
import { FaStar } from 'react-icons/fa';

function UsersBooks({b}){

    const [expand, setExpand] = useState(true)
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    const toggleExpand = () => {
        setExpand(!expand)
    }

    const dispatch = useDispatch()

    const handleBookDelete = () => {
        dispatch(deleteBook(b))
    }

    const handleBookRating = (r) => {
        setRating(r)
        console.log(r)
        const updatedBookWithRating = {
            id : b.id, 
            title : b.title, 
            author : b.author, 
            rating : r, 
            about : b.about,
            user_id : b.user_id, 
            photo_url : b.photo_url, 
            wishlist : b.wishlist
        }
        console.log(updatedBookWithRating)
        dispatch(rateBook(updatedBookWithRating))
    }

    const handleReadChange = () => {
        const updatedReadBook = {
            id: b.id, 
            title: b.title, 
            author: b.author, 
            rating: b.rating, 
            about: b.about, 
            user_id: b.user_id, 
            photo_url: b.photo_url, 
            wishlist: false
        }
        console.log(updatedReadBook)
        dispatch(readBookChange(updatedReadBook))
    }

    return(
            <Card style={{width: '20rem'}} className="bg-light rounded shadow px-2">
                <CloseButton 
                style={{ marginLeft: 'auto'}} 
                onClick={(e) => {
                    handleBookDelete()
                }}
                />
                <Card.Body >
                    <Card.Title>{b.title}</Card.Title>
                        <Card.Subtitle>{b.author}</Card.Subtitle>
                        <Card.Body>
                            {expand && b.about !== 'No description available' ? b.about.slice(0, 25) + '...' : b.about}
                        </Card.Body>
                </Card.Body>
                    {b.about !== 'No description available' ? <Button variant="outline-primary" onClick={toggleExpand}>{expand ? 'See more' : 'See less'}</Button> : null}
                    <br></br>
                    {b.wishlist == false ? <div style={{display: 'flex', justifyContent: 'center'}}>
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1 
                        return (
                            <label style={{cursor: 'pointer'}}>
                                <input 
                                type='radio' 
                                name='rating' 
                                value={ratingValue} 
                                style={{display: 'none'}} 
                                onClick={() => handleBookRating(ratingValue)}
                                />
                                <FaStar 
                                size={25}
                                color={ratingValue <= (hover || b.rating) ? '#ffc107' : '#e4e5e9'}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                                />
                            </label>
                        )
                    })}
                    </div>  : null }
                    <br></br>
                    {b.wishlist ? <Button class="btn btn-success mt-3" variant="success" size="sm" onClick={handleReadChange}>Read it!</Button> : null}
            </Card>
    )
}

export default UsersBooks;