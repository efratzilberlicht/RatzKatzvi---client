import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Carousel, index, handleSelect,Form, Col,Button} from 'react-bootstrap'
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
     </div>);
}