import React from 'react';

import './index.css';
import PortfolioNavbar from '../../../ui-components/PortfolioNavbar';
import Page from '../../../ui-components/Page';
import { Row, Col, Container } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import PortfolioCarousel from '../../../ui-components/PortfolioCarousel';

export default class Home extends React.Component {
    render = () => {
        return (
            <Page>
                <div className='navbar-bg'>
                    <PortfolioNavbar variant='dark' linkColor='text-white' />
                    <div className='d-none d-md-block' style={{ height: '6rem' }}></div>
                    <Row style={{ marginTop: '4rem' }}>
                        <Col md={2} />
                        <Col md={8} className='text-center text-white' >
                            <h1 className='display-4 font-weight-bold text-shadow-dark outline-black'>Hi, I'am Rohan Gupta</h1>
                            <div className='bio-text mt-4 px-4'>I am a Software Development Engineer at OYO Rooms, who's passionate about coding and web-development in particular. Also, I'm ever-ready for FIFA and Cricket!</div>
                            <div className='bio-logos'>
                                <div className='logo'><i className="fab fa-github"></i></div>
                                <div className='logo'><i class="fab fa-linkedin-in"></i></div>
                                <div className='logo'><i class="fab fa-twitter"></i></div>
                                <div className='logo'><i className="fab fa-instagram"></i></div>
                                <div className='logo'><i className="fab fa-facebook-f"></i></div>
                            </div>
                        </Col>
                        <Col md={2} />
                    </Row>
                </div>
                <Container>
                    <div id='about-section'>
                        <Fade bottom>
                            <div className='h2 text-theme font-weight-bold text-shadow-light text-center'>Bit About Me</div>
                            <hr className='hr' />
                        </Fade>
                        <Fade bottom>
                            <Row style={{ marginTop: 84 }}>
                                <Col sm={12} md={6} lg={4} style={{ marginBottom: 84 }}>
                                    <img src='https://avatars0.githubusercontent.com/u/39908472?s=460&u=6cadc55e69b86a26c14ae501013b033379824d6c&v=4'
                                        height='300' width='300' alt='about-img' className='about-img' />
                                </Col>
                                <Col sm={12} md={6} lg={7} className='text-justify text-theme'>
                                    I'm currently pursuing B.Tech. in Computer Engineering from Thapar Institute of Engineering and Technology, Patiala and
                                    at the same time working as an SDE Intern in OYO Rooms, Gurugram.<br /><br />
                                    Over the past couple of years, I have acquired various skills which include Full Stack Web-Development, Python Scripting,
                                    Java Programming and UI/UX Development. Currently, I'm working on front-end development using ReactJS.<br /><br />
                                    I'm pretty passionate about food and yes, I'm one of those people who love pineapple on their pizza! While coding is something
                                    that I love and do for a living, I also like devoting my time to mobile photography, movies and web series.
                                </Col>
                                <Col lg={1} />
                            </Row>
                        </Fade>
                    </div>
                </Container>
                <div className='projects-header'>
                    <Fade bottom>
                        <Container>
                            <Row style={{ padding: '80px 0' }}>
                                <Col sm={12} md={5} className='projects-header-title h2 text-shadow-light outline-black'>Projects</Col>
                                <Col md={1} ><div className='divider'></div></Col>
                                <Col sm={12} md={6} className='blockquote'>
                                    <div className='text-white'><em>"Learning to write programs stretches your mind, and helps you think better,
                                        creates a way of thinking about things that I think is helpful in all domains."</em></div>
                                    <div className='blockquote-footer mt-4 text-white'>Bill Gates</div>
                                </Col>
                            </Row>
                        </Container>
                    </Fade>
                </div>
                <div className='projects-carousel'>
                    <PortfolioCarousel />
                </div>
                <div className='gallery-header'>
                    <Fade bottom>
                        <Container>
                            <Row style={{ padding: '80px 0' }}>
                                <Col sm={12} md={5} className='gallery-header-title h2 text-shadow-light outline-black'>Gallery</Col>
                                <Col md={1} ><div className='divider'></div></Col>
                                <Col sm={12} md={6} className='blockquote'>
                                    <div className='text-white'><em>"Learning to write programs stretches your mind, and helps you think better,
                                        creates a way of thinking about things that I think is helpful in all domains."</em></div>
                                    <div className='blockquote-footer mt-4 text-white'>Bill Gates</div>
                                </Col>
                            </Row>
                        </Container>
                    </Fade>
                </div>
                <Container className='gallery'>
                    <Row>
                        <Col sm={12} md={6}><PortfolioCarousel /></Col>
                        <Col sm={12} md={6}><PortfolioCarousel /></Col>
                    </Row>
                    <Row style={{ marginTop: 60 }}>
                        <Col sm={12} md={6}><PortfolioCarousel /></Col>
                        <Col sm={12} md={6}><PortfolioCarousel /></Col>
                    </Row>
                </Container>
            </Page>
        )
    }
}