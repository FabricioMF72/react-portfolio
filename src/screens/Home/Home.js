import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SkillList from '../SkillList/SkillList';
import "./Home.css"
import data from "../../data"
import ProyectCard from '../ProyectCard/ProyectCard'
import ExperienceList from '../ExperienceList/ExperienceList';
import Carousel from "react-elastic-carousel";
import Contact from '../Contact/Contact';
import Banner from '../Banner/Banner';
import About from '../About/About';
const breakPoints = [
    {
        width: 1, itemsToShow: 1
    },
    {
        width: 768, itemsToShow: 2
    }
];
const Home = () => {
    return (
        <>
            <Row id="#home" className="banner-row">
                <Banner/>
            </Row>
            <Row id="#About" className="about-row">
                <About/>
            </Row>
            <Row id="#skill" className="skill-row">
                <Col md={4}>
                    <SkillList/>
                </Col>
                <Col md={8}>
                    <ExperienceList/>
                </Col>
            </Row>
            <Row className="carousel-row">
                <span className="section-title align-center" >Proyects</span>
                <Carousel breakPoints={breakPoints} className="slider">
                {
                    data.proyects.map( (proyect) => (
                        <ProyectCard description={proyect.desc} title={proyect.title} subtitle={proyect.subTitle} img={proyect.img} gitHubUrl={proyect.githubUrl}
                            demoUrl={proyect.demoUrl} />
                    ))
                }
                {
                    data.proyects.map( (proyect) => (
                        <ProyectCard title={proyect.title} subtitle={proyect.subTitle} img={proyect.img} gitHubUrl={proyect.githubUrl}
                            demoUrl={proyect.demoUrl} />
                    ))
                }
                </Carousel>
            </Row>
            <Row className="contact-row">
                <span className="section-title align-center" >
                    Send me a message
                </span> 
                <Col md={12}>
                    <Contact/>
                </Col>
                
            </Row>
        </>
    )
}

export default Home
