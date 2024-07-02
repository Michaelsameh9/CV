import React, { useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./contact.css";
import { Col, Container, Row } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import 'animate.css';
import { Helmet } from "react-helmet";


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3a2pirx', 'template_ow49nvb', form.current, {
        publicKey: 'YshwVsIjeeF7x_C7S',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <Container className='contact-page'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MichaelSameh CONTACT</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
        <Row>
          <Col>
            <h1>Contact <span className='span-title'>Me</span></h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name"  />
              <label>Email</label>
              <input type="email" name="user_email"  />
              <label>Message</label>
              <textarea name="message"  />
              <input type="submit" value="Send" className='send' />
            </form>
          </Col>
        </Row>
      </Container>
    </>
  )
}
