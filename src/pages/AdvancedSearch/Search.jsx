import React, { useState } from 'react'
import { useSelector} from 'react-redux'
import { FormControl, Form } from 'react-bootstrap';
import DropdownFilter from "../../components/global/DropdownFilter/DropdownFilter";
import './Search.css';

export default function Menu(props) {
  const {subjectsList} = useSelector((state) => state.reducer); 

  return (<>
    <Form inline>
     <FormControl type="text" placeholder="חיפוש חופשי" className="mr-sm-2"/>
     </Form> 
    <div className="dropdownSerach centerBlueTitle"> <DropdownFilter  props={{name: "נושא", list: subjectsList}} /></div>              
     </> );
}