import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Detail from './detail';
import "./stylesBooks.css"

function Books() {

    const [listbooks, setListBooks] = useState([])
    const [idBook, setId] = useState(0)
    useEffect(() => {
        const URL =
            "http://localhost:3000/books";
        fetch(URL, {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((data) => data.json())
            .then((data) => {
                setListBooks(data);
                console.log(data)
            });
    }, []);


    return (
        <div className='container-books'>
            <Row>
                <Col sm={8} md={8} lg={8} xl={8}>
                    <Row>
                        {listbooks.map((book, i) => {
                            return (
                                <Col sm={4} md={4} lg={4} xl={4} key={i}>
                                    <Card className='cardBook' onClick={() => { setId(book.id); console.log(idBook) }}>
                                        <Card >
                                            <Card.Img variant="top" src={book.image} />
                                            <Card.Body>
                                                <Card.Title>{book.name}</Card.Title>
                                                <Card.Text>
                                                    {"ISBN: " + book.isbn}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
                <Col sm={4} md={4} lg={4} xl={4} className='detail'>
                    {idBook === 0 ? "" : <Detail id={idBook}></Detail>}
                </Col>
            </Row>
        </div>
    )
}

export default Books