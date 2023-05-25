import { Button } from 'bootstrap'
import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { Form } from "react-bootstrap";

function Login() {
    return (
        <div className="login container-fluid " style={{ backgroundColor: "#01A6FF" }} >
            <Row>
                <Col>
                </Col>
                <Col>
                    <h1>Tu librería aliada </h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username or Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                ""
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <p> forgot password </p>
                        <Button variant="primary" type="submit">
                            Sign-in
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Login