import React from 'react';

import './index.css';
import Page from '../../../ui-components/Page';
import PortfolioNavbar from '../../../ui-components/PortfolioNavbar';
import { Row, Col } from 'react-bootstrap';
import ProjectRow from './components/ProjectRow';

export default class extends React.Component {

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
                    <div style={{ height: '4rem' }}></div>
                    <div className='d-none d-md-block' style={{ height: '3rem' }}></div>
                    <div className='text-center text-white' style={{ marginTop: '4rem' }}><i onClick={() => this.scrollTo('#row-1')} className='fas fa-chevron-down next-section-btn'></i></div>
                </div>

                <ProjectRow scrollTo={this.scrollTo} index={1} transitionDirection='left' bgColor='#FFFFFF' color='#5e1f87' imgOrder={1} contentOrder={2} title={'YelpCamp'}
                    img='https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
                    content={[
                        'An interactive and responsive website that allows users to create a profile, add campgrounds or view campgrounds added by others and also interact with them by posting comments and reviews.',
                        'The UI of this project has been developed using HTML, CSS, JavaScript and back-end has been done using NodeJS, Express and MongoDB.',
                    ]} />

                <ProjectRow scrollTo={this.scrollTo} index={2} transitionDirection='right' bgColor='#5e1f87' color='#FFFFFF' imgOrder={2} contentOrder={1} title={'Insta-Follower'}
                    img='https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
                    content={[
                        'An automated script to find out the list of Instagram accounts that are not following back a user.',
                        'The web browser automation is achieved using Python and Selenium framework.',
                        'This script is really useful for the Instagram addicts who are obsessed with their profiles and followers!'
                    ]} />

                <ProjectRow scrollTo={this.scrollTo} index={3} transitionDirection='left' bgColor='#FFFFFF' color='#2d7a6d' imgOrder={1} contentOrder={2} title={'SplashMyWall'}
                    img='https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
                    content={[
                        'A script which allows users to choose a folder and create a slideshow of desktop wallpapers out of the images contained in the specified folder.',
                        'The user can also choose to get new high-resolution images of desired category from Unsplash and get a slideshow made from them within seconds.',
                        'This script has been developed using Python and Unsplash API.'
                    ]} />

                <ProjectRow scrollTo={this.scrollTo} index={4} transitionDirection='right' bgColor='#2d7a6d' color='#FFFFFF' imgOrder={2} contentOrder={1} title={'Daily News'}
                    img='https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
                    content={[
                        'A responsive website which fetches latest news headlines for various categories and keeps you up-to-date on-the-go!',
                        'The front-end of this application has been developed using HTML, CSS and JavaScript and the back-end has been done using NodeJS, Express and MongoDB.'
                    ]} />

                <ProjectRow scrollTo={this.scrollTo} index={5} transitionDirection='left' bgColor='#FFFFFF' color='#7a173a' imgOrder={1} contentOrder={2} title={'HangMan'}
                    img='https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
                    content={[
                        'A console based game which allows users to guess alphabets in order to identify a random word.',
                        'It is a fun way to enhance your vocabulary as meaning of the word is scrapped from Dictionary.com when user is able to correctly guess the word, and the word bank increases everyday when the game is run.',
                        'This application has been developed using Python and BeautifulSoup library.'
                    ]} />

                <ProjectRow index={6} transitionDirection='right' bgColor='#7a173a' color='#FFFFFF' imgOrder={2} contentOrder={1} title={'Color-picker'}
                    img='https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
                    content={[
                        'An app which lets you choose different colors and their shades from various color palettes.',
                        'User can also create new palettes by choosing unique colors and rearranging them as per their liking.',
                        'The technologies used in making this project are JavaScript, ReactJS and Material UI.'
                    ]} />

            </Page>
        );
    }
}