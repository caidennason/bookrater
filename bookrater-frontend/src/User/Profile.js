import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from './userSlice';



function Profile(){

    const currentUser = useSelector((state) => state.users.currentUser);
    const dispatch = useDispatch()
    console.log(currentUser)
    useEffect(() => {
        dispatch(getCurrentUser())
      }, [dispatch])

    return(

        <>
           <p>{currentUser ? currentUser.name : ' '}</p>
            <p>{currentUser ? currentUser.about_me : ' '}</p>
            <p>{currentUser ? currentUser.location : ' '}</p>
        </>
    )
}

export default Profile;