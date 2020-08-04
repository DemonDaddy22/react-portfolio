import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import './index.css';
import title from '../../images/title2.png';

export default class PortfolioNavbar extends React.Component {

    scrollTo = sectionId => {
        const body = document.querySelector('.body-container');
        const section = body.querySelector(sectionId);
        setTimeout(section.scrollIntoView({ behavior: 'smooth' }), 500);
    }

    handleUrlClick = url => e => {
        e.stopPropagation();
        window.open(url, '_self');
    }

    render = () => {
        return (
            <Navbar className='pd-5' expand='md' variant={this.props.variant}>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Navbar.Brand className='ml-2' href='/'>
                        <img className='nav-title' src={title} alt='shades-of-demon-title' />
                    </Navbar.Brand>
                    <Nav className='ml-auto'>
                        {this.props.page === 'home' &&
                            <div className={`${this.props.linkColor} navbar-item`} onClick={() => this.scrollTo('#about-section')} >
                                About
                            </div>}
                        <div className={`${this.props.linkColor} navbar-item`} onClick={this.handleUrlClick('/projects')}>Projects</div>
                        <div className={`${this.props.linkColor} navbar-item`} onClick={this.handleUrlClick('/gallery')}>Gallery</div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
