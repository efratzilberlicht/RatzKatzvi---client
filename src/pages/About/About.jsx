import React from 'react'
import { useSelector } from 'react-redux'
import Filter from '../../components/global/Filter/Filter';
import { Button, Accordion} from 'react-bootstrap'
import './About.css';

export default function About(props) {
  const { CVText } = useSelector((state) => state.reducer);
  let text, text1, text2;

  if(CVText) {
    text = CVText.split('.');
    text1 = text.slice(0,(text.length/2));
    text2 = text.slice((text.length/2));
  }
  
 
  // function splitArrayIntoChunksOfLen(arr, len) {
  //   var chunks = [], i = 0, n = arr.length;
  //   console.log(arr);
  //   while (i < n) {
  //     chunks.push(arr.slice(i, i += len));
  //   }
  //   return chunks;
  // }
  // var text = splitArrayIntoChunksOfLen(CVText,2); 
  
  // function splitForTow(text){
  //   var textArray = text.split(".");
  //   return textArray;
  // }
  // var text = splitForTow(CVText);
  
  // let text = CVText.map(e => e.split('.').map(f => f));
  return (<div>
    <Filter props={"אודות"}/>
      <div id="about"> 
        <img id="imgAbout" src="./images/Tzvika.JPG" alt="about"/>
      <div id="text">
        <h1 id="title">צבי רייזמן - מחבר ספרי רץ כצבי</h1>
            <p>
          {text1}
          {/* {text[50]} */}
      {/* {CVText.split(".")} */}
            </p>
            <Accordion>
      <Accordion.Toggle as={Button} variant="link" eventKey="0" className="more">      
     <p>קרא עוד <img id="more" src="./images/more.png" alt="more"/></p>
      </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
  <p> {text2} </p>
    </Accordion.Collapse>
</Accordion>
        </div>
      </div>
  </div>
  );
}