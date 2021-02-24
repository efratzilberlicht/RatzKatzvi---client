import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import Filter from "../global/Filter/Filter";
import BooksManager from "./BooksManager";
import ShiurimManager from "./ShiurimManager";
import SubjectsManager from "./SubjectsManager"
import { Form, Button, Accordion, DropdownButton, Dropdown } from 'react-bootstrap'
import "./Manager.css";

//function FormExample()

//const schema = yup.object({

// file: yup.string().required(),
//terms: yup.bool().required(),
//});
export default function Manager(props) {
  // const { subjectsList } = useSelector((state) => state.reducer);
  // const [fromControl, setfromControl] = useState(false);
  // const click = () => setfromControl(!fromControl)

  // // const [id, setid] = useState(-1);
  //  const [subSubjectsList, setsubSubjectsList] = useState([]);
  // const subSubjects = useCallback((subid) => {
  //    const a = subSubjectsList;
  //      a.push(subid)
  //     setsubSubjectsList(a);
  //   }, [subSubjectsList, setsubSubjectsList]);

  //   const [book, setbook] = useState(false);
  //   const handleAddBook = event => {
  //     const newBook = {...book} ;
  //     book.
  // if (event === 'single' || event === 'divorced' || event === 'widower') {
  //   matched.status = event;
  //   setStatus(event);
  // } else if (event.target.name === 'id') {
  //   matched[event.target.name] = idRef.current.value;
  // } else {
  //   matched[event.target.name] =
  //     event.target.name === 'gender' ? event.target.id : event.target.value;
  // }
  //   setbook(newBook);
  // };
 
  // const deleteSubject = () =>setdelSubject()
  return (
    // ({
    //     handleSubmit,
    //     handleChange,
    //     handleBlur,
    //     values,
    //     touched,
    //     isValid,
    //     errors,
    // }) => (onSubmit={handleSubmit}
    <div>
      <Filter props={'ברוך הבא מנהל'} />
      <div id="manager_menu">
    
      <BooksManager/>
      <ShiurimManager/>
      <SubjectsManager/>

        
      </div>

    </div>)

  // );
}

// ({
//     handleSubmit,
//     handleChange,
//     handleBlur,
//     values,
//     touched,
//     isValid,
//     errors,
// }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//             <Form.Group>
//                 <Form.File
//                     className="position-relative"
//                     required
//                     name="file"
//                     label="File"
//                     onChange={handleChange}
//                     isInvalid={!!errors.file}
//                     feedback={errors.file}
//                     id="validationFormik107"
//                     feedbackTooltip
//                 />
//             </Form.Group>
//             <Form.Group>
//                 <Form.Check
//                     required
//                     name="terms"
//                     label="Agree to terms and conditions"
//                     onChange={handleChange}
//                     isInvalid={!!errors.terms}
//                     feedback={errors.terms}
//                     id="validationFormik106"
//                     feedbackTooltip
//                 />
//             </Form.Group>
//             <Button type="submit">Submit form</Button>
//         </Form>
//     )

// );
  // <div>
            //         <Accordion.Toggle className="accordion" as={Button} variant="link" eventKey="1">
            //         <Form.Check custom inline label={subject.Subject} type="checkbox"  id={`custom-inline-checkbox-${subject.SubjectId}` }/> 
            //             </Accordion.Toggle>
            //             <Accordion.Collapse eventKey="1">
            //             {subjectsList.filter(
            //                 subject =>
            //                 subject.Parent === 0
            //               ).map(subject => (
            //                 <div> 
            //                     <Form.Check custom inline label={subject.Subject} type="checkbox" id={`custom-inline-checkbox-${subject.SubjectId}` }/>
            //                </div>
            //               ))}
            //             </Accordion.Collapse>
            // </div>