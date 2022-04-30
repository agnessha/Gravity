import React from 'react'
import logo from '../img/Logo.png'
import searchIcon from '../img/Search Icon.png'
import menuIcon from '../img/Menu Icon.png'
import { Container, Row, Col } from 'react-bootstrap'


export const Header = props => {


    return (
        <header className="header">
            <div className="nav">
                <Container>
                    <Row>
                        <Col md={4}>
                            <img src={logo} alt="logo"/>
                        </Col>
                        <Col md={{span: 3, offset: 2}}>
                            <button className="btn">
                            <img src={searchIcon} alt="search icon"/>
                            </button>
                        </Col>
                        <Col md={3}>
                            <button className="btn ms-auto">
                            <img src={menuIcon} alt="menu icon"/>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="offer">
                <div className="nav">
                    <Container>
                        <Row>
                            <Col md={6} className='vh-dependent'>
                                <div className="offer__cont">
                                        <h1 className='offer__cont-title'>
                                            Work around you and your team
                                        </h1>
                                        <p className="offer__cont-text">
                                            From ads that dance or sing to MTV-like commercials, online advertisers are now using a new type of technology “rich media” to attract consumers.
                                        </p>
                                        <a className="offer__cont-btn">
                                            get started
                                        </a>
                                </div>
                            </Col>
                            <Col md={6} className="be-static ">
                                <div className="hero">
                                    <a href="#" className="video">

                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </header>
    )
}