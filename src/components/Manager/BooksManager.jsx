import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import DropdownFilter from "../global/DropdownFilter/DropdownFilter";
import { Form, Button, Accordion, DropdownButton, Dropdown,FormControl } from 'react-bootstrap'
import "./Manager.css";

export default function BooksManager(props) {
  let newBook = {file: null};
  const handleChangeFile = (value) => {
    newBook.file =  value;
    console.log(value);
    console.log(newBook);
  }

  const { booksList } = useSelector((state) => state.reducer);
  const { subjectsList } = useSelector((state) => state.reducer);
  const [fromControl, setfromControl] = useState(false);
  const click = () => setfromControl(!fromControl)

  // const [id, setid] = useState(-1);
  const [subSubjectsList, setsubSubjectsList] = useState([]);

  const subSubjects = useCallback((subid) => {
    if(subSubjectsList.includes(subid)) {
      const aaaa = subSubjectsList.filter(s => s !== subid);
      setsubSubjectsList(arr => [...aaaa]);
    }
    else{
      setsubSubjectsList(arr => [...arr, subid]);
    }
    
  }, [subSubjectsList,setsubSubjectsList]);
  
  return (<div>
    <hr className="hr" id="top_hr" />
    <Accordion defaultActiveKey="0">
      <Accordion.Toggle className="accordion" as={Button} variant="link" eventKey="1">
        ספרים
   <hr className="hr" />
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="1">
        <div>
          <h3 className="h3" onClick={click}>הוספת ספר:</h3>
          {fromControl ? <div className="inner"><h5 className="h5">שם הספר ישמר כשם הקובץ</h5>
            <Form className="file_form" dir="rtl" inline>
              <Form.Group>
                <Form.File id="exampleFormControlFile1" className="file" onChange={() => handleChangeFile(JSON.parse(this))}
                // onSelect={eventKey => {
                //   handleChange(JSON.parse(eventKey));
                // }}
                />
              </Form.Group>
            </Form>
            <h5 className="h5">העלה תמונה של הספר:</h5>
            <Form className="file_form" dir="rtl" inline>
              <Form.Group>
                <Form.File id="exampleFormControlFile1" className="file" onChange="handleAddBook" />
              </Form.Group>
            </Form>
            <h5 className="h5">שייך את הספר לנושאים המתאימים:</h5>
            <div id="subjects">
              {subjectsList
                .filter(
                  subject1 =>
                    subject1.Parent === 0
                )
                .map(subject => (
                  <div className="sub">
                    <Form.Check key={subject.SubjectId} custom inline label={subject.Subject} type="checkbox"
                      onChange={() => subSubjects(subject.SubjectId)} id={`custom-inline-checkbox-${subject.SubjectId}`} />
                    {subSubjectsList.includes(subject.SubjectId) ? <div>
                      {subjectsList.filter(
                        sub =>
                          sub.Parent === subject.SubjectId
                      ).map(s => (
                        <Form.Check key={s.SubjectId} custom inline label={s.Subject} type="checkbox" className="subSubject" id={`custom-inline-checkbox-${s.SubjectId}`} onChange="handleAddBook" />
                      ))}
                    </div> : false}
                  </div>
                ))}
              {/* onClick={} */}
              <Button className="hvr-grow add" variant="primary" type="submit" >הוספה</Button>
            </div>
          </div> : false}
          
          <h3 className="h3" onClick={click}>עדכון ספר:</h3>
         {fromControl ? <div className="inner"> 
         <DropdownFilter props={{name: "ספר", list: booksList}} />
         {/* <h5 className="h5">בחר ספר:</h5> */}
          {/* className="dropdown_filter" */}
          
           <h5 className="h5">העלה קובץ מעודכן של הספר:</h5>
            <Form className="file_form" dir="rtl" inline>
              <Form.Group>
                <Form.File id="exampleFormControlFile1" className="file" onChange="handleAddBook" />
              </Form.Group>
            </Form>
            <Button className="hvr-grow add update" variant="primary" type="submit" >עדכון</Button>
            </div> : false}
          <h3 className="h3">מחיקת ספר:</h3>
          <hr className="hr" id="bottom_hr" />
        </div>
      </Accordion.Collapse>
    </Accordion>
  </div>
  );

}