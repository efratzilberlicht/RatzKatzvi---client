import React, { useState, createRef } from 'react'
import { Form, Col, Modal, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { call } from 'redux-saga/effects';
import axios from 'axios'
import { createUser } from '../../saga'
// import uuid from 'uuid-random';
import "./LogIn.css"
export default function SignUp(props) {
    const [showAlert, setShowAlert] = useState(false);

    const UserNameRef = createRef();
    const PasswordRef = createRef();
    const EmailRef = createRef();
    const PhoneRef = createRef();

    let newUser;

    function* callToServer() {
        yield call(createUser, newUser);
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    }
    var userfromDB;
    function formToDispatch() {
        // event.preventDefault();
        newUser = {
            //   userId: uuid(),
            UserName: UserNameRef.current.value,
            Password: PasswordRef.current.value,
            Email: EmailRef.current.value,
            isRegistered: false,
        }
        // var x = callToServer();
        axios.post('https://localhost:44392/api/users', newUser).then(res => {
            debugger;
            console.log(res.data);
        });
      
        setShowAlert(true);
    }


    return (
        <div className="signup m-auto">
            {/* onSubmit={formToDispatch} */}
            <Form className="signup">
                {showAlert && (
                    <Alert variant="light">
                        <Alert.Heading>נרשמת בהצלחה!</Alert.Heading>
                    </Alert>
                )}
                <Form.Row>
                    <Form.Group >
                        {/* value={this.state.Firstname} */}
                        <Form.Control placeholder="שם משתמש" className="inputs" id="Firstname" ref={UserNameRef} required />
                    </Form.Group>

                </Form.Row>

                <Form.Row>
                    <Form.Group>
                        {/* value={this.state.Email} */}
                        <Form.Control type="email" placeholder="כתובת מייל" className="inputs" id="Email" ref={EmailRef} required />
                    </Form.Group>
                </Form.Row>
                {/* </Form> */}

                <Form.Row>
                    <center> <h className="h">בחר את הסיסמא שתשמש אותך בכניסתך לאתר:</h>  </center>
                </Form.Row>

                {/* <Form> */}
                <Form.Row>
                    <Form.Group>
                        {/* value={this.state.Password} */}
                        <Form.Control type="password" placeholder="סיסמא" className="inputs" id="Password" ref={PasswordRef} required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type="password" className="inputs" id="confirm_password" placeholder="אימות סיסמא " />
                    </Form.Group>


                    {/* type="submit"  */}
                    <Form.Group>
                        <Button type="button" className="mb-2" onClick={formToDispatch}>

                            הרשמה
              </Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>)
}
{/* // <form>
    //             <h3>Sign Up</h3>

    //             <div className="form-group">
    //                 <label>First name</label>
    //                 <input type="text" className="form-control" placeholder="First name" />
    //             </div>

    //             <div className="form-group">
    //                 <label>Last name</label>
    //                 <input type="text" className="form-control" placeholder="Last name" />
    //             </div>

    //             <div className="form-group">
    //                 <label>Email address</label>
    //                 <input type="email" className="form-control" placeholder="Enter email" />
    //             </div>

    //             <div className="form-group">
    //                 <label>Password</label>
    //                 <input type="password" className="form-control" placeholder="Enter password" />
    //             </div>

    //             <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
    //             <p className="forgot-password text-right">
    //                 Already registered <a href="#">sign in?</a>
    //             </p>
    //         </form>
//<div className="card col-12 col-lg-4 login-card mt-2 hv-center">
//           <form>
//               <div className="form-group text-left">
//               <label htmlFor="exampleInputEmail1">Email address</label>
//               <input type="email" 
//                      className="form-control" 
//                      id="email" 
//                      aria-describedby="emailHelp" 
//                      placeholder="Enter email"
//               />
//               <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//               </div>
//               <div className="form-group text-left">
//                   <label htmlFor="exampleInputPassword1">Password</label>
//                   <input type="password" 
//                       className="form-control" 
//                       id="password" 
//                       placeholder="Password"
//                   />
//               </div>
//               <div className="form-group text-left">
//                   <label htmlFor="exampleInputPassword1">Confirm Password</label>
//                   <input type="password" 
//                       className="form-control" 
//                       id="confirmPassword" 
//                       placeholder="Confirm Password"
//                   />
//               </div>
//               <button 
//                   type="submit" 
//                   className="btn btn-primary"
//               >
//                   Register
//               </button>
//           </form>
//       </div>  */}