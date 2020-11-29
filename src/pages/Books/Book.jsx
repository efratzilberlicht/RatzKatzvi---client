import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './Books.css';
// import image from './image'

export default function Book(props) {

    return (
    //   <CardColumns> 
           <div className="book">
                <img src={props.book.src} className="bookImg" alt="book"/>
                <p>{props.book.name}</p>
                <Button variant="success" className="download"> להורדת PDF</Button>
           </div>
           
           
        //    <Card>
        //     <Card.Body className="body">
        //         <Card.Img src={props.book.src} className="book" />
        //         <Card.Text className="text">
        //             {props.book.name}
        //         </Card.Text>
        //         <Button variant="success" className="download">PDF להורדת</Button>
        //     </Card.Body>
        // </Card>
    // {/* </CardColumns> */}
    );
}