import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img1 from '../img/Placeholder-1.png'
import img2 from '../img/Placeholder-2.png'
import img3 from '../img/Placeholder-3.png'
import img4 from '../img/Placeholder-4.png'
import img5 from '../img/Placeholder-5.png'


export const Projects = props => {


    return (
        <section className="projects">
            <div className="nav">
                <Container>
                    <Row>
                        <Col>
                            <p className="projects-heading heading">
                                — our works
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <h2>
                            Discover our Work
                            </h2>
                        </Col>
                        <Col md={8} className="ms-auto">
                            <div className="projects__menu">
                                <div className="projects__menu-item">
                                    All
                                </div>
                                <div className="projects__menu-item">
                                    Branding
                                </div>
                                <div className="projects__menu-item">
                                    Web
                                </div>
                                <div className="projects__menu-item">
                                    Development
                                </div>
                                <div className="projects__menu-item">
                                    Films
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="works">
                                <a href="#" className="works__item">
                                    <img src={img1} alt="" className="works__item-img"/>
                                </a>
                                <a href="#" className="works__item">
                                    <img src={img2} alt="" className="works__item-img"/>
                                </a>
                                <a href="#" className="works__item">
                                    <img src={img3} alt="" className="works__item-img"/>
                                </a>
                                <a href="#" className="works__item">
                                    <img src={img4} alt="" className="works__item-img"/>
                                </a>
                                <a href="#" className="works__item">
                                    <img src={img5} alt="" className="works__item-img"/>
                                </a>
                                <a href="#" className="works__item">
                                    <img src={img1} alt="" className="works__item-img"/>
                                </a>
                            </div>
                        </Col>
                    </Row>

                        <div className="projects__sub">
                            <Row>
                            <Col md={8}>
                                <p className="projects__sub-text">
                                    It picks up the words on the page and displays ads that are similar to those words. Then when someone either performs an action or clicks on your page you will get paid.
                                </p>
                            </Col>
                            <Col md={4}>
                                <a className=" ms-auto projects__sub-btn blue-btn">
                                    see our works
                                </a>
                            </Col>
                            </Row>

                        </div>

                </Container>
            </div>
        </section>
    )
}