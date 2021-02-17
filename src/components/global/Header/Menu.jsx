import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

export default function Menu(props) {
    return (
        <Navbar dir="rtl" expand="lg">        
        <Nav.Link href="/">דף הבית</Nav.Link>
        <Nav.Link href="/About">אודות</Nav.Link>
        <Nav.Link href="/AdvancedSearch">חיפוש מתקדם</Nav.Link>
        <Nav.Link href="/Books">ספרים</Nav.Link>
        <Nav.Link href="/MachshavaArticals">מאמרי מחשבה</Nav.Link>
        <Nav.Link href="/ShiurimBySubject">שיעורי הלכה</Nav.Link>
        <Nav.Link href="/Manager">שידור חי</Nav.Link>
        <Nav.Link href="/VideoLibrary">ספרית וידאו</Nav.Link>
        <Nav.Link href="/BooksStore">חנות ספרים</Nav.Link>
        <Nav.Link href="/Contact">צור קשר</Nav.Link>
    </Navbar>
    );
}