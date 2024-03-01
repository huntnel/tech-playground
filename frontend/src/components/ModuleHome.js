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
            <Container style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'auto', backgroundColor: "#000000" }} fluid>
                <div className='logo'>
                    <LazyLoadImage 
                        src='img/logolight.png'
                        className='img-fluid'
                        alt="Challenge"
                        effect="blur"/>
                </div>
                <Row className='pb-sm-5'>
                    <Col>
                        <h1 className='pt-sm-5 logo-color-dark text-center pixel-font'>Python Quests</h1>
                    </Col>
                </Row>
                <Row className='pt-sm-3'>
                    <Col className="d-flex flex-column custom-z-index">
                        <Container className='d-flex card-module-container'>
                            <Container onClick={() => navigateToModule("/module1")}>
                                <Card border="light" className='module-card border-0'>
                                    <Card.Body>
                                        <Card.Title className='text-white pixel-font card-title text-center'>Module 1</Card.Title>
                                    </Card.Body>
                                    <Card.Img className='card-img' variant="bottom" src="img/module1/1-1.webp" />
                                    <div className='card-img-overlay'>
                                        <div className="overlay-text">
                                            <Card.Text className='text-center pixel-font'>
                                                <br></br>Learn about print statements and data types!
                                            </Card.Text>
                                        </div>
                                    </div>
                                </Card>
                            </Container>

                            <Container onClick={() => navigateToModule("/module2")}>
                                <Card border="light" className='module-card border-0'>
                                    <Card.Body>
                                        <Card.Title className='text-white pixel-font card-title text-center'>Module 2</Card.Title>
                                    </Card.Body>
                                    <Card.Img className='card-img' variant="bottom" src="img/module2/2-1.webp" />
                                    <div className='card-img-overlay'>
                                        <div className="overlay-text">
                                            <Card.Text className='text-center pixel-font'>
                                                <br></br>Learn about if statements!
                                            </Card.Text>
                                        </div>
                                    </div>
                                </Card>
                            </Container>

                            <Container onClick={() => navigateToModule("/module3")}>
                                <Card border="light" className='module-card border-0'>
                                    <Card.Body>
                                        <Card.Title className='text-white pixel-font card-title text-center'>Module 3</Card.Title>
                                    </Card.Body>
                                    <Card.Img className='card-img' variant="bottom" src="img/module3/3-1.webp" />
                                    <div className='card-img-overlay'>
                                        <div className="overlay-text">
                                            <Card.Text className='text-center pixel-font'>
                                                <br></br>Learn about loops!
                                            </Card.Text>
                                        </div>
                                    </div>
                                </Card>
                            </Container>

                            <Container onClick={() => navigateToModule("/module4")}>
                                <Card border="light" className='module-card border-0'>
                                    <Card.Body>
                                        <Card.Title className='text-white pixel-font card-title text-center'>Module 4</Card.Title>
                                    </Card.Body>
                                    <Card.Img className='card-img' variant="bottom" src="img/module4/Vampire.png" />
                                    <div className='card-img-overlay'>
                                        <div className="overlay-text">
                                            <Card.Text className='text-center pixel-font'>
                                                <br></br>Advanced Topics!
                                            </Card.Text>
                                        </div>
                                    </div>
                                </Card>
                            </Container>
                        </Container>
                    </Col>
                </Row>
                <div className="torch-left torch">
                    <LazyLoadImage 
                    src='img/blackBackground.png'
                    className='img-fluid'
                    alt="Challenge"
                    effect="blur"/>
                </div>
                <div className="torch-right torch">
                    <LazyLoadImage 
                    src='img/blackBackground.png'
                    className='img-fluid'
                    alt="Challenge"
                    effect="blur"/>
                </div>
            </Container>
        </div>
    );
}

export default ModuleHome;