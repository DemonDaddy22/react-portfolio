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
                            '/gallery93.png',
                            '/gallery24.jpeg',
                            '/gallery7.jpeg',
                            '/gallery76.jpeg',
                            '/gallery81.jpeg',
                            '/gallery94.png'
                        ]} style={{height: 250}} />
                        <ImagesRow rowIndex={1} images={[
                            '/gallery91.png',
                            '/gallery77.jpeg',
                            '/gallery85.png',
                            '/gallery80.jpeg',
                            '/gallery75.jpeg',
                            '/gallery71.jpeg'
                        ]} />
                        <ImagesRow rowIndex={2} images={[
                            '/gallery67.jpeg',
                            '/gallery65.jpeg',
                            '/gallery60.jpeg',
                            '/gallery55.jpeg',
                            '/gallery48.jpeg',
                            '/gallery46.jpeg'
                        ]} />
                        <ImagesRow rowIndex={3} images={[
                            '/gallery44.jpeg',
                            '/gallery29.jpeg',
                            '/gallery30.jpeg',
                            '/gallery26.jpeg',
                            '/gallery23.jpeg',
                            '/gallery17.jpeg'
                        ]} />
                        <ImagesRow rowIndex={4} images={[
                            '/gallery15.jpeg',
                            '/gallery16.jpeg',
                            '/gallery11.jpeg',
                            '/gallery9.jpeg',
                            '/gallery5.jpeg',
                            '/gallery6.jpeg'
                        ]} />
                    </Container>
                </div>
                <PortfolioFooter bgColor='#002e1d' color='#e2e391' />
            </Page>
        )
    }
}