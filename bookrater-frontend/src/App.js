import React, {useEffect, useState} from "react";
import NavBar from "./Home/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, getUsers } from "./User/userSlice";
import { logout } from "./User/userSlice";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function App() {

  const navigate = useNavigate()
  const currentUser = useSelector((state) => state.users.currentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])

//   const signout = () => {
//     console.log(currentUser, ' before logout from front end ')
//     dispatch(logout())
//     console.log(currentUser, ' after logout from front end ')
// }

  return (
    <div>
      {/* {currentUser ? <Button onClick={signout}>Signout</Button> : null} */}
      <NavBar />
    </div>
  );
}

export default App;
