import React from 'react';
import { useSelector } from 'react-redux';



function Profile(){

    const currentUser = useSelector((state) => state.users.currentUser)

    return(

        <>
           <p>Welcome, {currentUser.name}!</p>
            <p>{currentUser.about_me}</p>
            <p>{currentUser.location}</p>
        </>
    )
}

export default Profile;