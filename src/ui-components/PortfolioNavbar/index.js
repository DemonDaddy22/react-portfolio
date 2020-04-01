import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import './index.css';

export default class PortfolioNavbar extends React.Component {

    scrollTo = () => {
        const body = document.querySelector('.body-container');
        const about = body.querySelector('#about-section');
        about.scrollIntoView({ behavior: 'smooth' });
    }

    handleUrlClick = url => e => {
        e.stopPropagation();
        window.open(url, '_self');
    }

    render = () => {
        return (
            <Navbar className='pd-5' expand='md' variant={this.props.variant}>
                <Navbar.Brand className='nav-title ml-2' href='/'>Shades of Demon</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' className='ml-auto' style={{ flexGrow: 'inherit' }}>
                    <Nav style={{ alignItems: 'flex-end' }}>
                        {this.props.page === 'home' &&
                            <div className={`${this.props.linkColor} navbar-item smoothscroll`} onClick={() => this.scrollTo()} >
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
