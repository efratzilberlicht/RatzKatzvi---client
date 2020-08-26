import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Navbar, NavDropdown, FormControl, Form, Button, Nav } from 'react-bootstrap';
import Menu from '../Menu/Menu1';


export default function Header(props) {
    return (<div>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
            <Menu/>
       </div>
    );
}