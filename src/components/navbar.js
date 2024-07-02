import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import logo from "../components/images/MS3.png";
import { FaProjectDiagram } from "react-icons/fa";
import 'animate.css';



export default function NavbarMenu() {

    const [fix, setfix] = useState(false);
    const changebg = () => {
        if (window.scrollY >= 300) {
            setfix(true);
        } else {
            setfix(false);
        }
    }
    window.addEventListener('scroll', changebg);


    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }


    return (
        <>
            <Navbar expand="lg" className={fix ? "navbar-fixed" : "bg-body-tertiary"}>
                <Container fluid style={{ padding: 0 }}>
                    <Navbar.Brand href="/" className='logo animate__animated animate__flip'>
                        <img src={logo} alt='logo' />
                    </Navbar.Brand>
                    <div className='burger-menu' onClick={updateMenu}>
                        <div className={burger_class}></div>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={menu_class}>
                            <Nav.Link href="/" ><FontAwesomeIcon icon={faHouse} size="sm" style={{ color: "#fcfcfd", marginRight: '5px' }} />Home</Nav.Link>
                            <Nav.Link href="/about"><FontAwesomeIcon icon={faUser} size="sm" style={{ color: "#ffffff", marginRight: '5px' }} />About</Nav.Link>
                            <Nav.Link href="/projact" ><FaProjectDiagram className="ico" />Projact</Nav.Link>
                            <Nav.Link href="/contact"><FontAwesomeIcon icon={faPhoneVolume} size="sm" style={{ color: "#ffffff", marginRight: '5px' }} />Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
