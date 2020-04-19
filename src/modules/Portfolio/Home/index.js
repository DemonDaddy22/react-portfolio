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

    handleUrlClick = (url, type = '_blank') => e => {
        e.stopPropagation();
        window.open(url, type);
    }

    // add diagonal linear gradient to project row
    // add images and test on windows
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
                                    <div onClick={this.handleUrlClick('https://github.com/DemonDaddy22/')}><i className="logo logo-1 fab fa-github mx-2"></i></div>
                                </Fade>
                                <Fade bottom delay={1200}>
                                    <div onClick={this.handleUrlClick('https://www.linkedin.com/in/rohangupta22/')}><i className="logo logo-2 fab fa-linkedin-in mx-2"></i></div>
                                </Fade>
                                <Fade bottom delay={1400}>
                                    <div onClick={this.handleUrlClick('https://twitter.com/Showstopper_RG')}><i className="logo logo-3 fab fa-twitter mx-2"></i></div>
                                </Fade>
                                <Fade bottom delay={1600}>
                                    <div onClick={this.handleUrlClick('https://www.instagram.com/rg_rohan1/')}><i className="logo logo-4 fab fa-instagram mx-2"></i></div>
                                </Fade>
                                <Fade bottom delay={1800}>
                                    <div onClick={this.handleUrlClick('https://www.facebook.com/demondaddy22')}><i className="logo logo-5 fab fa-facebook-f mx-2"></i></div>
                                </Fade>
                            </div>
                        </Col>
                        <Col md={2} />
                    </Row>
                </div>
                <Container style={{ minHeight: '100vh' }}>
                    <div id='about-section'>
                        <Fade bottom>
                            <div className='h2 text-theme font-weight-bold text-shadow-light text-center'>Bit About Me</div>
                            <hr className='hr' />
                        </Fade>
                        <Fade bottom>
                            <Row style={{ marginTop: 84 }}>
                                <Col sm={12} md={6} lg={4} style={{ marginBottom: 84 }}>
                                    <img src='https://avatars0.githubusercontent.com/u/39908472?s=460&u=d02d57cf1b01e6571a27aa2f5085a0e4b01d1dfe&v=4'
                                        alt='about-img' className='about-img' />
                                </Col>
                                <Col sm={12} md={6} lg={7} className='text-theme'>
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
                            <Col sm={12} md={5} className='projects-header-title text-shadow-light'>
                                <Fade left><div onClick={this.handleUrlClick('/projects', '_self')} className='styled-button mx-auto'>Projects</div></Fade>
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
                            <Col sm={12} md={5} className='gallery-header-title text-shadow-light'>
                                <Fade left><div onClick={this.handleUrlClick('/gallery', '_self')} className='styled-button mx-auto'>Gallery</div></Fade>
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
                    <Row style={{ marginTop: 80 }}>
                        <Col className='px-0 px-md-2' sm={12} md={6}>
                            <PortfolioGalleryCarousel interval={4000}
                                images={['https://res.cloudinary.com/yelp-camp/image/upload/v1587303137/portfolio/gallery3.jpg',
                                    'https://res.cloudinary.com/yelp-camp/image/upload/v1587303137/portfolio/gallery1.jpg',
                                    'https://res.cloudinary.com/yelp-camp/image/upload/v1587303138/portfolio/gallery10.jpg',
                                    'https://res.cloudinary.com/yelp-camp/image/upload/v1587303141/portfolio/gallery38.jpg',
                                    'https://res.cloudinary.com/yelp-camp/image/upload/v1587303143/portfolio/gallery58.jpg']} />
                        </Col>
                        <Col className='px-0 px-md-2' sm={12} md={6}>
                            <PortfolioGalleryCarousel interval={4600}
                                images={['https://res.cloudinary.com/yelp-camp/image/upload/v1587303145/portfolio/gallery73.jpg',
                                    'https://res.cloudinary.com/yelp-camp/image/upload/v1587303144/portfolio/gallery69.jpg',
                                    'https://res.cloudinary.com/yelp-camp/image/upload/v1587303148/portfolio/gallery90.png',
                                    'https://res.cloudinary.com/yelp-camp/image/upload/v1587303144/portfolio/gallery64.jpg',
                                    'https://res.cloudinary.com/yelp-camp/image/upload/v1587303146/portfolio/gallery78.jpg']} />
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: 80 }}>
                        <Col className='px-0 px-md-2' sm={12} md={6}>
                            <PortfolioGalleryCarousel interval={5000}
                                images={['https://res.cloudinary.com/yelp-camp/image/upload/v1587303144/portfolio/gallery70.jpg',
                                    'https://res.cloudinary.com/yelp-camp/image/upload/v1587303144/portfolio/gallery68.jpg',
                                    'https://res.cloudinary.com/yelp-camp/image/upload/v1587303145/portfolio/gallery74.jpg',
                                    'https://res.cloudinary.com/yelp-camp/image/upload/v1587303143/portfolio/gallery63.jpg',
                                    'https://res.cloudinary.com/yelp-camp/image/upload/v1587303144/portfolio/gallery53.jpg']} />
                        </Col>
                        <Col className='px-0 px-md-2' sm={12} md={6}>
                            <PortfolioGalleryCarousel interval={3500}
                                images={['https://res.cloudinary.com/yelp-camp/image/upload/v1587303142/portfolio/gallery49.jpg',
                                    'https://res.cloudinary.com/yelp-camp/image/upload/v1587303142/portfolio/gallery39.jpg',
                                    'https://res.cloudinary.com/yelp-camp/image/upload/v1587303141/portfolio/gallery33.jpg',
                                    'https://res.cloudinary.com/yelp-camp/image/upload/v1587303141/portfolio/gallery42.jpg',
                                    'https://res.cloudinary.com/yelp-camp/image/upload/v1587303141/portfolio/gallery31.jpg']} />
                        </Col>
                    </Row>
                </Container>
                <PortfolioFooter bgColor='#1c1430' color='#acffe3' />
            </Page>
        )
    }
}