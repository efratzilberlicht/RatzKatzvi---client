import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './BooksStore.css';


export default function BookInStore(props) {

    return (
           <div className="bookInStore align-items-md-center">
            
                <img src={props.book.src} className="bookImg" alt="book"/>
                <p>{props.book.name}</p>
                
               <p id="price"> {props.book.price} ש"ח
                </p>
               {/* <button type="submit" className="addTOoCart">הוספה לסל</button> */}
                <Button variant="success" className="addTOoCart hvr-pulse">הוספה לסל</Button>
           </div>
    );
}