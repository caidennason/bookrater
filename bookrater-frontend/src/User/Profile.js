import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from './userSlice';
import UsersBooks from './UsersBooks';
import UsersWishlist from './UsersWishlist';
import { getReadBooks } from '../Books/bookSlice';


function Profile(){

    const [wishlistBooks, setWishlistBooks] = useState([])
 
    const currentUser = useSelector((state) => state.users.currentUser);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getReadBooks())
    }, [dispatch])

    const books = useSelector((state) => state.books.entities)
    console.log(books)
    useEffect(() => {
        dispatch(getCurrentUser())
      }, [dispatch])

    useEffect(() => {
            fetch('/wishlistbooks')
            .then(res => res.json())
            .then(wishlistBooks => (setWishlistBooks(wishlistBooks)))
    }, [])

    // useEffect(() => {
    //     fetch('/books')
    //     .then(res => res.json())
    //     .then(readBooks => (setReadBooks(readBooks)))
    // }, [])

    console.log(wishlistBooks)

    return(
        <>
           <p>{currentUser ? currentUser.name : ' '}</p>
            <p>{currentUser ? currentUser.about_me : ' '}</p>
            <p>{currentUser ? currentUser.location : ' '}</p>
            <h1>Books I've Read</h1>
            {currentUser ? books.map((b) => {
                return <UsersBooks b={b}/>
            }) : ' '}
            <h1>Wishlist</h1>
            {currentUser ? wishlistBooks.map((b) => {
                return <UsersWishlist b={b}/>
            }) : ' '}
        </>
    )
}

export default Profile;