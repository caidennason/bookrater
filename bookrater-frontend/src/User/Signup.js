import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { signup } from './userSlice';

function Signup(){

    const dispatch = useDispatch()
    
    const [name, setName] = useState('')
    const [aboutMe, setAboutMe] = useState('')
    const [location, setLocation] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const handleNameChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const handleAboutMeChange = (e) => {
        console.log(e.target.value)
        setAboutMe(e.target.value)
    }

    const handleLocationChange = (e) => {
        console.log(e.target.value)
        setLocation(e.target.value)
    }

    const handlePasswordChange = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    const handlePasswordConfirmationChange = (e) => {
        console.log(e.target.value)
        setPasswordConfirmation(e.target.value)
    }

    const userObject = {
        name: name,
        about_me: aboutMe,
        location: location,
        password: password,
        password_confirmation: passwordConfirmation
    }

    const reset = () => {
        console.log('resetting')
        setName('')
        setAboutMe('')
        setLocation('')
        setPassword('')
        setPasswordConfirmation('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userObject)
        dispatch(signup(userObject))
        reset()
    }

    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
        <Form onSubmit={handleSubmit} className="w-50 p-4 rounded bg-light rounded shadow">
            <h3 className="mb-4 text-center">Sign up for Bookrater</h3>
            <Form.Group className="mb-3" controlId="name">
            <Form.Control 
                onChange={handleNameChange}
                placeholder="Name"
                value={name}
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
            <Form.Control 
                onChange={handleAboutMeChange}
                placeholder="Tell us a bit about yourself"
                as="textarea"
                rows={3}
                value={aboutMe}
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
            <Form.Control
                onChange={handleLocationChange}
                placeholder="Location"
                value={location}
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
            <Form.Control 
                onChange={handlePasswordChange}
                type="password"
                placeholder="Password"
                value={password}
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
            <Form.Control 
                onChange={handlePasswordConfirmationChange}
                type="password"
                placeholder="Confirm password"
                value={passwordConfirmation}
            />
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
        </div>
    )
}

export default Signup;