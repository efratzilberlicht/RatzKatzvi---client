import React from "react";
import { useSelector } from 'react-redux'
import Filter from "../../components/global/Filter/Filter";
import "./Subjects.css";

export default function Subjects(props) {

 const {subjectsList} = useSelector((state) => state.reducer); 

  return (
    <div>
                      {/* Subject */}
      <Filter props={'אקטואליה בהלכה'} />
      {/* <h1 className="centerBlueTitle">:אקטואליה בהלכה {props.Subject} </h1> */}
      <div id="subjectList">
      {/* props.Parent */}
      {subjectsList.filter(subject => subject.Parent === 1)
      .map(subject => (<div className="suSubject"><h4 className="h">{subject.Subject}</h4></div>))}
      </div>
    </div>
  );
}