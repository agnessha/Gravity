import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from "../img/logoWhite.png";
import { Form, Field } from 'react-final-form'
import icon1 from '../img/Twitter.svg'
import icon2 from '../img/Linkedin.png'
import icon3 from '../img/Google.png'
import icon4 from '../img/Facebook.png'

const Footer = props => {

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    const onSubmit = async values => {
        await sleep(300)
    }
    return(
        <footer>
            <div className="footer">
                <div className="nav">
                    <Container>
                        <Row>
                            {/*<Col md={1}>*/}
                            {/*    <img className="footer-logo logo" src={logo} alt="logo"/>*/}
                            {/*</Col>*/}
                            <Col md={7}>
                                <img className="footer-logo logo" src={logo} alt="logo"/>

                                <div className="footer__menu ms-auto">
                                    <a href="#" className="footer__menu-item">
                                        Travel
                                    </a>
                                    <a href="#" className="footer__menu-item">
                                        Explore
                                    </a>
                                    <a href="#" className="footer__menu-item">
                                        Works
                                    </a>
                                    <a href="#" className="footer__menu-item">
                                        About Us
                                    </a>
                                    <a href="#" className="footer__menu-item">
                                        Contacts
                                    </a>
                                </div>
                            </Col>
                            <Col md={5}>
                                <div className="footer__form ms-auto">
                                    <Form
                                        onSubmit={onSubmit}
                                        render={({handleSubmit, values}) => (
                                            <form onSubmit={handleSubmit}>
                                                <Field
                                                    name="email"
                                                    component="input"
                                                    type="text"
                                                    placeholder="Your email"

                                                />
                                                <button className="form-btn" type="submit">
                                                    Send
                                                </button>

                                            </form>
                                        )}

                                        />
                                </div>
                            </Col>
                        </Row>
                        <Row className="line">
                            <Col md={8}>
                                <div className="footer__info">
                                    <a href="#" className="footer__info-link">
                                        Terms
                                    </a>
                                    <a href="#" className="footer__info-link">
                                        Promo
                                    </a>
                                    <a href="#" className="footer__info-link">
                                        Download
                                    </a>
                                    <a href="#" className="footer__info-link">
                                        News
                                    </a>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="footer__social ms-auto">
                                    <a href="#" className="footer__social-icon twitter"/>
                                    <a href="#" className="footer__social-icon linkedin"/>
                                    <a href="#" className="footer__social-icon google"/>
                                    <a href="#" className="footer__social-icon facebook"/>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </footer>
    )
}

export default Footer;