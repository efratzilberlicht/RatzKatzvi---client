import React, { useState } from 'react'
import { FormControl, Form } from 'react-bootstrap';
import Menu from './Menu';
import './Header.css';

export default function Header(props) {

    const [fromControl, setfromControl] = useState(false);
    const click = () => setfromControl(!fromControl)
    
    return (<div className="header">
        <div className="up">
            <img id="login" src="/images/fulllogin.png"/>
            <img id="searchicon" src="/images/search.png" onClick={click} />
        {fromControl ? <Form inline>
            <FormControl id="searcheader" type="text" placeholder="חפש כאן" className="mr-sm-2" /> 
        </Form>: false}
        </div>
        <img src="/images/logocut.png" id="logo" />
        <Menu />
    </div>
    );
}

