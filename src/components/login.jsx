import { Button, Container } from 'react-bootstrap'
import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { Form } from "react-bootstrap";
import "./styles.css"

function Login() {
    return (
        <Container className="container">

            <div className="login container-fluid " style={{ backgroundColor: "white" }} >
                <Row>
                    <Col className='login-img' sm={7}>
                        <img src='https://img.freepik.com/vector-premium/patron-costura-vectorial-libros-dibujos-animados-sobre-fondo-verde_574806-549.jpg?w=2000' />
                    </Col>
                    <Col className='login-form'>
                        <h1>Tu librería Aliada </h1>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='label-form'>Username or Email</Form.Label>
                                <Form.Control type="email" className='form-form' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='label-form'>Password</Form.Label>
                                <Form.Control type="password" className='form-form' />
                            </Form.Group>
                            <p className='forgotPassword'> Forgot password?</p>
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