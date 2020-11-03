import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import './Menu.css';

export default function Menu(props) {
    return (
        <Navbar dir="rtl" expand="lg">        
        <Nav.Link href="/">דף הבית</Nav.Link>
        <Nav.Link href="/About">אודות</Nav.Link>
        <Nav.Link href="/AdvancedSearch">חיפוש מתקדם</Nav.Link>
        <Nav.Link href="#home">ספרים</Nav.Link>
        <Nav.Link href="#home">מאמרי מחשבה</Nav.Link>
        <Nav.Link href="#home">שיעורי הלכה</Nav.Link>
        <Nav.Link href="#home">שידור חי</Nav.Link>
        <Nav.Link href="#home">ספרית וידאו</Nav.Link>
        <Nav.Link href="#home">חנות ספרים</Nav.Link>
        <Nav.Link href="#home">צור קשר</Nav.Link>
    </Navbar>
    );
}