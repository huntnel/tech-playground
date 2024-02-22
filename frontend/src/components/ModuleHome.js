import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

function ModuleHome() {
    const navigate = useNavigate();
    const navigateToModule = (modulePath) => {
        navigate(modulePath);
    };

    return (
        <div>
            <Container style={{ height: '100vh', overflow: 'auto', backgroundColor: "#000000" }} fluid>
                <Row>
                    <Col xs={0} sm={0} md={1} className='text-white'>
                        Hi
                    </Col>
                    <Col className="d-flex flex-column">
                        <Row><h1 className='logo-color-dark text-center pixel-font'>Python Quests</h1></Row>
                        <Row className='my-5'></Row>
                        <Row>
                            <Container className='d-flex'>
                                <Container onClick={() => navigateToModule("/module1")}>
                                    <Card border="light" className='module-card border-0'>
                                        <Card.Body>
                                            <Card.Title className='text-white pixel-font'>Module 1</Card.Title>
                                        </Card.Body>
                                        <Card.Img className='card-img' variant="bottom" src="img/module1/Wizard.jpg" />
                                        <div className='card-img-overlay'>
                                            <div className="overlay-text">
                                                <Card.Text className='position-absolute text-center pixel-font'>
                                                    Learn about print statements and data types!
                                                </Card.Text>
                                            </div>
                                        </div>
                                    </Card>
                                </Container>

                                <Container onClick={() => navigateToModule("/module2")}>
                                    <Card border="light" className='module-card border-0'>
                                        <Card.Body>
                                            <Card.Title className='text-white pixel-font'>Module 2</Card.Title>
                                        </Card.Body>
                                        <Card.Img className='card-img' variant="bottom" src="img/module4/Werewolf.png" />
                                        <div className='card-img-overlay'>
                                            <div className="overlay-text">
                                                <Card.Text className='position-absolute text-center pixel-font'>
                                                    Learn about if statements!
                                                </Card.Text>
                                            </div>
                                        </div>
                                    </Card>
                                </Container>

                                <Container onClick={() => navigateToModule("/module3")}>
                                    <Card border="light" className='module-card border-0'>
                                        <Card.Body>
                                            <Card.Title className='text-white pixel-font'>Module 3</Card.Title>
                                        </Card.Body>
                                        <Card.Img className='card-img' variant="bottom" src="img/module3/Witch.png" />
                                        <div className='card-img-overlay'>
                                            <div className="overlay-text">
                                                <Card.Text className='inner-overlay-text pixel-font'>
                                                    Learn about loops!
                                                </Card.Text>
                                            </div>
                                        </div>
                                    </Card>
                                </Container>

                                <Container onClick={() => navigateToModule("/module4")}>
                                    <Card border="light" className='module-card border-0'>
                                        <Card.Body>
                                            <Card.Title className='text-white pixel-font'>Module 4</Card.Title>
                                        </Card.Body>
                                        <Card.Img className='card-img' variant="bottom" src="img/module4/Vampire.png" />
                                        <div className='card-img-overlay'>
                                            <div className="overlay-text">
                                                <Card.Text className='position-absolute text-center pixel-font'>
                                                    Advanced Topics!
                                                </Card.Text>
                                            </div>
                                        </div>
                                    </Card>
                                </Container>
                            </Container>
                        </Row>
                    </Col>
                    <Col xs={0} sm={0} md={1} className='text-white'>Hi</Col>
                </Row>
            </Container>
        </div>
    );
}

export default ModuleHome;