import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from './userSlice';
import UsersBooks from './UsersBooks';
import UsersWishlist from './UsersWishlist';


function Profile(){

    const [wishlistBooks, setWishlistBooks] = useState([])
 
    const currentUser = useSelector((state) => state.users.currentUser);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCurrentUser())
      }, [dispatch])

    useEffect(() => {
            fetch('/wishlistbooks')
            .then(res => res.json())
            .then(wishlistBooks => (setWishlistBooks(wishlistBooks)))
    }, [])

    console.log(wishlistBooks)

    return(
        <>
           <p>{currentUser ? currentUser.name : ' '}</p>
            <p>{currentUser ? currentUser.about_me : ' '}</p>
            <p>{currentUser ? currentUser.location : ' '}</p>
            <h1>Books I've Read</h1>
            {currentUser ? currentUser.books.map((b) => {
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