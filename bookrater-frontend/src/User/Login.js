import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Login(){

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleNameChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const handlePasswordChange = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    const loginObject = {
        name: name,
        password: password
    }

    const reset = () => {
        setName('')
        setPassword('')
    }

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(loginObject)
        reset()
    }

    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
        <Form onSubmit={handleLogin} className="w-50 p-4 rounded">
            <h3 className="mb-4 text-center">Login</h3>
            <Form.Group className="mb-3" controlId="name">
                <Form.Control 
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
                <Form.Control 
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                />
            </Form.Group>
        <Button type="submit">Login</Button>
        </Form>
        </div>
    )
}

export default Login;