import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import "./stylesBooks.css"

function Detail(props) {
    const [book, setbook] = useState({})
    const rol = props.rol
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
                    {rol == "Administrador" ? <input placeholder={book.isbn}
                    /> :
                        <p>
                            {book.isbn}
                        </p>
                    }
                </Col>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b>Author</b>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                    {rol == "Administrador" ? <input placeholder={book.isbn}
                    /> :
                        <p>
                            {book.isbn}
                        </p>
                    }
                </Col>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b>Publisher</b>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                    {rol == "Administrador" ? <input placeholder={book.publisher}
                    /> :
                        <p>
                            {book.publisher}
                        </p>
                    }
                </Col>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b>Genre</b>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                    {rol == "Administrador" ? <input placeholder={book.gender}
                    /> :
                        <p>
                            {book.gender}
                        </p>
                    }
                </Col>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b>Year</b>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                    {rol == "Administrador" ? <input placeholder={book.year}
                    /> :
                        <p>
                            {book.year}
                        </p>
                    }
                </Col>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b>Available online </b>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                    {rol == "Administrador" ?
                        <input placeholder={book.available_online ? "Yes" : "No"} /> :
                        <p>
                            {book.available_online ? "Yes" : "No"}
                        </p>
                    }
                </Col>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b>Price </b>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                    {rol == "Administrador" ? <input placeholder=
                        {book.price}
                    /> :
                        <p>
                            {book.price}
                        </p>
                    }
                </Col>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b>Summary </b>
                </Col>
                {rol == "Administrador" ? <textarea placeholder={book.summary} rows={8}  ></textarea>
                    :
                    <p>
                        {book.summary}
                    </p>
                }
            </Row>
        </div >
    )
}

export default Detail