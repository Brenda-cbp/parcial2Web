import { Button, Container } from 'react-bootstrap'
import React, { createContext, useContext, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { Form } from "react-bootstrap";
import "./styles.css"
import { useNavigate } from 'react-router-dom';


export const RolContext = createContext({
    rol: {},
    setRol: () => { }
});
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [generalError, setgeneralError] = useState('');
    const navigate = useNavigate();
    const { rol, setRol } = useContext(RolContext);


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


    const login = async () => {
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            if (response.status === 200) {
                const data = await response.json();
                console.log(data)
                const rol = data;
                setRol(rol);
                navigate('/books');
            } else if (response.status === 401) {
                setgeneralError('Invalid email or password');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        validateEmail();
        validatePassword();
        if (!emailError && !passwordError) {
            await login();
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
                        {generalError && <div className="error-message">{generalError}</div>}
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