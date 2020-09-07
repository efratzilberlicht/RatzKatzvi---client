import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardColumns, Button, Container, Row } from 'react-bootstrap'
import './Book.css';
import image from './image'

export default function Book(props) {
    const img = image.map(i => i.id)
    
    return (<CardColumns>
        <Card>
            <Card.Body className="body">
                <Card.Img src={img.image} className="book" />
                <Card.Text className="text">
                    {img[0].name}
                </Card.Text>
                <Button variant="success" className="download">PDF להורדת</Button>
            </Card.Body>
        </Card>
    </CardColumns>);
}