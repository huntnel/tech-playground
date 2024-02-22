import React from 'react';
import { Link } from "react-router-dom";
import { Container, Card } from 'react-bootstrap';
function ModuleHome() {
    return (
        <div>
            <Container style={{ height: '100vh', overflow: 'auto', backgroundColor: "#000000" }} fluid>
                <h1 className='logo-color-dark text-center'>Python Adventures</h1>
                
                <Container className='d-flex card-module-container'>
                    <Container>
                        <Card border="light" className='module-card border-0'>
                            <Card.Body>
                                <Card.Title className='text-white card-title text-center'>Quest 1</Card.Title>
                            </Card.Body>
                            <Card.Img className='card-img' variant="top" src="img/module1/Wizard.jpg" />
                            <div className='card-img-overlay'>
                                <div className="overlay-text">
                                    <Card.Text className='text-center'>
                                        <br></br>Learn about print statements and data types!
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Container>

                    <Container>
                        <Card border="light" className='module-card border-0'>
                            <Card.Body>
                                <Card.Title className='text-white card-title text-center'>Quest 2</Card.Title>
                            </Card.Body>
                            <Card.Img className='card-img' variant="top" src="img/module4/Werewolf.png" />
                            <div className='card-img-overlay'>
                                <div className="overlay-text">
                                    <Card.Text className='text-center'>
                                        <br></br>Learn about if statements!
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Container>

                    <Container>
                        <Card border="light" className='module-card border-0'>
                            <Card.Body>
                                <Card.Title className='text-white card-title text-center'>Quest 3</Card.Title>
                            </Card.Body>
                            <Card.Img className='card-img' variant="top" src="img/module3/Witch.png" />
                            <div className='card-img-overlay'>
                                <div className="overlay-text">
                                    <Card.Text className='text-center'>
                                        <br></br>Learn about loops!
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Container>

                    <Container>
                        <Card border="light" className='module-card border-0'>
                            <Card.Body>
                                <Card.Title className='text-white card-title text-center'>Quest 4</Card.Title>
                            </Card.Body>
                            <Card.Img className='card-img' variant="top" src="img/module4/Vampire.png" />
                            <div className='card-img-overlay'>
                                <div className="overlay-text">
                                    <Card.Text className='text-center'>
                                        <br></br>Advanced Topics!
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Container>
                </Container>
            {/* <ol>
                <li><Link to="/module1">Module 1</Link></li>
                <li><Link to="/module2">Module 2</Link></li>
                <li><Link to="/module3">Module 3</Link></li>
                <li><Link to="/module4">Module 4</Link></li>
            </ol> */}
            </Container>
        </div>
    );
}

export default ModuleHome;