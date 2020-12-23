import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaDev } from "react-icons/fa"

const Header = () => {
    return (
        <div className= "header">
            <Navbar collapseOnSelect expand="lg" fixed="top" className="header-navbar">
            <Navbar.Brand href="#home">
                <FaDev className="navbar-logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto navbar__left-items">
                    <Nav.Link href="#Home" className="navbar__left-text">Home</Nav.Link>
                    <Nav.Link href="#About" className="navbar__left-text">About</Nav.Link>
                    <Nav.Link href="#Skills" className="navbar__left-text">Skills</Nav.Link>
                    <Nav.Link href="#Experience" className="navbar__left-text">Experience</Nav.Link>
                    <Nav.Link href="#Proyects" className="navbar__left-text">Proyects</Nav.Link>
                    <Nav.Link href="#Contact" className="navbar__left-text">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
