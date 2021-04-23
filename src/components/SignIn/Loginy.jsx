import React, { useState, createRef } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { compose } from 'redux';

// import { useInjectReducer } from 'utils/injectReducer';
// import makeSelectLogin from './selectors';
// import reducer from './reducer';
// import { loginUser, signOut } from '../App/actions';
// import { makeSelectUser } from '../App/selectors';
// import {Link} from 'react-bootstrap-icons';
// import Link from './Link';
// import './loginStyle.scss';

export default function Loginy(props) {
//    useInjectReducer({ key: 'login', reducer });

   const [attempt, setAttempt] = useState(false);

   const EmailRef = createRef();
   const PasswordRef = createRef();

   const loginHandler = () => {
//        event.preventDefault();
       const user = {
        email: EmailRef.current.value,
        password: PasswordRef.current.value,
       }
       props.validateUser(user);
       if (!props.user)
         setAttempt(true);
   }

   return (
     // !props.user &&
     <div className="loginBackground">
     <div><input type="text" ref={EmailRef} placeholder="Email"></input></div>
     <div><input type="password" ref={PasswordRef} placeholder="Password"></input></div>
     <div>
     {attempt && props.user === false && <h6>email or password are incorrect</h6>}
     <button type="submit" onClick={loginHandler}>
                       LOGIN
        </button>
      </div>
      <h6>Haven't signed up yet? click here</h6>
      {/* <Link to={`/Signupy`}>SIGN UP</Link> */}
     </div>
     // (props.user &&
     //   <div>
     //     <h3>YOU HAVE ALREADY LOGGED IN</h3>
     //     <button type="submit" onClick={() => props.signout()}>
     //       SIGN OUT
     // </button>
     //   </div>)
  );
}

// Loginy.propTypes = {
//                   dispatch: PropTypes.func,
//                   validateUser: PropTypes.func,
// };

// const mapStateToProps = createStructuredSelector({
//                   // user: makeSelectUser(),
// });

// function mapDispatchToProps(dispatch) {
//                   return {
//                                     // signout: () => dispatch(signOut()),
//                                     onLoadMeetings: (mmId) => dispatch(getMeetingsByMM(mmId)),
//                                     validateUser: user => dispatch(loginUser(user)),
//                   };
// }

// const withConnect = connect(
//                   mapStateToProps,
//                   mapDispatchToProps,
// );

//export default compose(withConnect)(Loginy);
