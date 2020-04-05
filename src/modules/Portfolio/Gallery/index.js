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
                                    I hope you enjoy the pictures I clicked over time. For more images and inspiration, visit my <span className='inline-link-gallery' onClick={this.handleUrlClick('https://www.instagram.com/shades_of_demon/')}>Instagram profile</span>.
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
                            'https://images.unsplash.com/photo-1585240058938-871b99a43da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                            'https://images.unsplash.com/photo-1495420378468-78588a508652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                            'https://images.unsplash.com/photo-1533150783171-ce47d5c2b6ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                        ]} />
                        <ImagesRow rowIndex={1} images={[
                            'https://images.unsplash.com/photo-1585240058938-871b99a43da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                            'https://images.unsplash.com/photo-1495420378468-78588a508652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                            'https://images.unsplash.com/photo-1533150783171-ce47d5c2b6ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                        ]} />
                        <ImagesRow rowIndex={2} images={[
                            'https://images.unsplash.com/photo-1585240058938-871b99a43da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                            'https://images.unsplash.com/photo-1495420378468-78588a508652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                            'https://images.unsplash.com/photo-1533150783171-ce47d5c2b6ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                        ]} />
                        <ImagesRow rowIndex={3} images={[
                            'https://images.unsplash.com/photo-1585240058938-871b99a43da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                            'https://images.unsplash.com/photo-1495420378468-78588a508652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                            'https://images.unsplash.com/photo-1533150783171-ce47d5c2b6ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                        ]} />
                        <ImagesRow rowIndex={4} images={[
                            'https://images.unsplash.com/photo-1585240058938-871b99a43da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                            'https://images.unsplash.com/photo-1495420378468-78588a508652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                            'https://images.unsplash.com/photo-1533150783171-ce47d5c2b6ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                        ]} />
                        <ImagesRow rowIndex={5} images={[
                            'https://images.unsplash.com/photo-1585240058938-871b99a43da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                            'https://images.unsplash.com/photo-1495420378468-78588a508652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                            'https://images.unsplash.com/photo-1533150783171-ce47d5c2b6ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                        ]} />
                        <ImagesRow rowIndex={6} images={[
                            'https://images.unsplash.com/photo-1585240058938-871b99a43da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                            'https://images.unsplash.com/photo-1495420378468-78588a508652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                            'https://images.unsplash.com/photo-1533150783171-ce47d5c2b6ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                        ]} />
                        <ImagesRow rowIndex={7} images={[
                            'https://images.unsplash.com/photo-1585240058938-871b99a43da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                            'https://images.unsplash.com/photo-1495420378468-78588a508652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                            'https://images.unsplash.com/photo-1533150783171-ce47d5c2b6ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                        ]} />
                        <ImagesRow rowIndex={8} images={[
                            'https://images.unsplash.com/photo-1585240058938-871b99a43da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                            'https://images.unsplash.com/photo-1495420378468-78588a508652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                            'https://images.unsplash.com/photo-1533150783171-ce47d5c2b6ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                        ]} />
                        <ImagesRow rowIndex={9} images={[
                            'https://images.unsplash.com/photo-1585240058938-871b99a43da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                            'https://images.unsplash.com/photo-1495420378468-78588a508652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                            'https://images.unsplash.com/photo-1533150783171-ce47d5c2b6ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                        ]} />
                    </Container>
                </div>
                <PortfolioFooter bgColor='#002e1d' color='#e2e391' />
            </Page>
        )
    }
}