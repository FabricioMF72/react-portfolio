import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import "./About.css"
const About = () => {
    return (
        <>
            <Col md={14} className="info-about">
                <Card>
                    <Card.Body>
                        <Card.Title>Welcome</Card.Title>
                        <Card.Subtitle>
                            I'm a Full Stack Web Developer
                        </Card.Subtitle>
                        <div className="line"></div>
                        <div> MongoDB - Express - React - NodeJS </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default About
