import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { DiMysql,DiReact, DiJavascript, DiGit, DiHtml5, DiCss3, DiBootstrap } from 'react-icons/di';
import { SiRstudio } from 'react-icons/si';
const Skill = () => {
    return (
        <div className="skill">
            <Row>
                <Col sm={3}>
                    <Card style={{ width: '18rem' }} className="card-item">
                        <DiReact className="card-logo"/>
                        <Card.Body>
                            <Card.Title style={{ color: '#fff' }}>REACT</Card.Title>
                            <ProgressBar variant="dark" now={40} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card style={{ width: '18rem' }} className="card-item">
                        <DiJavascript className="card-logo"/>
                        <Card.Body>
                            <Card.Title style={{ color: '#fff' }}>JAVASCRIPT</Card.Title>
                            <ProgressBar variant="dark" now={40} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card style={{ width: '18rem' }} className="card-item">
                        <DiMysql className="card-logo"/>
                        <Card.Body>
                            <Card.Title style={{ color: '#fff' }}>SQL</Card.Title>
                            <ProgressBar variant="dark" now={40} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card style={{ width: '18rem' }} className="card-item">
                        <DiGit className="card-logo"/>
                        <Card.Body>
                            <Card.Title style={{ color: '#fff' }}>GIT</Card.Title>
                            <ProgressBar variant="dark" now={40} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Card style={{ width: '18rem' }} className="card-item">
                        <DiHtml5 className="card-logo"/>
                        <Card.Body>
                            <Card.Title style={{ color: '#fff' }}>HTML5</Card.Title>
                            <ProgressBar variant="dark" now={40} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card style={{ width: '18rem' }} className="card-item">
                        <DiCss3 className="card-logo"/>
                        <Card.Body>
                            <Card.Title style={{ color: '#fff' }}>CSS3</Card.Title>
                            <ProgressBar variant="dark" now={40} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card style={{ width: '18rem' }} className="card-item">
                        <DiBootstrap className="card-logo"/>
                        <Card.Body>
                            <Card.Title style={{ color: '#fff' }}>BOOTSTRAP</Card.Title>
                            <ProgressBar variant="dark" now={40} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card style={{ width: '18rem' }} className="card-item">
                        <SiRstudio className="card-logo"/>
                        <Card.Body>
                            <Card.Title style={{ color: '#fff' }}>R</Card.Title>
                            <ProgressBar variant="dark" now={40} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Skill
