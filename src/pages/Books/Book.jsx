import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './Books.css';

export default function Book(props) {

    return (
           <div className="book align-items-md-center">
                <img src={props.book.src} className="bookImg" alt="book"/>
                <p>{props.book.name}</p>
                <Button variant="success" className="download"> להורדת PDF</Button>
           </div>
    );
}