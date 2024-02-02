import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../Books/bookSlice';
import { FaStar } from 'react-icons/fa';



function UsersBooks({b}){

    const [expand, setExpand] = useState(true)
    const [rating, setRating] = useState(null)
    console.log(rating)

    const toggleExpand = () => {
        setExpand(!expand)
    }

    const dispatch = useDispatch()

    const handleBookDelete = () => {
        console.log('checking', b)
        dispatch(deleteBook(b))
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
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    {[...Array(5)].map((star, i) => {

                        const ratingValue = i + 1 

                        return (
                            <label style={{cursor: 'pointer'}}>
                                <input 
                                type='radio' 
                                name='rating' 
                                value={ratingValue} 
                                style={{display: 'none'}} 
                                onClick={() => setRating(ratingValue)}
                                />
                                <FaStar size={25}/>
                            </label>
                        )
                    })}
                    </div>
                    <br></br>
            </Card>
    )
}

export default UsersBooks;