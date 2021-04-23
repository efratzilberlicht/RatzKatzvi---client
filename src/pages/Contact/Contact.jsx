import React ,{ useState, createRef }from "react";
import Filter from "../../components/global/Filter/Filter";
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import "./Contact.css";

export default function Contact(props) {
  const NameRef = createRef();
  const PhoneRef = createRef();
  const EmailRef = createRef();
  const MessageRef = createRef();
  let message;
  function messageToDispatch() {
    // event.preventDefault();
    message = {
        //   userId: uuid(),
        Name: NameRef.current.value,
        Phone: PhoneRef.current.value,
        Email: EmailRef.current.value,
        Message: MessageRef.current.value,
    }
    // var x = callToServer();
    axios.post('https://localhost:44392/api/users/SendAnEmail', message).then(res => {
        debugger;
        console.log(res.data);
    });
}

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

                <Form.Control className="contact col-md-3" placeholder="שם:" ref={NameRef} />
                <Form.Control className="contact col-md-3" placeholder="טל:" ref={PhoneRef}/>
                <Form.Control className="contact col-md-3" placeholder="מייל:" ref={EmailRef} />
                <Form.Control as="textarea" id="textarea" className="col-md-9" ref={MessageRef} rows={5} placeholder="הודעה:"/>
                <Button className="contact_submit col-md-2 hvr-grow" variant="primary" type="button" onClick={messageToDispatch}>שליחה</Button>

              </Form.Row>
            </Form>

          </div>
        </Form.Row>
      </div>
    </div>
  );
}