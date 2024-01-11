import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../Books/bookSlice';

function UsersBooks({b}){

    const [expand, setExpand] = useState(true)

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
            </Card>

    )
}

export default UsersBooks;