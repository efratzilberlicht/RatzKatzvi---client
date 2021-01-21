import React from 'react'
// import connect from 'react-dom'
// import PropTypes from 'prop-types'
// import history from 'history';
// import { useHistory } from "react-router-dom";
import HistoryRouter from 'history-router'
import { Carousel, Form, CardColumns, Col, Button, Card } from 'react-bootstrap'
import Search from '../AdvancedSearch/Search';
import './HomePage.css';
import '../../index.css';

const IMAGES = [{ scr: "/images/HomePage.jpg", position: 'First slide' },
{ scr: "/images/shutterstock_1.jpg", position: 'Second slide' },
{ scr: "/images/HomePage.jpg", position: 'Third slide' },
{ scr: "/images/shutterstock_1.jpg", position: 'Fourth slide' }]

const ICONS = [{ SubjectId: 1, Subject: "אקטואליה בהלכה", src: "./images/actualia.png" },
{ SubjectId: 2, Subject: "פוריות ויוחסין", src: "./images/poriut.png" },
{ SubjectId: 5, Subject: "קטן בהלכה", src: "./images/katan.png" },
{ SubjectId: 6, Subject: "חיובי נשים", src: "./images/nashim.png" },
{ SubjectId: 7, Subject: "מעגלי החיים", src: "./images/lifecircle.png" },
{ SubjectId: 8, Subject: "אורח חיים", src: "./images/life.png" },
{ SubjectId: 9, Subject: "כהונה", src: "./images/kehuna.png" },
{ SubjectId: 10, Subject: "שבת", src: "./images/shabbat.png" },
{ SubjectId: 11, Subject: "מועדים ", src: "./images/moadim.png" },
{ SubjectId: 12, Subject: "אבלות", src: "./images/avelut.png" },
{ SubjectId: 13, Subject: "יורה דעה", src: "./images/dea.png" },
{ SubjectId: 14, Subject: "כשרות", src: "./images/kosher.png" },
{ SubjectId: 15, Subject: "תשמישי קדושה", src: "./images/kdusha.png" },
{ SubjectId: 16, Subject: "חושן משפט", src: "./images/mishpat.png" },
{ SubjectId: 17, Subject: "מחשבה", src: "./images/machshava.png" }]


const UPDATES = [{
    src: "./images/update.png", title: "חדשות",
    text: "This is a wider card with supporting text below as a natural additional content. with supporting text below as"
    , time: "שעות 3"
},
{
    src: "./images/update.png", title: "השיעור החדש",
    text: "This is a wider card with supporting text below as a natural additional content. with supporting text below as"
    , time: "שעות 7 "
},
{
    src: "./images/update.png", title: "המאמר החודשי",
    text: "This is a wider card with supporting text below as a natural additional content. with supporting text below as"
    , time: "שעות 10"
},
{
    src: "./images/update.png", title: "שאלות ותשובות",
    text: "This is a wider card with supporting text below as a natural additional content. with supporting text below as"
    , time: "שעות 5"
}]

export default function HomePage(props) {

    // https://www.npmjs.com/package/history-router
   const router = new HistoryRouter()

    function getSubgects(SubjectId) {
        // let history = useHistory();
        //  history.push('/Subjects');
        router.history.push('/Subjects', ({ SubjectId }));

    };

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

    function getIconCard(SubjectId, Subject, src) {
        return (
            <div id={SubjectId} className="d-flex flex-column align-items-md-center">
                <img src={src} className="s text-center hvr-shrink" alt="icon" onClick={() => getSubgects(SubjectId)} />
                <h5 className="t text-center" >{Subject}</h5>
            </div>
        );
    }

    // function getUpdate(src, title, text, time){
    //     return(<Card>
    //        <Card.Body className="updateCard">
    //        <Card.Img src={src} className="updateImg" />
    //          <Card.Title>{title}</Card.Title>
    //          <Card.Text>
    //          {text}
    //         <br />
    //     <small className="text-muted"> עודכן לפני  {time} </small>
    //         </Card.Text>
    //       </Card.Body>
    //     </Card>
    //     );
    // }
    function getUpdate(src, title, text, time) {
        return (
            <div className="col-lg-2">

                <Card.Body className="updateCard">
                    <Card.Img src={src} className="updateImg" />
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                        <br />
                        <small className="text-muted"> עודכן לפני  {time} </small>
                    </Card.Text>
                </Card.Body>
            </div>
        );
    }

    return (<div>

        <Carousel>
            {IMAGES.map(image => getCarouselItem(image.src, image.position))}
        </Carousel>

        <div id="search">
            <h1 className="h1">חפש נושא</h1>
            <h5> תוכל למצוא בכל השיעורים בהלכה ובמחשבה</h5>
            <Search />
        </div>
        <div id="icons">
            <h1 className="centerBlueTitle">מאגר נושאים</h1>
            <div className="d-flex SubIcons" >
                <CardColumns className="cardColumns">
                    {ICONS.map(icon => getIconCard(icon.SubjectId, icon.Subject, icon.src))}
                </CardColumns>
            </div>
        </div>

        <div id="news">
            <h1 className="h1 col-md-12">!רוצה להיות מעודכן בתוכן החדש שלנו? הרשם עכשיו</h1>
            <Form dir="rtl">
                <Form.Row className="formRow align-items-md-center">

                    <Form.Control className="input col-md-3 hvr-grow" placeholder="שם" />
                    <Form.Control className="input col-md-3 hvr-grow" placeholder="אימייל" />
                    <Button className="col-md-3 hvr-grow" variant="primary" type="submit">שלח</Button>

                </Form.Row>
            </Form>
        </div>

        <div dir="rtl" id="updates">
            <h1 className="title">עדכונים</h1>
            <img alt="kavyaeli" src="/images/kavyaeli.png" className="kav" />
            {/* <CardColumns id="cardColumns">
                {UPDATES.map(update => getUpdate(update.src, update.title, update.text, update.time))}
            </CardColumns> */}
            <div className="row">
                <div className="col-sm-2"></div>
                {UPDATES.map(update => getUpdate(update.src, update.title, update.text, update.time))}
            </div>
        </div>

    </div>);
}
//state=store - מושכת את הנתונים
// function mapStateToProps(state) {

// };

// function mapDispatchToProps(dispatch) {

// };

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


