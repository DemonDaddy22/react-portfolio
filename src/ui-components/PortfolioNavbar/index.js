import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import './index.css';

export default class PortfolioNavbar extends React.Component {

    scrollMore = () => {
        const body = document.querySelector('.body-container');
        const about = body.querySelector('#about');
        about.scrollIntoView({ behavior: 'smooth' });
    }

    render = () => {
        return (
            <Navbar className='pd-5' expand='md' variant={this.props.variant}>
                <Navbar.Brand className='nav-title ml-2' href='/'>Shades of Demon</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' className='ml-auto' style={{ flexGrow: 'inherit' }}>
                    <Nav>
                        {this.props.page === 'home' &&
                            <div className={`${this.props.linkColor} navbar-item smoothscroll`} onClick={() => this.scrollMore()} >
                                About
                            </div>}
                        <div className={`${this.props.linkColor} navbar-item`} >Projects</div>
                        <div className={`${this.props.linkColor} navbar-item`} >Gallery</div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
