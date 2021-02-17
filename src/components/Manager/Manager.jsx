import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import Filter from "../global/Filter/Filter";
import { Form, Button, Accordion } from 'react-bootstrap'
import "./Manager.css";

//function FormExample()

//const schema = yup.object({

// file: yup.string().required(),
//terms: yup.bool().required(),
//});
export default function Manager(props) {
  const { subjectsList } = useSelector((state) => state.reducer);
  const [fromControl, setfromControl] = useState(false);
  const click = () => setfromControl(!fromControl)

  const [subSubjectsList, setsubSubjectsList] = useState([]);
  // const [id, setid] = useState(-1);
  const subSubjects = useCallback((subid) => {
      const a = subSubjectsList;
      a.push(subid)
      setsubSubjectsList(a);
    }, [subSubjectsList, setsubSubjectsList]);
    

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
                    <Form.File id="exampleFormControlFile1" />
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
                      <Form.Check key={subject.SubjectId} custom inline label={subject.Subject} type="checkbox" onChange={() => subSubjects(subject.SubjectId)}  id={`custom-inline-checkbox-${subject.SubjectId}`} />
                      { subSubjectsList.includes(subject.SubjectId) ? <div>
                        {subjectsList.filter(
                          sub =>
                            sub.Parent === subject.SubjectId
                        ).map(s => (

                         <Form.Check key={s.SubjectId} custom inline label={s.Subject} type="checkbox"  id={`custom-inline-checkbox-${s.SubjectId}`} />

                        ))}
                      </div> : false}

                    </div>
                  ))}
                  <Button className="contact_submit hvr-grow add" variant="primary" type="submit">הוספה</Button>
                 {/* <div className="button"> </div> */}
                  </div>
              </div> : false}
             
              <h3 className="h3">עדכון ספר:</h3>
              <h3 className="h3">מחיקת ספר:</h3>
              <hr className="hr" id="bottom_hr" />
            </div>
          </Accordion.Collapse>
        </Accordion>

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
              <h3 className="h3">עדכון שיעור:</h3>
              <h3 className="h3">מחיקת שיעור:</h3>
            </div>
          </Accordion.Collapse>
        </Accordion>
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