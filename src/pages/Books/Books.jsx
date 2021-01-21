import React from "react";
import { useSelector } from 'react-redux'
import Filter from "../../components/global/Filter/Filter";
import Book from "./Book";
import "./Books.css";

const booksList = [
  {
    src: "./images/av.png",
    srcPDF: "./images/download book - simulation.pdf",
    name: "אבלות",
  },
  {
    src: "./images/monthes.png",
    srcPDF: "./images/download book - simulation.pdf",
    name: "חדשי השנה - א",
  },
  {
    src: "./images/chanuka.png",
    srcPDF: "./images/download book - simulation.pdf",
    name: "חנוכה - פורים",
  },
  {
    src: "./images/eitanim.png",
    srcPDF: "./images/download book - simulation.pdf",
    name: "ירח האיתנים",
  },
  {
    src: "./images/av.png",
    srcPDF: "./images/download book - simulation.pdf",
    name: "אבלות",
  },
  {
    src: "./images/monthes.png",
    srcPDF: "./images/download book - simulation.pdf",
    name: "חדשי השנה - א",
  },
  {
    src: "./images/chanuka.png",
    srcPDF: "./images/download book - simulation.pdf",
    name: "חנוכה - פורים",
  },
  {
    src: "./images/eitanim.png",
    srcPDF: "./images/download book - simulation.pdf",
    name: "ירח האיתנים",
  },
  {
    src: "./images/av.png",
    srcPDF: "./images/download book - simulation.pdf",
    name: "אבלות",
  },
  {
    src: "./images/monthes.png",
    srcPDF: "./images/download book - simulation.pdf",
    name: "חדשי השנה - א",
  },
  {
    src: "./images/chanuka.png",
    srcPDF: "./images/download book - simulation.pdf",
    name: "חנוכה - פורים",
  },
  {
    src: "./images/eitanim.png",
    srcPDF: "./images/download book - simulation.pdf",
    name: "ירח האיתנים",
  },
  {
    src: "./images/av.png",
    srcPDF: "./images/download book - simulation.pdf",
    name: "אבלות",
  },
  {
    src: "./images/monthes.png",
    srcPDF: "./images/download book - simulation.pdf",
    name: "חדשי השנה - א",
  },
  {
    src: "./images/chanuka.png",
    srcPDF: "./images/download book - simulation.pdf",
    name: "חנוכה - פורים",
  },
  {
    src: "./images/eitanim.png",
    srcPDF: "./images/download book - simulation.pdf",
    name: "ירח האיתנים",
  },
  {
    src: "http://www.bnei-brak.muni.il/SiteCollectionImages/logo.png",
    srcPDF: "http://www.bnei-brak.muni.il/Service/Documents/%D7%90%D7%92%D7%A3%20%D7%94%D7%94%D7%9B%D7%A0%D7%A1%D7%95%D7%AA/195%20%D7%91%D7%99%D7%98%D7%95%D7%9C%20%D7%94.%D7%A7%D7%91%D7%A2%20%D7%91%D7%90%D7%A9%D7%A8%D7%90%D7%99%20-%20%D7%A0%D7%92%D7%99%D7%A9.pdf",
    name: "ירח האיתנים",
  },
];

export default function Books(props) {

  // const {booksList} = useSelector((state) => state.reducer);
  return (
    <div>
      <Filter props={"ספרים"} />
      <div id="bookList">


        {booksList.map((book) => (
          <Book book={book} key={book.ItemId} />
        ))}
      </div>
    </div>
  );
}
