import React from "react";
import Filter from "../../components/global/Filter/Filter";
import { Form, Button } from 'react-bootstrap'
import "./Contact.css";

export default function Contact(props) {

  return (
    <div>
      <Filter props={"צור קשר"} />

      <div id="contact">
        <Form.Row className="row align-items-md-center">
          <div id="contact_text">
            <h5 id="contact_h5">לכל עניין ובקשה
        <br />
        מערכת "רץ כצבי" לשרותכם
        </h5>

            <img className="icon" src="/images/message.png" alt="message" />
            <p className="contact_p">ratzkazvi@gmail.com</p>
            <img className="icon" src="/images/tel.png" alt="tel" />
            <p className="contact_p">0504102399</p>
          </div>
          <img id="contact_kav" src="/images/contact_kav.png" alt="contact_kav" />
          <div id="contact_form">
            <h3 className="contact_h3 col-md-12">מלאו את הפרטים ונחזור אליכם בהקדם</h3>
            <Form dir="rtl">
              <Form.Row className="formRow align-items-md-center">

                <Form.Control className="contact col-md-3" placeholder="שם" />
                <Form.Control className="contact col-md-3" placeholder="טל" />
                <Form.Control className="contact col-md-3" placeholder="מייל" />
                <Form.Control as="textarea" id="textarea" className="col-md-9" rows={5} placeholder="הודעה" />
                <Button className="contact_submit col-md-2 hvr-grow" variant="primary" type="submit">שליחה</Button>

              </Form.Row>
            </Form>

          </div>
        </Form.Row>
      </div>
    </div>
  );
}