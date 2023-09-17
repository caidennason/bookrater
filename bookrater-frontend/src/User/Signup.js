import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from './userSlice';
import SignupErrorModal from './SignupErrorModal';

function Signup(){

    const dispatch = useDispatch()
    const state = useSelector((state) => state.users.entities)
    const currentUser = useSelector((state) => state.users.currentUser)
    const errorMessage = useSelector((state) => state.users.status)
    console.log(errorMessage)
    console.log(state)
    console.log(currentUser)
    
    const [name, setName] = useState('')
    const [aboutMe, setAboutMe] = useState('')
    const [location, setLocation] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [showModal, setShowModal] = useState(false)


    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleAboutMeChange = (e) => {
        setAboutMe(e.target.value)
    }

    const handleLocationChange = (e) => {
        setLocation(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handlePasswordConfirmationChange = (e) => {
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
        setName('')
        setAboutMe('')
        setLocation('')
        setPassword('')
        setPasswordConfirmation('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signup(userObject))
        .then((data) => {
            if (data.error) {
                console.log(data.error)
                setShowModal(true)
                // alert(data.error.message)
            }
        })
        reset()
    }

    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
        <Form onSubmit={handleSubmit} className="w-50 p-4 rounded bg-light rounded shadow">
            <h3 className="mb-4 text-center">Sign up for Bookrater</h3>
            <Form.Group className="mb-3" controlId="name">
            <Form.Control 
                onChange={handleNameChange}
                placeholder="Username"
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
        { showModal && <SignupErrorModal error={errorMessage} showModal={showModal} setShowModal={setShowModal}/>}
        </div>
    )
}

export default Signup;