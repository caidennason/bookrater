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
        <Form onSubmit={handleSubmit} class='w-25 mx-auto'>
            <h3>Sign up for Bookrater</h3>
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"> */}
            <Form.Control 
                onChange={handleNameChange}
                placeholder="Name"
                value={name}
            />
            {/* </Form.Group> */}
            <br></br>
            <Form.Control 
                onChange={handleAboutMeChange}
                placeholder="Tell us a bit about yourself"
                as="textarea"
                rows={3}
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