import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from "../User/userSlice";

function HomePage(){


    const currentUser = useSelector((state) => state.users.currentUser)
    const dispatch = useDispatch()
    console.log(currentUser)

    return(
        <div>
            Recreating my first project for Flatiron using React and Ruby on Rails.
        </div>
    )
}

export default HomePage;