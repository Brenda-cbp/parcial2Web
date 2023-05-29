import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { FormattedMessage, useIntl } from 'react-intl';
import "./stylesBooks.css"

function Detail(props) {
    const intl = useIntl();
    const [book, setbook] = useState({})
    const rol = props.rol
    const valueText = book.available_online ? intl.formatMessage({ id: 'yes' }) : 'No';

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
            });
    }, [props.id]);

    return (
        <div>
            <h2> {book.name}</h2>
            <hr />
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b><FormattedMessage id="isbn" /></b>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                    {rol === "Administrador" ? <input value={book.isbn} /> :
                        <p>{book.isbn} </p>}
                </Col>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b><FormattedMessage id="author" /></b>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                    {rol === "Administrador" ? <input value={book.author} /> :
                        <p> {book.author}</p>
                    }
                </Col>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b><FormattedMessage id="publisher" /></b>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                    {rol === "Administrador" ? <input value={book.publisher} /> :
                        <p>
                            {book.publisher}
                        </p>
                    }
                </Col>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b><FormattedMessage id="genre" /></b>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                    {rol === "Administrador" ? <input value={book.gender} /> :
                        <p>
                            {book.gender}
                        </p>
                    }
                </Col>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b><FormattedMessage id="year" /></b>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                    {rol === "Administrador" ? <input value={book.year} /> :
                        <p>
                            {book.year}
                        </p>
                    }
                </Col>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b><FormattedMessage id="available_online" /></b>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>

                    {rol === "Administrador" ?
                        <input value={valueText} /> :
                        <p>
                            {book.available_online ? <FormattedMessage id="yes" /> : "No"}
                        </p>
                    }

                </Col>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b><FormattedMessage id="price" /></b>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                    {rol === "Administrador" ? <input value={book.price} /> :
                        <p>
                            {book.price}
                        </p>
                    }
                </Col>
            </Row>
            <Row>
                <Col sm={6} md={6} lg={6} xl={6} >
                    <b><FormattedMessage id="summary" /></b>
                </Col>
                {rol === "Administrador" ? <textarea value={book.summary} rows={8}  ></textarea>
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