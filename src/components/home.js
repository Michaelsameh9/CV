import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import Type from './type';
import "./home.css";
import 'animate.css';
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Container className='home-page'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>MichaelSameh HOME</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Row>
          <Col lg="6" sm="6">
            <div className='home-text animate__animated animate__backInLeft' >
              <h1 >Hello there!</h1>
              <h1>
                I'M <b className='p-name'> Michael Sameh </b>
              </h1>
              <Type />
              <a href='/about'>
                <button className='btn'>
                  About Me <FontAwesomeIcon icon={faUser} size="sm" style={{ color: "#ffffff", }} />
                </button>
              </a>
              <a href='/contact'>
                <button className='btn'>
                  Contact <FontAwesomeIcon icon={faPhoneVolume} size="sm" style={{ color: "#ffffff", }} />
                </button>
              </a>
            </div>
          </Col>
          <Col lg="6" sm="6" className='home-2 animate__animated animate__zoomInRight'>
            <iframe src="https://lottie.host/embed/f3d2dff0-73ba-406c-a5e9-8c7b8088ca40/UCmR5L1H4E.json" className='avatar'></iframe>
          </Col>
        </Row>
      </Container>
    </>
  )
}
