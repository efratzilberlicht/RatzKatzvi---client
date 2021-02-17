import React from "react";
import { useSelector } from 'react-redux'
import {useParams} from 'react-router-dom';
import Filter from "../../components/global/Filter/Filter";
import "./Subjects.css";

export default function Subjects(props) {

 const {subjectsList} = useSelector((state) => state.reducer); 
const params = useParams();
  return (
    <div>
      <Filter props={params.Subject} />
      
      <div id="subjectList">

      {subjectsList.filter(subject => subject.Parent === parseInt(params.SubjectId) )
      .map(subject => (<div className="suSubject"><h4 className="h">{subject.Subject}</h4></div>))}
      </div>
    </div>
  );
}