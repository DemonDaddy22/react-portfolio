import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';

export default class App extends React.Component {

    render = () => {
        return (
            <div className='body-bg'>
                <div className='body-container'>
                    <Navbar className='navbar-bg navbar-top pd-5' expand="md" variant='dark'>
                        <Navbar.Brand href="#home">SHADES OF DEMON</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className='ml-auto' style={{ flexGrow: 'inherit' }}>
                            <Nav>
                                <Nav.Link href="#link">About</Nav.Link>
                                <Nav.Link href="#link">Projects</Nav.Link>
                                <Nav.Link href="#link">Gallery</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}
