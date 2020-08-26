import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardColumns, Button } from 'react-bootstrap'


export default function Shiur(props) {
    return (<CardColumns>
        <Card>
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
            </Card.Text>
                <Button variant="success">לקובץ השיעור</Button>{' '}
                <Button variant="success">לקובץ מראה מקומות</Button>{' '}
                <Card.Img src="logo192.png" />
                <Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
            </Card.Body>
        </Card>
    </CardColumns>);
}
