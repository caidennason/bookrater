import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function UsersBooks({b}){

    return(

        <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
            <Card style={{width: '20rem'}}>
                <Card.Body>
                    <Card.Title>{b.title}</Card.Title>
                        <Card.Subtitle>{b.author}</Card.Subtitle>
                        <Card.Body>{b.about}</Card.Body>
                </Card.Body>
            </Card>
            </Col>
      ))}
        </Row>
    )
}

export default UsersBooks;