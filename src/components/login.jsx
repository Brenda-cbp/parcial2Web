import { Button, Container } from 'react-bootstrap'
import React, { useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { Form } from "react-bootstrap";
import "./styles.css"
import { useNavigate } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';


function Login() {
    const intl = useIntl();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [generalError, setgeneralError] = useState('');
    const navigate = useNavigate();

    const required_email = intl.formatMessage({ id: 'required_email' });
    const required_password = intl.formatMessage({ id: 'required_password' });
    const error_email = intl.formatMessage({ id: 'error_email' });
    const error_password = intl.formatMessage({ id: 'error_password' });


    const validateEmail = () => {
        if (!email) {
            setEmailError(required_email);
        }
        else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            setEmailError(error_email);
        } else {
            setEmailError('');
        }
    };

    const validatePassword = () => {
        if (!password) {
            setPasswordError(required_password);
        } else if (password.length < 6) {
            setPasswordError(error_password);
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
                const rol = data.rol;
                navigate('/books', { state: { rol } });
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
                        <h1>Tu Librería Aliada</h1>
                        {generalError && <div className="error-message">{generalError}</div>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='label-form'><FormattedMessage id="email" /></Form.Label>
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
                                <Form.Label className='label-form'><FormattedMessage id="password" /></Form.Label>
                                <Form.Control
                                    type="password"
                                    className='form-form'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onBlur={validatePassword}
                                />
                                {passwordError && <div className="error-message">{passwordError}</div>}
                            </Form.Group>
                            <p className='forgotPassword'><FormattedMessage id="forgot_password" /></p>
                            <div className='d-flex justify-content-center align-items-center'>
                                <Button variant="primary" type="submit" className='sign-in'>
                                    <FormattedMessage id="login" />
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