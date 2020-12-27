import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { FaFacebookF,FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
const About = () => {
    return (
        <Container className="about" fluid>
            <Row>
                <Col sm={4}>
                    <Image className="about-image" src="/images/about-image.jpg" alt="First slide" fluid  />
                </Col>
                <Col sm={8}>
                    <div className="about-info">
                        <h1 className="about-title"> Hi there! I am Fabricio Murillo Flores</h1>
                        <p className="about-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio 
                        molestias beatae esse quidem veniam officia necessitatibus voluptate dolore magnam fugit perspiciatis, 
                        eligendi corporis consequuntur voluptates sunt animi voluptatem sapiente maxime Lorem ipsum dolor, sit 
                        amet consectetur adipisicing elit. Distinctio veniam officia necessitatibus voluptate dolore magnam
                        molestias beatae esse quidem veniam officia necessitatibus voluptate dolore magnam fugit perspiciatis, 
                        eligendi corporis consequuntur voluptates sunt animi voluptatem sapiente maxime.</p>
                        <Nav className="about-nav">
                            <Nav.Item>
                                <Nav.Link href="https://www.instagram.com/fabricio_mflores/" className="nav-item"><FaFacebookF/></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://www.instagram.com/fabricio_mflores/" className="nav-item"><FaInstagram/></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://www.instagram.com/fabricio_mflores/" className="nav-item"><FaGithub/></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://www.instagram.com/fabricio_mflores/" className="nav-item"><FaLinkedinIn /></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default About
