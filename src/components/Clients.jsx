import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import icon1 from '../img/xiaomi.png'
import icon2 from '../img/tinder.png'
import icon3 from '../img/apple.png'
import icon4 from '../img/nike.png'
import icon5 from '../img/amd.png'



const Clients = props => {


    return (
        <section className="clients">
            <div className="nav">
                <Container>
                    <Row>
                        <Col md={7}>
                            <h2 className="clients-title">
                                Our Clients
                            </h2>
                        </Col>
                        <Col md={5}>
                            <p className="clients-heading heading">
                                — We worked with
                            </p>
                            <p className="clients-text">
                                Our favorite brands are our friends! We help them to achieve their goals, they help us to stay sharp.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <div className="clients-icons">
                            <img className="clients-icon" src={icon1} alt=""/>
                            <img className="clients-icon" src={icon2} alt=""/>
                            <img className="clients-icon" src={icon3} alt=""/>
                            <img className="clients-icon" src={icon3} alt=""/>
                            <img className="clients-icon" src={icon5} alt=""/>

                        </div>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Clients;