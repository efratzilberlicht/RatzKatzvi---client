// import React, { createRef, useState } from 'react';
// import uuid from 'uuid-random';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   Form,
//   Col,
//   InputGroup,
//   FormControl,
//   Alert,
//   Button,
// } from 'react-bootstrap';
// import { Telephone, Person, ShieldLockFill ,Link} from 'react-bootstrap-icons';
// // import Link from './Link';
// // import Button from '../../components/Button';


// export default function Signupy(props) {
//   // useInjectReducer({ key: 'signIn', reducer });
//   // useInjectSaga({ key: 'signIn', saga });

//   const [showAlert, setShowAlert] = useState(false);

//   const UserNameRef = createRef();
//   const PasswordRef = createRef();
//   const EmailRef = createRef();
//   const PhoneRef = createRef();

//   const mapFormToDispatch = () => {
//     // event.preventDefault();
//     const newUser = {
//       userId: uuid(),
//       userName: UserNameRef.current.value,
//       password: PasswordRef.current.value,
//       mail: EmailRef.current.value,
//       phone: PhoneRef.current.value,
//       isRegistered: false,
//     }
//     props.addMM(newUser);
//     setShowAlert(true);
//   }
//   return (
//     <div id="signinForm">
//       <Form onSubmit={mapFormToDispatch}>
//         <center>
//           {showAlert && (
//             <Alert variant="light">
//               <Alert.Heading>YOU WERE SIGNED IN SUCCESFULY!</Alert.Heading>
//               <h4>Wate for the administor to send your approval to your email</h4>
//               <Link to="/MeetingsDashboard" id="alertLink">
//                 Move to Meetings Dashboard
//           </Link>
//             </Alert>
//           )}

//           <h3>Personal Details:</h3>
//           <Form.Row className="align-items-center">
//             <Col xs="auto">
//               <InputGroup className="mb-2">
//                 <InputGroup.Prepend>
//                   <InputGroup.Text>
//                     <Person />
//                   </InputGroup.Text>
//                 </InputGroup.Prepend>
//                 <FormControl
//                   id="inlineFormInputGroup"
//                   placeholder="Insert Your User Name"
//                   ref={UserNameRef}
//                   required
//                 />
//               </InputGroup>
//             </Col>
//             <Col xs="auto">
//               <InputGroup className="mb-2">
//                 <InputGroup.Prepend>
//                   <InputGroup.Text>
//                     <ShieldLockFill />
//                   </InputGroup.Text>
//                 </InputGroup.Prepend>
//                 <FormControl
//                   id="inlineFormInputGroup"
//                   placeholder="Choose Password"
//                   ref={PasswordRef}
//                   required
//                 />
//               </InputGroup>
//             </Col>
//           </Form.Row>

//           <Form.Row className="align-items-center">
//             <Col xs="auto">
//               <InputGroup className="mb-2">
//                 <InputGroup.Prepend>
//                   <InputGroup.Text>@</InputGroup.Text>
//                 </InputGroup.Prepend>
//                 <FormControl
//                   id="inlineFormInputGroup"
//                   placeholder="example@gmail.com"
//                   type="email"
//                   ref={EmailRef}
//                   required
//                 />
//               </InputGroup>
//             </Col>
//             <Col xs="auto">
//               <InputGroup className="mb-2">
//                 <InputGroup.Prepend>
//                   <InputGroup.Text>
//                     <Telephone />
//                   </InputGroup.Text>
//                 </InputGroup.Prepend>
//                 <FormControl
//                   id="inlineFormInputGroup"
//                   placeholder="Insert Phone Number"
//                   ref={PhoneRef}
//                   type="tel"
//                   pattern="[0-9]{10}"
//                   maxLength="10"
//                 />
//               </InputGroup>
//             </Col>
//           </Form.Row>

//           <Form.Row className="align-items-center">
//             <Col xs="auto">
//               <Link to="/">Cancel</Link>
//             </Col>
//             <Col xs="auto">
//               <Button type="submit" className="mb-2">
//                 {/* onClick={displayAlert} */}
//                 Submit
//               </Button>
//             </Col>
//           </Form.Row>
//         </center>
//       </Form>
//     </div>
//   );
// }

// // SignIn.propTypes = {
// //   dispatch: PropTypes.func
// // };

// // const mapStateToProps = createStructuredSelector({
// //   signIn: makeSelectSignIn(),
// // });

// // function mapDispatchToProps(dispatch) {
// //   return {
// //     addMM: mm => dispatch(addMatchmaker(mm)),
// //   };
// // }

// // const withConnect = connect(
// //   mapStateToProps,
// //   mapDispatchToProps,
// // );

// // export default compose(withConnect)(SignIn);
