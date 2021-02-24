import React, { useState, useCallback } from 'react'
import { Form, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./LogIn.css"
export default function SignUp(props) {
    
    const [state , setState] = useState({
            UserId: "",
            Firstname: "",
            Lastname: "",
            PatientTz: "",
            DateOfBirth: "",
            Email: "",
            Password: ""
    })
    
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const inputChange = (event) => {
        const newperson = { ...this.state.patient };
        const id = event.target.id;
        newperson[id] = event.target.value;
        this.setState({ patient: newperson });

    }

//    const register = () => {

//         const newP = { ...this.state.patient };
//         // debugger;
//         // alert(this.state.patient.Firstname + " " + this.state.patient.Email);
//         // alert(newP.Firstname + "  " + newP.Email)
//         axios.post('patients/Register', newP).then(res => {
//             alert(res.data);
//             //localStorage.setItem("user", JSON.stringify(res.data))
//         });
//     }
return(
    <div>
    <Form className="signup" >
                <Form.Row>
                    <Form.Group as={Col}  >
                    {/* value={this.state.Firstname} */}
                        <Form.Control placeholder="שם פרטי" className="inputs" id="Firstname"  onChange={(event) => this.inputChange(event)} />
                    </Form.Group>
                    {/* <Form.Group as={Col} controlId="first_name">
                            <Form.Control placeholder="שם פרטי" />

                        </Form.Group> */}

                    <Form.Group as={Col} >
                    {/* value={this.state.Lastname} */}
                        <Form.Control placeholder="שם משפחה" className="inputs" id="Lastname"  onChange={(event) => this.inputChange(event)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                    {/* value={this.state.PatientTz} */}
                        <Form.Control placeholder=".ת.ז" className="inputs" id="PatientTz"  onChange={(event) => this.inputChange(event)} />
                    </Form.Group>

                    <Form.Group as={Col} >
                    {/* value={this.state.DateOfBirth} */}
                        <Form.Control type="date" placeholder="תאריך לידה" className="inputs" id="DateOfBirth"  onChange={(event) => this.inputChange(event)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                    {/* value={this.state.PhoneNumber1} */}
                        <Form.Control type="Phone" placeholder="טלפון" className="inputs" id="PhoneNumber1"  onChange={(event) => this.inputChange(event)} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        
                        <Form.Control placeholder="טלפון נוסף" className="inputs" id="PhoneNumber2"  onChange={(event) => this.inputChange(event)} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group key={3} as={Col}>
                    {/* value={this.state.Email} */}
                        <Form.Control key={4} type="email" placeholder="כתובת מייל" className="inputs" id="Email"  onChange={(event) => this.inputChange(event)} />
                    </Form.Group>
                </Form.Row>
                {/* </Form> */}

                <Form.Row>
                    <center> <h className="h">בחר את הסיסמא שתשמש אותך בכניסתך לאתר:</h>  </center>
                </Form.Row>

                {/* <Form> */}
                <Form.Row>
                    <Form.Group as={Col} >
                    {/* value={this.state.Password} */}
                        <Form.Control type="password" placeholder="סיסמא" className="inputs" id="Password"  onChange={(event) => this.inputChange(event)} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control type="password" className="inputs" id="confirm_password" placeholder="אימות סיסמא " />
                    </Form.Group>


                    {/* type="submit"  */}
                    <Form.Group as={Col}>
                        <Link onClick={() => { this.register() }}>
                            {/* <img src={arrow} id="arrow" /> */}
                            </Link>
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