import React from "react";
import { Button } from "react-bootstrap";
import FileSaver from "file-saver";
import "./Books.css";

export default function Book(props) {
  const saveFile = () => {
  FileSaver.saveAs(props.book.ContextUrl, props.book.ContextUrl);
  };
  const newWindow = () => {
    window.open(props.book.ContextUrl);
  };
  return (
    <div className="book align-items-md-center">
      <img
        src={props.book.ImgUrl}
        className="bookImg"
        alt="book"
        onClick={newWindow}
      />



    {/* <video src="https://www.kolhalashon.com/new/Media/PlayShiur.aspx?FileName=30790242&Video=True" controls="controls" autoplay="autoplay" onClick={newWindow}>
    Your browser does not support the video tag
</video> */}
      <p className="bookName">{props.book.ItemName}</p>
      <Button variant="success" className="download hvr-grow" onClick={saveFile}>
        {" "}
        להורדת PDF
      </Button>
    </div>
  );
}
