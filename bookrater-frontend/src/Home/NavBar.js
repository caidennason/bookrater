import React, {useState} from "react";
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
import Spinner from 'react-bootstrap/Spinner';

function NavBar(){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.users.currentUser)

    const signout = () => {
        dispatch(logout())
        navigate('/login')
    }

    const spinner = () => (
        <Navbar bg="dark" data-bs-theme='dark'>
        <Container>
            <Navbar.Brand>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        </Navbar.Brand>
        </Container>
        </Navbar>
    )

    return(
    <div>
        {currentUser != null ? <Navbar bg="dark" data-bs-theme='dark'>
        <Container>
            {currentUser ? <Button onClick={signout}>Signout</Button> : ''}
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
        </Navbar> : spinner() }
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