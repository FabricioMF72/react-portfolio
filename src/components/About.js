import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
const About = () => {
    return (
        <div className="about">
            <Row>
                <Col sm={5}>
                    <Image className="about-image" src="/images/about-image.jpg" alt="First slide" fluid  />
                </Col>
                <Col sm={7}>
                    <div className="about-info">
                        <h1 className="about-title"> Hi there! I am Fabricio Murillo Flores</h1>
                        <p className="about-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio 
                        molestias beatae esse quidem veniam officia necessitatibus voluptate dolore magnam fugit perspiciatis, 
                        eligendi corporis consequuntur voluptates sunt animi voluptatem sapiente maxime Lorem ipsum dolor, sit 
                        amet consectetur adipisicing elit. Distinctio veniam officia necessitatibus voluptate dolore magnam
                        molestias beatae esse quidem veniam officia necessitatibus voluptate dolore magnam fugit perspiciatis, 
                        eligendi corporis consequuntur voluptates sunt animi voluptatem sapiente maxime.</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default About
