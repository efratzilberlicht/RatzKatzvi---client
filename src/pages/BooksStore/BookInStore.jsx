import React from 'react';
import { Card, Button } from 'react-bootstrap';
// import booksback from '../../images/booksback.png';
import './BooksStore.css';


export default function BookInStore(props) {

    return (
           <div className="bookInStore align-items-md-center"
            // style={{backgroundImage:`url(${booksback})`}}
            >
                <img src={props.book.src} className="bookImg" alt="book"/>
                <p>{props.book.name}</p>
                
               <p id="price"> {props.book.price} ש"ח
                </p>

                <Button variant="success" className="addTOoCart">הוספה לסל</Button>
           </div>
    );
}