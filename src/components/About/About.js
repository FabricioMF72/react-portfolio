import React from 'react'
import "./About.css"
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { FiInstagram } from 'react-icons/fi'
import { FiGithub } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'
const About = () => {
    return (
        <>
            <Col md={6} className="about-img">
                <Image src="https://p4.wallpaperbetter.com/wallpaper/54/967/703/traveller-mountains-bag-wallpaper-preview.jpg"  />
            </Col >
            <Col md={5} className="about-info">
                <div className="about-title">
                    <strong>About Me</strong> 
                </div>
                <div className="about-greeting">
                   Hello! I´M Fabricio Murillo
                </div>
                <div className="about-desc">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.

                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.

                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.      
                </div>
                <div className="about-social">
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/fabricio_mflores/">
                        <FiInstagram/>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/FabricioMF72">
                        <FiGithub/>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/fabricio-murillo-flores-4352a4126/">
                        <FiLinkedin/>
                    </a>
                </div>
            </Col>
        </>
    )
}

export default About
