import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormControl, Form,  DropdownButton, Dropdown, Button} from 'react-bootstrap';
import './Search.css';

const subjects = [{id:1, name: "שבת"}, {id:1, name: "פסח"},{id:1, name: "אבלות"}]

export default function Menu(props) {
    return (
    <Form inline>
    {/* <Button variant="outline-success" onClick={click}>Search</Button> */}
     <FormControl type="text" placeholder="חפש כאן" className="mr-sm-2" />
        <combobox />
<br></br>
<DropdownButton
     id="dropdownSerach"
     title="חפש לפי נושאים"
    //  onSelect={eventKey => {
    //    handleChange(JSON.parse(eventKey));
    //  }}
   >
     {subjects.map(subject => (
           <Dropdown.Item
             id="dropItem"
             //eventKey={JSON.stringify(matched)}
             key={subject.id}
           >
             {subject.name}
           </Dropdown.Item>
         ))}
   </DropdownButton>
     </Form>               
    );
}


