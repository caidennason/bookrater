import React from 'react';
import { useSelector } from 'react-redux';



function Profile(){

    const currentUser = useSelector((state) => state.users.currentUser)

    return(

        <>
           {currentUser ? `Hi ${currentUser.name}` : ' '}
        </>
    )
}

export default Profile;