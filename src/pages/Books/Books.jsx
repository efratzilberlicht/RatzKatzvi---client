import React from 'react'
import Filter from '../../components/global/Filter/Filter';
import Book from './Book';
import './Books.css';

const BooksList = [{ src: "./images/av.png", name: "אבלות" },
{ src: "./images/monthes.png", name: "חדשי השנה - א" },
{ src: "./images/chanuka.png", name: "חנוכה - פורים" },
{ src: "./images/eitanim.png", name: "ירח האיתנים" },
{ src: "./images/av.png", name: "אבלות" },
{ src: "./images/monthes.png", name: "חדשי השנה - א" },
{ src: "./images/chanuka.png", name: "חנוכה - פורים" },
{ src: "./images/eitanim.png", name: "ירח האיתנים" },
{ src: "./images/av.png", name: "אבלות" },
{ src: "./images/monthes.png", name: "חדשי השנה - א" },
{ src: "./images/chanuka.png", name: "חנוכה - פורים" },
{ src: "./images/eitanim.png", name: "ירח האיתנים" },
{ src: "./images/av.png", name: "אבלות" },
{ src: "./images/monthes.png", name: "חדשי השנה - א" },
{ src: "./images/chanuka.png", name: "חנוכה - פורים" },
{ src: "./images/eitanim.png", name: "ירח האיתנים" },
{ src: "./images/eitanim.png", name: "ירח האיתנים" }
]
 
export default function Books(props) {

  return (<div>
    <Filter props={"ספרים"}/>
    <div id="bookList">
      {/* key={book.id} */}

     {BooksList.map(book => <Book  book={book}/>)}
     

    </div>
  </div>
  );
}