import React, {useState, useEffect, useSelector} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton';
import { useDispatch } from 'react-redux';
import { deleteBook, rateBook, getReadBooks } from '../Books/bookSlice';
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

    return(
            <Card style={{width: '20rem'}}>
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
                            {expand ? b.about.slice(0, 100) + '...' : b.about}
                        </Card.Body>
                </Card.Body>
                    <Button onClick={toggleExpand}>
                        {expand ? 'See more' : 'See less'}
                    </Button>
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
                                color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                                />
                            </label>
                        )
                    })}
                    </div> : ' '}
                    <br></br>
            </Card>
    )
}

export default UsersBooks;