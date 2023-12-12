import React from 'react';
import Card from 'react-bootstrap/Card'

function UsersBooks({b}){

    console.log(b)

    return(
        <>
            <Card style={{width: '20rem'}}>
                <Card.Body>
                    <Card.Title>{b.title}</Card.Title>
                        <Card.Text>{b.author}</Card.Text>
                        <Card.Text>{b.about}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default UsersBooks;