import React, { Component } from 'react'
import connect from 'react-dom'
import PropTypes from 'prop-types'
import { Carousel, Form, Col, Button, Card, CardColumns} from 'react-bootstrap'
import Search from '../Search/Search';
import './HomePage.css';

const IMAGES =[{scr:"/images/HomePage.jpg",position:'First slide' },
{scr:"/images/shutterstock_1.jpg",position:'Second slide' },
{scr:"/images/HomePage.jpg",position:'Third slide' },
{scr:"/images/shutterstock_1.jpg",position:'Fourth slide' }]

const ICONS = [{src:"./images/poriut.png" , name:"פוריות ויוחסין"},
{src:"./images/actualation.png" , name:"אקטואליה בהלכה"},
{src:"./images/yearcircle.png"  , name:"מעגל השנה"},
{src:"./images/weaman.png" , name:"חיובי נשים"},
{src:"./images/life.png" , name:"אורח חיים"},
{src:"./images/shabat.png" , name:"שבת"},
{src:"./images/chehuna.png" , name:"כהונה"},
{src:"./images/avelut.png" , name:"אבלות"},
{src:"./images/machshava.png" , name:"מחשבה"}]

const UPDATES = [{src:"./images/update.png",title:"חדשות", 
text: "This is a wider card with supporting text below as a natural additional content. with supporting text below as"
, time:"שעות 3" },
{src:"./images/update.png",title:"השיעור החדש", 
text: "This is a wider card with supporting text below as a natural additional content. with supporting text below as"
, time:"שעות 7 " },
{src:"./images/update.png",title:"המאמר החודשי", 
text: "This is a wider card with supporting text below as a natural additional content. with supporting text below as"
, time:"שעות 10" },
{src:"./images/update.png",title:"שאלות ותשובות", 
text: "This is a wider card with supporting text below as a natural additional content. with supporting text below as"
, time:"שעות 5" }]

export default function HomePage(props) {

    function getCarouselItem(scr, position) {
        return (
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={("/images/HomePage.jpg")}
                    alt={position}
                />
                <Carousel.Caption>
                    <h3>{position} label</h3>
                </Carousel.Caption>
            </Carousel.Item>
        );
      }

    function getIconCard(src, name) {
        return(
         <Card>
        <Card.Body>
            <Card.Img src={src} className="s"/>
            <Card.Title className="t">{name}</Card.Title>
        </Card.Body>
    </Card>
      );
    }
    
    function getUpdate(src, title, text, time){
        return(<Card>
           <Card.Body className="updateCard">
           <Card.Img src={src} className="updateImg" />
             <Card.Title>{title}</Card.Title>
             <Card.Text>
             {text}
            <br />
        <small className="text-muted"> עודכן לפני  {time} </small>
            </Card.Text>
          </Card.Body>
        </Card>
        );
    }

    return (<div>
        <Carousel>
        {IMAGES.map(image => getCarouselItem(image.src, image.position))}
        </Carousel>
        
        <div id="search">
            <h1 className="h1">חפש נושא</h1>
            <h5> תוכל למצוא בכל השיעורים בהלכה ובמחשבה</h5>
           <Search/>
        </div>

        <div id="subjects">
            <h1> ? איזה נושא מעניין אותך </h1>
           <div id="icons">  
           <CardColumns>
                    {ICONS.map(icon => getIconCard(icon.src, icon.name))}
            </CardColumns>
           </div>
        </div>
        <div id="news">
            <h1 className="h1">!רוצה להיות מעודכן בתוכן החדש שלנו? הרשם עכשיו</h1>
            <Form dir="rtl">
                <Form.Row>
                    <Col>
                        <Form.Control className="input" placeholder="שם" />
                    </Col>
                    <Col>
                        <Form.Control className="input" placeholder="אימייל" />
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">שלח</Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>

        <div dir="rtl" id="updates">
            <h1 className="title">עדכונים</h1>
            <img alt="kavyaeli" src="/images/kavyaeli.png" className="kav" />
            <CardColumns id="cardColumns">
                {UPDATES.map(update => getUpdate(update.src, update.title, update.text, update.time))}
            </CardColumns>
        </div>

    </div>);
}
//state=store - מושכת את הנתונים
function mapStateToProps(state) {

};

function mapDispatchToProps(dispatch) {

};

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


