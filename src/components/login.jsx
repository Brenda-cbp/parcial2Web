import { Button, Container } from 'react-bootstrap'
import React, { useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { Form } from "react-bootstrap";
import "./styles.css"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = () => {
        if (!email) {
            setEmailError('Email is required');
        }
        else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            setEmailError('Invalid email format');
        } else {
            setEmailError('');
        }
    };

    const validatePassword = () => {
        if (!password) {
            setPasswordError('Password is required');
        } else if (password.length < 6) {
            setPasswordError('Password should be at least 6 characters long');
        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateEmail();
        validatePassword();
        if (!emailError && !passwordError) {
            // Perform login or other actions
            console.log('Login successful');
        }
    };
    return (
        <Container className="container">
            <div className="login container-fluid" style={{ backgroundColor: "white" }}>
                <Row>
                    <Col className='login-img' sm={7}>
                        <img src='https://img.freepik.com/vector-premium/patron-costura-vectorial-libros-dibujos-animados-sobre-fondo-verde_574806-549.jpg?w=2000' alt="Library" />
                    </Col>
                    <Col className='login-form'>
                        <h1>Tu librería Aliada</h1>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='label-form'>Username or Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    className='form-form'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={validateEmail}
                                />
                                {emailError && <div className="error-message">{emailError}</div>}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='label-form'>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    className='form-form'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onBlur={validatePassword}
                                />
                                {passwordError && <div className="error-message">{passwordError}</div>}
                            </Form.Group>
                            <p className='forgotPassword'>Forgot password?</p>
                            <div className='d-flex justify-content-center align-items-center'>
                                <Button variant="primary" type="submit" className='sign-in'>
                                    Sign in
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Login