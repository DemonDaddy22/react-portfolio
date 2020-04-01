import React from 'react';

import './index.css';
import Page from '../../../ui-components/Page';
import PortfolioNavbar from '../../../ui-components/PortfolioNavbar';
import { Row, Col } from 'react-bootstrap';

export default class extends React.Component {

    handleUrlClick = url => e => {
        e.stopPropagation();
        window.open(url);
    }

    render = () => {
        return (
            <Page>
                <div className='projects-navbar'>
                    <PortfolioNavbar variant='dark' linkColor='text-white' page='projects' />
                    <div className='d-none d-md-block' style={{ height: '6rem' }}></div>
                    <Row style={{ marginTop: '3rem' }}>
                        <Col md={2} />
                        <Col className='text-white' md={6}>
                            <div className='display-4 font-weight-bold text-shadow-light outline-black'>PROJECTS</div>
                            <div className='mt-5'>
                                I have worked with various technologies like Python, NodeJS, Express, ReactJS, HTML, CSS,
                                JavaScript, MySQL and MongoDB for creating numerous projects. Here is a list of some of my
                                projects. For complete code and more projects, visit my <span className='inline-link' onClick={this.handleUrlClick('https://github.com/DemonDaddy22/')}>Github profile</span>.
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* make separate component for each project row (specify colors, content, image, order at smaller screens),
                height of each row should be equal to 100%vh
                add down button to each row */}
            </Page>
        );
    }
}