import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from './userSlice';
import UsersBooks from './UsersBooks';
import UsersWishlist from './UsersWishlist';


function Profile(){

    const currentUser = useSelector((state) => state.users.currentUser);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCurrentUser())
      }, [dispatch])

    return(
        <>
           <p>{currentUser ? currentUser.name : ' '}</p>
            <p>{currentUser ? currentUser.about_me : ' '}</p>
            <p>{currentUser ? currentUser.location : ' '}</p>
            {currentUser ? currentUser.books.map((b) => {
                return <UsersBooks b={b}/>
            }) : ' '}
            {currentUser ? <UsersWishlist /> : ' '}
        </>
    )
}

export default Profile;