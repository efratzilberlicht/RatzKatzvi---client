import React from "react";
import { Card, Button } from "react-bootstrap";
import FileSaver from "file-saver";
import "./Books.css";

export default function Book(props) {
  const saveFile = () => {
  FileSaver.saveAs(props.book.srcPDF, props.book.srcPDF);
  };
  const newWindow = () => {
    let newWindow = window.open(props.book.srcPDF);
  };
  return (
    <div className="book align-items-md-center">
      <img
        src={props.book.src}
        className="bookImg"
        alt="book"
        onClick={newWindow}
      />
      <p>{props.book.name}</p>
      <Button variant="success" className="download" onClick={saveFile}>
        {" "}
        להורדת PDF
      </Button>
    </div>
  );
}
