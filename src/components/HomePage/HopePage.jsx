import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Carousel, index, handleSelect,Form, Col,Button,FormControl,NavDropdown,Card,Row,CardColumns,Container} from 'react-bootstrap'
import './HomePage.css';

export default function HomePage(props) {
    return (<div>
        {/* activeIndex={index} onSelect={handleSelect} */}
        <Carousel>
            <Carousel.Item>
                <img

                    className="d-block w-100"
                    src={("/images/HomePage.jpg")}
                    /* src="holder.js/800x400?text=First slide&bg=373940" */
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    {/* <p>Nulla vitae elit libero.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={("/images/shutterstock_1.jpg")}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    {/* <h3>Second slide label</h3> */}
                    <p>Lorem ipsum dolor sit amet.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={("/images/HomePage.jpg")}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    {/* <h3>Third slide label</h3> */}
                    <p>
                        Praesent commodo cursus magna.
          </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={("/images/shutterstock_1.jpg")}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    {/* <h3>Second slide label</h3> */}
                    <p>Lorem ipsum dolor sit amet.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div id="search">
           <h1>חפש נושא</h1> 
           <h5>תוכל למצוא בכל השיעורים</h5>
           <Form inline>
            {/* <Button variant="outline-success" onClick={click}>Search</Button> */}
            <FormControl className="searchfree" type="text" placeholder="חפש כאן" className="mr-sm-2" />
            {/* <NavDropdown title="חפש לפי נושאים" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
           </NavDropdown> */}
        </Form> 
        </div>

        

        <div id="news">
            <h1>!רוצה להיות מעודכן בתוכן החדש שלנו? הרשם עכשיו</h1>
        <Form dir="rtl">
        <Form.Row>
        <Col>
            <Form.Control placeholder="שם" />
        </Col>
        <Col>
            <Form.Control placeholder="אימייל" />
        </Col>
        <Col>
           <Button variant="primary" type="submit">שלח</Button> 
        </Col>
        </Form.Row>
        </Form>
        </div>

        <div id="updates" >
           <h1 className="title">עדכונים</h1>
           <CardColumns >
       <Container dir="rtl">
  <Row>
        <Card>
            <Card.Body>
            <Card.Img src="./images/update.png" className="u"/>
                <Card.Title>חדשות</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural 
                    additional content. This card has even longer content than
                    <br/>     
           <small className="text-muted">עודכן לפני 3 שעות</small> 
           </Card.Text>
            </Card.Body>
        </Card>

        <Card>
            <Card.Body>
            <Card.Img src="./images/update.png" className="u"/>
                <Card.Title>השיעור החדש</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural 
                    additional content. This card has even longer content than
                    <br/>
                    <small className="text-muted">עודכן לפני 3 שעות</small> 
            </Card.Text> 
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
                <Card.Img src="./images/update.png" className="u"/>
                <Card.Title>המאמר החודשי</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural 
                    additional content. This card has even longer content than
                    <br/>
                    <small className="text-muted">עודכן לפני 3 שעות</small> 
            </Card.Text> 
            </Card.Body>
        </Card>
        
        <Card>
            <Card.Body>
            <Card.Img src="./images/update.png" className="u"/>
                <Card.Title>שאלות ותשובות</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural 
                    additional content. This card has even longer content than 
                    <br/>
                    <small className="text-muted">עודכן לפני 3 שעות</small>
            </Card.Text> 
            </Card.Body>
        </Card>
  </Row>
</Container>
    </CardColumns>
        </div>

     </div>);
}