import React from 'react';

import './index.css';
import PortfolioNavbar from '../../../ui-components/PortfolioNavbar';
import Page from '../../../ui-components/Page';
import { Row, Col, Container } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import PortfolioCarousel from '../../../ui-components/PortfolioCarousel';
import PortfolioGalleryCarousel from '../../../ui-components/PortfolioGalleryCarousel';
import PortfolioFooter from '../../../ui-components/PortfolioFooter';

export default class Home extends React.Component {

    handleUrlClick = url => e => {
        e.stopPropagation();
        window.open(url);
    }

    render = () => {
        return (
            <Page>
                <div className='navbar-bg'>
                    <PortfolioNavbar variant='dark' linkColor='text-white' page='home' />
                    <div className='d-none d-md-block' style={{ height: '6rem' }}></div>
                    <Row style={{ marginTop: '4rem' }}>
                        <Col md={2} />
                        <Col md={8} className='text-center text-white' >
                            <Fade bottom>
                                <div className='display-4 font-weight-bold text-shadow-light outline-black'>Hi, I'm Rohan Gupta</div>
                                <div className='bio-text mt-4 px-4'>I am a Software Development Engineer at OYO Rooms, who's passionate about coding and web-development in particular. Also, I'm ever-ready for FIFA and Cricket!</div>
                            </Fade>
                            <div className='bio-logos'>
                                <Fade bottom delay={1000}>
                                    <div className='logo' onClick={this.handleUrlClick('https://github.com/DemonDaddy22/')}><i className="fab fa-github"></i></div>
                                </Fade>
                                <Fade bottom delay={1200}>
                                    <div className='logo' onClick={this.handleUrlClick('https://www.linkedin.com/in/rohangupta22/')}><i class="fab fa-linkedin-in"></i></div>
                                </Fade>
                                <Fade bottom delay={1400}>
                                    <div className='logo' onClick={this.handleUrlClick('https://twitter.com/Showstopper_RG')}><i class="fab fa-twitter"></i></div>
                                </Fade>
                                <Fade bottom delay={1600}>
                                    <div className='logo' onClick={this.handleUrlClick('https://www.instagram.com/rg_rohan1/')}><i className="fab fa-instagram"></i></div>
                                </Fade>
                                <Fade bottom delay={1800}>
                                    <div className='logo' onClick={this.handleUrlClick('https://www.facebook.com/demondaddy22')}><i className="fab fa-facebook-f"></i></div>
                                </Fade>
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
                    <Container>
                        <Row style={{ padding: '80px 0' }}>
                            <Col sm={12} md={5} className='projects-header-title h2 text-shadow-light outline-black'>
                                <Fade left>Projects</Fade>
                            </Col>
                            <Col md={1} ><div className='divider'></div></Col>
                            <Col sm={12} md={6} className='blockquote'>
                                <Fade right>
                                    <div className='text-white'><em>"Learning to write programs stretches your mind, and helps you think better,
                                        creates a way of thinking about things that I think is helpful in all domains."</em></div>
                                    <div className='blockquote-footer mt-4 text-white'>Bill Gates</div>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='projects-carousel'>
                    <PortfolioCarousel />
                </div>
                <div className='gallery-header'>
                    <Container>
                        <Row style={{ padding: '80px 0' }}>
                            <Col sm={12} md={5} className='gallery-header-title h2 text-shadow-light outline-black'>
                                <Fade left>Gallery</Fade>
                            </Col>
                            <Col md={1} ><div className='divider'></div></Col>
                            <Col sm={12} md={6} className='blockquote'>
                                <Fade right>
                                    <div className='text-white'><em>"Photography takes an instant out of time,
                                        altering life by holding it still."</em></div>
                                    <div className='blockquote-footer mt-4 text-white'>Dorothea Lange</div>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className='gallery'>
                    <Row style={{ marginTop: 100 }}>
                        <Col sm={12} md={6}><PortfolioGalleryCarousel interval={4000} /></Col>
                        <Col sm={12} md={6}><PortfolioGalleryCarousel interval={4600} /></Col>
                    </Row>
                    <Row style={{ marginBottom: 100 }}>
                        <Col sm={12} md={6}><PortfolioGalleryCarousel interval={5000} /></Col>
                        <Col sm={12} md={6}><PortfolioGalleryCarousel interval={3500} /></Col>
                    </Row>
                </Container>
                <PortfolioFooter bgColor='#1c1430' color='#acffe3' />
            </Page>
        )
    }
}