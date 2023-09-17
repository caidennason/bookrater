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
    }

    const handleAboutMeChange = (e) => {
        console.log(e.target.value)
    }

    const handleLocationChange = (e) => {
        console.log(e.target.value)
    }

    const handlePasswordChange = (e) => {
        console.log(e.target.value)
    }

    const handlePasswordConfirmationChange = (e) => {
        console.log(e.target.value)
    }

    return(
        <div>
            <Form.Label>Sign up for Bookrater</Form.Label>
            <Form.Control 
                onChange={handleNameChange}
                placeholder="Name"
            />
            <br></br>
            <Form.Control 
                onChange={handleAboutMeChange}
                placeholder="Tell us a bit about yourself"
            />
            <br></br>
            <Form.Control
                onChange={handleLocationChange}
                placeholder="Location"
            />
            <br></br>
            <Form.Control 
                onChange={handlePasswordChange}
                type="password"
                placeholder="Password"
            />
            <br></br>
            <Form.Control 
                onChange={handlePasswordConfirmationChange}
                type="password"
                placeholder="Confirm password"
            />
            <br></br>
            <Button>Submit</Button>
        </div>
    )
}

export default Signup;