import React from "react";
import { Button } from "react-bootstrap";
import FileSaver from "file-saver";
import "./Shiurim.css";

export default function Shiur(props) {
  const saveFile = () => {
  FileSaver.saveAs(props.book.srcPDF, props.book.srcPDF);
  };
  const newWindow = () => {
    window.open(props.book.srcPDF);
  };
  return (
    <div className="shiur">
      <img
        src={props.shiur.src}
        className="ShiurImg"
        alt="Shiur"
        onClick={newWindow}
      />
      <h4>{props.shiur.ItemName}</h4>
      <p className="summary">{props.shiur.Summary}</p>
      
      <div id="shiurButtons">               
      {/* <p className="downloadTitle">להורדה:</p> */}
      <button id="downloadTitle" className="shiurButton">להורדה:</button>
      {/* onClick={saveFile} */}
      <button id="shiurbtn1" className="shiurButton hvr-grow" >PDF שיעור</button>
      <button id="shiurbtn2" className="shiurButton hvr-grow" >PDF מראה מקומות </button>
      </div>
    </div>
  );
}
      {/* <Button variant="success" id="shiurbtn1" className="shiurButton col-md-5" onClick={saveFile}>
        PDF שיעור  
      </Button>
      <Button variant="success" id="shiurbtn2" className="shiurButton col-md-8" onClick={saveFile}>
         PDF מראה מקומות   
      </Button> */}