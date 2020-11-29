import React from 'react'
import { FormControl, Form,  DropdownButton, Dropdown, Button} from 'react-bootstrap';
import './Search.css';

const subjects = [{id:1, name: "שבת"}, {id:1, name: "פסח"},{id:1, name: "אבלות"}]

export default function Menu(props) {
    return (
    <Form inline>
     <FormControl type="text" placeholder="חיפוש חופשי" className="mr-sm-2" />

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


