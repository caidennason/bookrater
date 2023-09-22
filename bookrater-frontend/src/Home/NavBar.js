import React from "react";
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

function NavBar(){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.users.currentUser)

    const signout = () => {
        dispatch(logout())
        navigate('/login')
        console.log(' hello ')
    }

    return(
    <div>
        <Navbar bg="dark" data-bs-theme='dark'>
        <Container>
            {currentUser? <Button onClick={signout}>Signout</Button> : ''}
        </Container>
            <Container>
                <Navbar.Brand href="/">Bookrater</Navbar.Brand>
                <Nav class-name="me-auto">
                    {/* <Nav.Link href="/logout">Logout</Nav.Link> */}
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup">Signup</Nav.Link>
                    <Nav.Link href="/homepage">Home</Nav.Link>
                    {currentUser ? <Nav.Link href="/profile">Profile</Nav.Link> : ' '}
                    {/* {currentUser ? <Nav.Link onClick={signout}>Logout</Nav.Link> : ''} */}
                </Nav>
            </Container>
        </Navbar>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path="/logout" element={<Logout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/homepage" element={<HomePage/>}/>
            <Route path="/profile" element={<Profile /> }/> 
        </Routes>
    </div>
    )
}

export default NavBar;