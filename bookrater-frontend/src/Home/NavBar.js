import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import HomePage from "./HomePage";
import Login from "../User/Login";
import Logout from "../User/Logout";
import Signup from "../User/Signup";
import Profile from "../User/Profile";
import { logout } from "../User/userSlice";
import { useDispatch, useSelector } from "react-redux";
import BookSearch from "../Books/BookSearch";
import { getCurrentUser } from "../User/userSlice";

function NavBar(){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.users.currentUser)

    useEffect(() => {
        dispatch(getCurrentUser())
    }, [dispatch])

    const signout = async () => {
        // console.log(currentUser, ' before logout from front end ')
        await dispatch(logout())
        navigate('/login')
        // console.log(currentUser, ' after logout from front end ')
    }

    return(
    <div>
        {<Navbar bg="dark" data-bs-theme='dark'>
        <Container>
            {currentUser ? <Button onClick={signout}>Signout</Button> : null}
        </Container>
            <Container>
                <Navbar.Brand href="/">Bookrater</Navbar.Brand>
                <Nav class-name="me-auto">
                    {!currentUser ? <Nav.Link href="/login">Login</Nav.Link> : null}
                    {!currentUser ? <Nav.Link href="/signup">Signup</Nav.Link> : null}
                    <Nav.Link href="/homepage">Home</Nav.Link>
                    {currentUser ? <Nav.Link href="/profile">{currentUser.name}'s Profile</Nav.Link> : null}
                    {currentUser ? <Nav.Link href="/booksearch">Book Search</Nav.Link> : null}
                </Nav>
            </Container>
        </Navbar> }
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path="/logout" element={<Logout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/homepage" element={<HomePage/>}/>
            <Route path="/profile" element={<Profile /> }/> 
            <Route path="/booksearch" element={<BookSearch /> }/> 
        </Routes>
    </div>
    )
}

export default NavBar;