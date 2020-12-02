import React from 'react'
import Filter from '../../components/global/Filter/Filter';
 import BookInStore from './BookInStore';
import './BooksStore.css';

const BooksInStore = [{ src: "./images/av.png", name: "אבלות" ,price: "70.00" },
{ src: "./images/monthes.png", name: "חדשי השנה - א" ,price: "60.00"},
{ src: "./images/chanuka.png", name: "חנוכה - פורים" ,price: "50.00"},
{ src: "./images/eitanim.png", name: "ירח האיתנים",price: "70.00" },
{ src: "./images/av.png", name: "אבלות",price: "70.00" },
{ src: "./images/monthes.png", name: "חדשי השנה - א",price: "70.00" },
{ src: "./images/chanuka.png", name: "חנוכה - פורים",price: "70.00"  },
{ src: "./images/chanuka.png", name: "חנוכה - פורים",price: "70.00"  },
{ src: "./images/eitanim.png", name: "ירח האיתנים",price: "70.00"  },
{ src: "./images/av.png", name: "אבלות",price: "70.00"  },
{ src: "./images/monthes.png", name: "חדשי השנה - א",price: "70.00"  },
{ src: "./images/chanuka.png", name: "חנוכה - פורים",price: "70.00"  },
{ src: "./images/eitanim.png", name: "ירח האיתנים",price: "70.00"  },
{ src: "./images/av.png", name: "אבלות" ,price: "70.00" },
{ src: "./images/monthes.png", name: "חדשי השנה - א" ,price: "70.00" },
{ src: "./images/chanuka.png", name: "חנוכה - פורים",price: "70.00"  },
{ src: "./images/eitanim.png", name: "ירח האיתנים" ,price: "70.00" },
{ src: "./images/eitanim.png", name: "ירח האיתנים",price: "70.00"  }
]

export default function BooksStore(props) {

  return (<div>
    <Filter props={"חנות ספרים"}/>
    <div id="bookList">
      {/* key={book.id} */}

     {BooksInStore.map(book => <BookInStore  book={book}/>)}
     

    </div>
  </div>
  );
}