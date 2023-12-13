import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'

function UsersBooks({b}){

    const [expand, setExpand] = useState(true)

    const toggleExpand = () => {
        setExpand(!expand)
    }

    return(
            <Card style={{width: '20rem'}}>
                <Card.Body>
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