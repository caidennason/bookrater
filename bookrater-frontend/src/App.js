import React, {useEffect, useState} from "react";
import NavBar from "./Home/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, getUsers } from "./User/userSlice";
import { logout } from "./User/userSlice";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function App() {

  const api_key=process.env.REACT_APP_BOOKS_KEY
  console.log(api_key)

  const currentUser = useSelector((state) => state.users.currentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])

  return (
    <div>
      <NavBar />
    </div>
  );
}

export default App;
