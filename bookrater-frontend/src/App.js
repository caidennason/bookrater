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
