import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img2 from '../img/Placeholder-11.png'

export const Problems = (props) => {


    return (
        <section className="problems">
            <div className="nav">
                <Container>
                    <Row className="problems-flex">
                        <Col md={5} className="problems-flex-img">
                            <img src={img2} alt=""/>
                        </Col>
                        <Col md={6} className="ms-auto">
                            <div className="problems__inner">
                                <h2 className="problems__inner-title">
                                    We solve digital problems with an outstanding creative flare
                                </h2>
                                <p className="problems__inner-text">
                                    The best time to view the moon, obviously, is at night when there are few clouds and the weather is accommodating for a long and lasting study.
                                </p>
                                <p className="problems__inner-text">
                                    For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens.
                                </p>
                            </div>
                            <div className="problems__author">
                                <h4 className="problems__author-name">
                                    Denis Shepovalov
                                </h4>
                                <p className="problems__author-desc">
                                    Co-Founder & CEO
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}