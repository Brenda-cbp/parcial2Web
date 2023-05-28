import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import "./stylesBooks.css"

function Detail(props) {
    const [book, setbook] = useState({})
    useEffect(() => {
        const URL =
            "http://localhost:3000/books/" + props.id;
        fetch(URL,
            {
                mode: 'cors',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }

        )
            .then((data) => data.json())
            .then((data) => {
                setbook(data);
                console.log(data)
            });
    }, [props.id]);

    return (
        <div>
            <h2> {book.name}</h2>
            <hr />
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b>ISBN</b>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                    {book.isbn}
                </Col>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b>Author</b>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                    {book.isbn}
                </Col>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b>Publisher</b>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                    {book.publisher}
                </Col>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b>Genre</b>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                    {book.gender}
                </Col>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b>Year</b>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                    {book.year}
                </Col>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b>Available online </b>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                    {book.available_online ? "Yes" : "No"}
                </Col>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b>Price </b>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                    {book.price}
                </Col>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b>Summary </b>
                </Col>
                <p>{book.summary} </p>
            </Row>
        </div >
    )
}

export default Detail