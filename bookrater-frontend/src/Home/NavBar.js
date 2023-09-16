import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomePage from "./HomePage";
import Login from "../User/Login";
import Logout from "../User/Logout";

function NavBar(){

    const navigate = useNavigate()

    return(
    <div>
        <Navbar bg="dark" data-bs-theme='dark'>
            <Container>
                <Navbar.Brand href="/">Bookrater</Navbar.Brand>
                <Nav class-name="me-auto">
                    <Nav.Link href="/logout">Logout</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path="/logout" element={<Logout />} />
        </Routes>
    </div>
    )
}

export default NavBar;