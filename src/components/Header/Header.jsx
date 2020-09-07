import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Navbar, NavDropdown, FormControl, Form, Button, Nav } from 'react-bootstrap';
import Menu from '../Menu/Menu';
import './Header.css';

export default function Header(props) {
    //     click(){
    // 
    //     };
    const [fromControl, setfromControl] = React.useState(false);
    const click = () => setfromControl(true)
    return (<div className="header">
        <Form inline>
            <Button variant="outline-success" onClick={click}>Search</Button>
            {fromControl ? <FormControl type="text" placeholder="חפש כאן" className="mr-sm-2" /> : false}
        </Form>
        <img src="/images/logocut.png" id="logo" />
        <Menu />
    </div>
    );
}