import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

function Signup(){

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
        reset()
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Label>Sign up for Bookrater</Form.Label>
            <Form.Control 
                onChange={handleNameChange}
                placeholder="Name"
                value={name}
            />
            <br></br>
            <Form.Control 
                onChange={handleAboutMeChange}
                placeholder="Tell us a bit about yourself"
                value={aboutMe}
            />
            <br></br>
            <Form.Control
                onChange={handleLocationChange}
                placeholder="Location"
                value={location}
            />
            <br></br>
            <Form.Control 
                onChange={handlePasswordChange}
                type="password"
                placeholder="Password"
                value={password}
            />
            <br></br>
            <Form.Control 
                onChange={handlePasswordConfirmationChange}
                type="password"
                placeholder="Confirm password"
                value={passwordConfirmation}
            />
            <br></br>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default Signup;