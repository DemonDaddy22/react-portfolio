import React from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap';
import PortfolioNavbar from './ui-components/PortfolioNavbar';

export default class App extends React.Component {

    render = () => {
        return (
            <div className='body-container'>
                <div className='navbar-bg'>
                    <PortfolioNavbar variant='dark' linkColor='text-white' />
                    <div className='d-none d-md-block' style={{height: '6rem'}}></div>
                    <Row style={{ marginTop: '4rem' }}>
                        <Col md={2} />
                        <Col md={8} className='text-center text-white' >
                            <h1 className='display-4 font-weight-bold text-shadow-dark'>Hi, I'am Rohan Gupta</h1>
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
            </div>
        );
    }
}
