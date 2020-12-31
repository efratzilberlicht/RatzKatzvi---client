import React from "react";
import { useSelector } from 'react-redux'
import Filter from "../../components/global/Filter/Filter";
import "./Shiurim.css";

export default function HalachShiurim(props) {

  const {shiurimList} = useSelector((state) => state.reducer);
  return (
    <div>
      <Filter props={"שיעורי הלכה"} />
     
      <div id="shiurimList">
        {/* {shiurimList.map((shiur) => (
          <Shiur shiur={shiur} key={shiur.ItemId} />
        ))} */}
      </div>
    </div>
  );
}