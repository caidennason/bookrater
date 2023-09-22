import React, {useEffect, useState} from "react";
import NavBar from "./Home/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, getUsers } from "./User/userSlice";
import { logout } from "./User/userSlice";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function App() {

  const currentUser = useSelector((state) => state.users.currentUser)
  const dispatch = useDispatch()

  console.log(currentUser)

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])

  const navigate = useNavigate()


  const signout = () => {
    dispatch(logout())
    navigate('/login')
    console.log(' hello ')
}

  return (
    <div>
      <NavBar />
      {currentUser? <Button onClick={signout}>Signout</Button> : ''}
    </div>
  );
}

export default App;
