import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {
    return (
            <div className="container-home">
                <Row>
                    <Col sm={4} className="home-info">
                        <h1 className="home-title">FABRICIO MURILLO</h1>
                        <h1 className="home-about">I am passionate about web development</h1>
                    </Col>
                    <Col sm={7} className="home-carousel">
                        <Carousel>
                            <Carousel.Item>
                                <Image src="/images/carousel2.jpg" alt="First slide" fluid   />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="/images/carousel2.jpg" alt="First slide" fluid   />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="/images/carousel2.jpg" alt="First slide" fluid   />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </div>
    )
}

export default Home
