import React from 'react';

import './index.css';
import Page from '../../../ui-components/Page';
import PortfolioNavbar from '../../../ui-components/PortfolioNavbar';
import PortfolioFooter from '../../../ui-components/PortfolioFooter';
import { Row, Col, Container } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import ImagesRow from './ImagesRow';

export default class Gallery extends React.Component {

    handleUrlClick = url => e => {
        e.stopPropagation();
        window.open(url);
    }

    scrollTo = sectionId => {
        const body = document.querySelector('.body-container');
        const section = body.querySelector(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }

    render = () => {
        return (
            <Page>
                <div className='gallery-navbar'>
                    <PortfolioNavbar variant='dark' linkColor='text-white' page='gallery' />
                    <div className='d-none d-md-block' style={{ height: '6rem' }}></div>
                    <Row style={{ marginTop: '3rem' }}>
                        <Col md={2} />
                        <Col className='text-white' md={6}>
                            <Fade bottom>
                                <div className='display-4 font-weight-bold text-shadow-light outline-black'>GALLERY</div>
                                <div className='mt-5'>
                                    Photography for me is like capturing and saving the moments which are otherwise lost forever. 
                                    Interact with the images and see the magic! For more images and inspiration, visit my <span className='inline-link-gallery' onClick={this.handleUrlClick('https://www.instagram.com/shades_of_demon/')}>Instagram profile</span>.
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                    <div style={{ height: '4rem' }}></div>
                    <div className='d-none d-md-block' style={{ height: '3rem' }}></div>
                    <div className='text-center text-white' style={{ marginTop: '4rem' }}><i onClick={() => this.scrollTo('#gallery')} className='fas fa-chevron-down next-section-btn'></i></div>
                </div>
                <div id='gallery' className='gallery-container'>
                    <Container>
                        <ImagesRow rowIndex={0} images={[
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303724/portfolio/gallery93.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303140/portfolio/gallery24.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303138/portfolio/gallery7.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303145/portfolio/gallery76.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303146/portfolio/gallery81.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303148/portfolio/gallery94.png'
                        ]} style={{height: 250}} />
                        <ImagesRow rowIndex={1} images={[
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303149/portfolio/gallery91.png',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303145/portfolio/gallery77.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303724/portfolio/gallery85.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303146/portfolio/gallery80.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303145/portfolio/gallery75.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303145/portfolio/gallery71.jpg'
                        ]} />
                        <ImagesRow rowIndex={2} images={[
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303143/portfolio/gallery67.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303143/portfolio/gallery65.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303143/portfolio/gallery60.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303142/portfolio/gallery55.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303141/portfolio/gallery48.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303142/portfolio/gallery46.jpg'
                        ]} />
                        <ImagesRow rowIndex={3} images={[
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303142/portfolio/gallery44.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303141/portfolio/gallery29.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303141/portfolio/gallery30.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587315984/portfolio/gallery101.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303140/portfolio/gallery23.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303139/portfolio/gallery17.jpg'
                        ]} />
                        <ImagesRow rowIndex={4} images={[
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303139/portfolio/gallery15.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303138/portfolio/gallery16.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303139/portfolio/gallery11.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303139/portfolio/gallery9.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303138/portfolio/gallery5.jpg',
                            'https://res.cloudinary.com/yelp-camp/image/upload/v1587303138/portfolio/gallery6.jpg'
                        ]} />
                    </Container>
                </div>
                <PortfolioFooter bgColor='#002e1d' color='#e2e391' />
            </Page>
        )
    }
}