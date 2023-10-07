import React from 'react';

// this should load all the books from the search
// when you add one, i would like to have an animation that shows it was added to your profile
// you can clear results individually, or you can clear them all
// you can get the last result you deleted
// results are limited to 10?

function BookResults({book}){
    console.log(book)

    return(

        <div >
       {book.title}
        </div>
    )
}

export default BookResults;