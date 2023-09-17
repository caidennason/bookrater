import React from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";

function Login(){

    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
        <Form className="w-50 p-4 rounded">
            <h3 className="mb-4 text-center">Login</h3>
            <Form.Group className="mb-3" controlId="name">
                <Form.Control 
                placeholder="Name"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
                <Form.Control 
                type="password"
                placeholder="Password"
                />
            </Form.Group>
        <Button type="submit">Login</Button>
        </Form>
        </div>
    )
}

export default Login;