import React from "react";
import { useSelector } from 'react-redux'
import Filter from "../../components/global/Filter/Filter";
import Shiur from "./Shiur";
import "./Shiurim.css";

const shiurimList = [{ItemId: 1 , ItemName:"פרקי מחשבה", src:"./images/update.png" ,srcPDF: "./images/download book - simulation.pdf", Summary:"וגרישיבת ה'ישוב וב החדש' בתל אביב,  בתל אביב, וישיבת 'ה.ישיבת ה'ישוב 'ה. ישיבת ה'ישוב החדש' בתל אביב, וישיבת 'ה. ישיבת ה'ישוב החדש' בתלוישיבת 'ה. ישיבת ה'ישוב החדש' בתל אביב, וישיבת 'ה."},
{ItemId: 2 , ItemName:"פרקי מחשבה", src:"./images/update.png" ,srcPDF: "./images/download book - simulation.pdf", Summary:"וגרישיבת ה'ישוב החדש' בתל אביב, וישיבת 'ה.ישיבת ה'ישוב החדש' בתל אביב, וישיבת 'ה.ישיבת ה'ישוב 'ה. ישיבת ה'ישוב החדש' בתל אביב, וישיבת 'ה. ישיבת ה'ישוב החדש' בתל אביב, וישיבת 'ה."},
{ItemId: 4 , ItemName:"פרקי מחשבה", src:"./images/update.png" ,srcPDF: "./images/download book - simulation.pdf", Summary:"וגרישיבת ה'ישוב החדש' בתל אביב, וישיבת 'ה.ישיבת ה'ישוב החדש' בתל אביב, וישיבת 'ה.ישיבת ה'ישוב אביב, וישיבת 'ה.ישיבת ה'ישוב החדש' בתל אביב, וישיבת 'ה. ישיבת ה'ישוב החדש' בתל אביב, וישיבת 'ה."},
{ItemId: 5 , ItemName:"פרקי מחשבה", src:"./images/update.png" ,srcPDF: "./images/download book - simulation.pdf", Summary:"וגרישיבת ה'ישוב החדש' בתל אביב, וישיבת 'ה.ישיבת ה'ישוב החדש' בתל אביב, וישיבת 'ה.ישיבת ה'ישוב החדש' בתל אביב, וישיבת ל אביב, וישיבת 'ה.ישיבת ה'ישוב החדש' בתל אביב, וישיבת 'ה. ישיבתיב, וישיבת 'ה."}
];

export default function MachshavaArticals(props) {

//  const {shiurimList} = useSelector((state) => state.reducer);
  return (
    <div>
      <Filter props={"מאמרי מחשבה"} />
     
      <div id="shiurimList">
        {shiurimList.map((shiur) => (
          <Shiur shiur={shiur} 
           key={shiur.ItemId} 
          />
        ))}
      </div>
    </div>
  );
}