import React from 'react'
import { useSelector } from 'react-redux'
import { FormControl, Form,  DropdownButton, Dropdown} from 'react-bootstrap';
import './Search.css';

// const subjects = [{id:1, name: "שבת"}, {id:1, name: "פסח"},{id:1, name: "אבלות"}]


export default function Menu(props) {
  const {subjectsList} = useSelector((state) => state.reducer); 
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
     {subjectsList.map(subject => (
           <Dropdown.Item
             id="dropItem"
             eventKey={JSON.stringify(subject)}
             key={subjectsList.SubjectId}
           >
             {subject.Subject}
           </Dropdown.Item>
         ))}
   </DropdownButton>
     </Form>               
    );
}


