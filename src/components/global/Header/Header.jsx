import React, { useState } from 'react'
import { FormControl, Form } from 'react-bootstrap';
// import { Link } from 'react-bootstrap-icons';
import { useHistory ,Link, Router} from "react-router-dom";
import Menu from './Menu';
import './Header.css';


export default function Header(props) {

    const [fromControl, setfromControl] = useState(false);
    const click = () => setfromControl(!fromControl)
    // let history = useHistory();
    // const LogIn = () =>  history.push(`/LogIn`);
    let history = useHistory();
    function LogMeIn() {
        history.push('/LogIn');
    };
    return (<div className="header">
        <div className="up">
            {/* <Link to={`/LogIn`}></Link> */}
                <img id="login" className="hvr-pulse" src="/images/fulllogin.png" alt="login" onClick={LogMeIn}/>
     
            <img id="searchicon" className="hvr-hang" src="/images/search.png" alt="search" onClick={click} />
        {fromControl ? <Form inline>
            <FormControl id="searcheader" type="text" placeholder="חפש כאן" className="mr-sm-2" /> 
        </Form>: false}
        </div>
        <img src="/images/logocut.png" id="logo" alt="logo"/>
        <Menu />
    </div>
    );
}

