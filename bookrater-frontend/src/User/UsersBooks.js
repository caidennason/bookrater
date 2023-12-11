import React from 'react';
import Card from 'react-bootstrap/Card'

function UsersBooks({b}){

    console.log(b)

    return(
        <>
            <Card>
                <Card.Title>{b.title}</Card.Title>
                <Card.Text>{b.author}</Card.Text>
            </Card>
        </>
    )
}

export default UsersBooks;