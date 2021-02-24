import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import DropdownFilter from "../global/DropdownFilter/DropdownFilter";
import { Form, Button, Accordion, DropdownButton, Dropdown } from 'react-bootstrap'
import "./Manager.css";

export default function ShiurimManager(props) {
    const { shiurimList } = useSelector((state) => state.reducer);
  const { subjectsList } = useSelector((state) => state.reducer);
   const [fromControl, setfromControl] = useState(false);
   const click = () => setfromControl(!fromControl)
   const [subSubjectsList, setsubSubjectsList] = useState([]);
   const subSubjects = useCallback((subid) => {
      const a = subSubjectsList;
        a.push(subid)
       setsubSubjectsList(a);
     }, [subSubjectsList, setsubSubjectsList]);
 
return(<div>

<Accordion defaultActiveKey="0">
          <Accordion.Toggle className="accordion" as={Button} variant="link" eventKey="1">

            שיעורים
                     <hr className="hr" />
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="1">
            <div>
              <h3 className="h3" onClick={click}>הוספת שיעור:</h3>
              {fromControl ? <div><h5 className="h5">שם שיעור ישמר כשם הקובץ</h5>
                <Form className="file_form" dir="rtl" inline>
                  <Form.Group>
                    <Form.File id="exampleFormControlFile1" />
                  </Form.Group>
                </Form>
                <h5 className="h5">שייך את השיעור לנושאים המתאימים:</h5>
                {subjectsList
                  .filter(
                    subject =>
                      subject.Parent === 0
                  )
                  .map(subject => (

                    <Form.Check custom inline label={subject.Subject} type="checkbox" id={`custom-inline-checkbox-${subject.SubjectId}`} />

                  ))}
              </div> : false}
              <h3 className="h3" onClick={click}>עדכון שיעור:</h3>
              {fromControl ? <div className="inner"> 
         <DropdownFilter props={{name: "שיעור", list: shiurimList }} />
         {/* <h5 className="h5">בחר ספר:</h5> */}
          {/* className="dropdown_filter" */}
          
           <h5 className="h5">העלה קובץ מעודכן של השיעור:</h5>
            <Form className="file_form" dir="rtl" inline>
              <Form.Group>
                <Form.File id="exampleFormControlFile1" className="file" onChange="handleAddBook" />
              </Form.Group>
            </Form>
            <Button className="hvr-grow add update" variant="primary" type="submit" >עדכון</Button>
            </div> : false}
              <h3 className="h3">מחיקת שיעור:</h3>
            </div>
          </Accordion.Collapse>
        </Accordion>             
</div>);
}