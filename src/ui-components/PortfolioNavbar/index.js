import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import './index.css';

export default class PortfolioNavbar extends React.Component {

    render = () => {
        return (
            <Navbar className='pd-5' expand='md' variant={this.props.variant}>
                <Navbar.Brand className='nav-title ml-2' href='/'>Shades of Demon</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' className='ml-auto' style={{ flexGrow: 'inherit' }}>
                    <Nav>
                        <Nav.Link className={`${this.props.linkColor} nav-item`} href='#link'>About</Nav.Link>
                        <Nav.Link className={`${this.props.linkColor} nav-item`} href='#link'>Projects</Nav.Link>
                        <Nav.Link className={`${this.props.linkColor} nav-item`} href='#link'>Gallery</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
