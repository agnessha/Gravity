import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import firstIcon from '../img/100 icon.png'
import secondIcon from '../img/Bag icon.png'
import firstBackgroundPhoto from '../img/Placeholder-7.png'
import secondBackgroundPhoto from '../img/placeholder13.jfif'

export const Description = props => {


    return (
        <section className="description">
            <div className="nav">
                <Container>
                    <Row>
                        <Col md={6} className="be-static">
                            <div className="description-photo">
                                <img src={secondBackgroundPhoto} alt=""/>
                            </div>
                        </Col>
                        <Col md={6} className="left-padding">
                            <div className="description__inner">
                                <h2 className="description__inner-title">
                                    Well thought with super easy to use
                                </h2>
                                <p className="description__inner-text">
                                    As we approached the palace I could see through the great windows of the first floor the brilliantly illuminated audience chamber of Than Kosis. The immense hall was crowded with nobles and their women.
                                </p>
                                <div className="description__inner-items">
                                    <div className="description__inner-item">
                                        <img src={firstIcon} alt=""/>
                                        <p>
                                            Ultimate Result
                                        </p>
                                    </div>
                                    <div className="description__inner-item">
                                        <img src={secondIcon} alt=""/>
                                        <p>
                                            Minimal Design
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}