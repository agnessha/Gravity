import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SliderCom from "./Slider";
import Slider from "react-slick";


export const Services = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="services">
            <div className="nav">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="services__heading">
                                <p className="services__heading-text">
                                    — Services
                                </p>
                                <h2 className="services__heading-title">
                                    We love work hard and explore new things that’s why we cover lot of things. Check our service list and view details
                                </h2>
                            </div>
                        </Col>
                        <Col md={{span: 5 , offset: 1}} className="ms-auto">
                            <div className="services__heading-lists">
                            <ul className="services__heading-list">
                                <li className="services__heading-item">
                                    Multimedia
                                </li>
                                <li className="services__heading-item">
                                    Interactive design
                                </li>
                                <li className="services__heading-item">
                                    Packaging
                                </li>
                                <li className="services__heading-item">
                                    Branding
                                </li>
                            </ul>
                            <ul className="services__heading-list">
                                <li className="services__heading-item">
                                    Creative Strategy
                                </li>
                                <li className="services__heading-item">
                                    UI/UX
                                </li>
                                <li className="services__heading-item">
                                    Coding
                                </li>

                            </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="nav">
                <Container>
                    <Row>
                        <Col md={12}>
                            {/*<SliderCom />*/}

                        </Col>
                    </Row>

                </Container>
            </div>

        </section>
    )
}