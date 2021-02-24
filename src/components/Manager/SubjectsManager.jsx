import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import DropdownFilter from "../global/DropdownFilter/DropdownFilter";
import { Form, Button, Accordion, DropdownButton, Dropdown } from 'react-bootstrap'
import "./Manager.css";

export default function SubjectsManager(props) {


           const { subjectsList } = useSelector((state) => state.reducer);
           const [fromControl, setfromControl] = useState(false);
           const click = () => setfromControl(!fromControl)
           const [subSubjectsList, setsubSubjectsList] = useState([]);
           const subSubjects = useCallback((subid) => {
              const a = subSubjectsList;
                a.push(subid)
               setsubSubjectsList(a);
             }, [subSubjectsList, setsubSubjectsList]);
             const [delSubject, setdelSubject] = useState("")
             const handleDeledeSubject = event => {
               setdelSubject(event.Subject);
             }
         
        return(<div>
                          <Accordion defaultActiveKey="0">
   <Accordion.Toggle className="accordion" as={Button} variant="link" eventKey="1">
     נושאים
   <hr className="hr" />
   </Accordion.Toggle>
   <Accordion.Collapse eventKey="1">
     <div>
       <h3 className="h3" onClick={click}>הוספת תת נושא:</h3>
       {fromControl ? <div className="inner"><h5 className="h5">שם הספר ישמר כשם הקובץ</h5>
         <Form className="file_form" dir="rtl" inline>
           <Form.Group>
             <Form.Control placeholder="שם התת נושא" className="subject_name" />
           </Form.Group>
         </Form>
         <h5 className="h5">שייך את התת נושא לנושא  הראשי המתאים:</h5>
         <div id="subjects">
           {subjectsList
             .filter(
               subject1 =>
                 subject1.Parent === 0
             )
             .map(subject => (
               <div className="sub">
                 {/* onChange={() => subSubjects(subject.SubjectId)} */}
                 <Form.Check key={subject.SubjectId} custom inline label={subject.Subject} type="checkbox" id={`custom-inline-checkbox-${subject.SubjectId}`} />
               </div>
             ))}
           {/* onClick={} */}
           <Button className="contact_submit hvr-grow add" variant="primary" type="submit" >הוספה</Button>
         </div>
       </div> : false}
       <h3 className="h3">עדכון תת נושא:</h3>
       <h3 className="h3" onClick={click}>מחיקת תת נושא:</h3>
       {fromControl ? <div className="inner">
         <h5 className="h5">בחר את התת נושא למחקיה:</h5>
         <DropdownFilter props={{name: "נושא", list: subjectsList}} />        
         <Button className="contact_submit hvr-grow add" variant="primary" type="submit">מחיקה</Button>
       </div> : false}
       <hr className="hr" id="bottom_hr" />
     </div>
   </Accordion.Collapse>
 </Accordion>
 </div>);
}