import React ,{ useState, createRef }from "react";
import { Form, Button, Dropdown, FormControl } from 'react-bootstrap'
import axios from 'axios'
import "./LogIn.css"
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import Filter from "../../components/global/Filter/Filter";

export default function Login(props) {

  const [attempt, setAttempt] = useState(false);
  const EmailRef = createRef();
  const PasswordRef = createRef();

  const loginHandler = () => {
//        event.preventDefault();
    const user = {
     Email: EmailRef.current.value,
     Password: PasswordRef.current.value,
    }
    // props.validateUser(user);
    // if (!props.user)
    //   setAttempt(true);

    const userfromDB = axios.post('https://localhost:44392/api/users/Login', user).then(res=>
      alert(res.data)
      )
      alert(userfromDB)
    debugger;

  }

return (
   <>
   <div className="login m-auto">
  <Form>
  <Form.Group controlId="formBasicEmail">
    {/* <Form.Label>:Enter your email</Form.Label> */}
    <Form.Control className="login_input" ref={EmailRef} type="email" placeholder="Email address" />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    {/* <Form.Label>:Choose Password</Form.Label> */}
    <Form.Control className="login_input" ref={PasswordRef} type="password" placeholder="Password" />
  </Form.Group>
  {/* <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  {attempt && props.user === false && <h6>email or password are incorrect</h6>}
  <Button className="hvr-pulse" variant="primary" type="submit" onClick={loginHandler}>
    LogIn
  </Button>
  <h5>Haven't signed up yet?  <a herf={`/Signupy`}>SIGN UP</a> </h5>
     
</Form>
</div>
</>
/* <MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">Sign in</p>
        <div className="grey-text">
          <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Type your password" icon="lock" group type="password" validate />
        </div>
        <div className="text-center">
          <MDBBtn>Login</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer> */
);
};

