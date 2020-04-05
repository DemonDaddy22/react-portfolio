import React from 'react';

import './index.css';

export default class PortfolioFooter extends React.Component {

    scrollTo = () => {
        const body = document.querySelector('.body-container');
        body.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    handleUrlClick = url => e => {
        e.stopPropagation();
        window.open(url);
    }

    render = () => {
        return (
            <div style={{backgroundColor: this.props.bgColor}} className='footer-container'>
                <div style={{backgroundColor: this.props.color}} className='footer-navigate'>
                    <i onClick={() => this.scrollTo()} style={{color: this.props.bgColor}} className="fas fa-arrow-alt-circle-up navigate-top"></i>
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
                                    <a style={{color: this.props.color}} href='mailto:guptarohan1.rg@gmail.com'>guptarohan1.rg@gmail.com</a>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-2 footer-col'>
                                <div className='footer-header'>
                                    <div className='logo footer-logo' onClick={this.handleUrlClick('https://github.com/DemonDaddy22/')}><i className="fab fa-github"></i></div>
                                    <div className='logo footer-logo' onClick={this.handleUrlClick('https://www.linkedin.com/in/rohangupta22/')}><i class="fab fa-linkedin-in"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}