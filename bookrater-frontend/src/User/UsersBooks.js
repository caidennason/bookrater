import React from 'react';

function UsersBooks({b}){

    console.log(b)

    return(
        <>
            <p>{b.title} by {b.author}</p>
        </>
    )
}

export default UsersBooks;