import React from 'react';

import './index.css';
import { Container, Row, Col } from 'react-bootstrap';

export default class PortfolioFooter extends React.Component {

    render = () => {
        return (
            <div style={{backgroundColor: this.props.color}} className='footer-container'>
                <div className='footer-navigate'>
                    <i style={{color: this.props.color}} className="fas fa-arrow-alt-circle-up navigate-top"></i>
                </div>
                <div className='footer-content'>
                    <div className='container' style={{height: '100%'}}>
                        <div className='row justify-content-end' style={{height: '100%'}}>
                            <div className='col-sm-12 col-md-2 footer-col'>
                                <div className='footer-brand'>shades of demon</div>
                                <div className='footer-copyright'>&copy; <span style={{fontSize: 12}}>2020</span></div>
                            </div>
                            <div className='col-md-5'></div>
                            <div className='col-sm-12 col-md-3 footer-col'>
                                <div className='footer-header'>Want to get in touch?</div>
                                <div className='footer-email'>
                                    <a href='mailto:guptarohan1.rg@gmail.com'>guptarohan1.rg@gmail.com</a>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-2 footer-col'>
                                <div className='footer-header'>
                                    <div className='logo footer-logo'><i className="fab fa-github"></i></div>
                                    <div className='logo footer-logo'><i class="fab fa-linkedin-in"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}