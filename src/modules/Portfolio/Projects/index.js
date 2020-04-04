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
                
                <ProjectRow index={1} transitionDirection='left' bgColor='#FFFFFF' color='#5638A9' imgOrder={1} contentOrder={2} title={'YelpCamp'} 
                img='https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
                content={[
                    'An interactive and responsive website that allows users to create a profile, add campgrounds or view campgrounds added by others and also interact with them by posting comments and reviews.',
                    'The UI of this project has been developed using HTML, CSS, JavaScript and back-end has been done using NodeJS, Express and MongoDB.',
                    ''
                ]} />
                
                <ProjectRow index={2} transitionDirection='right' bgColor='#5638A9' color='#FFFFFF' imgOrder={2} contentOrder={1} title={'YelpCamp'} 
                img='https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
                content={['tales better twice poem somehow never leaving forgotten pattern observe chicken neck shine silence folks eaten keep strip class clock run list scared globe', 'chapter opportunity difficulty note care believed team friend friendly cutting kitchen driver additional settlers blow gulf mostly eventually rock toy rate hide jet sand', 'tax picture tales nuts under had uncle source noted drawn heading rough me beneath stiff degree palace addition took major colony fellow moving of']} />
                
                <ProjectRow index={3} transitionDirection='left' bgColor='#FFFFFF' color='#5638A9' imgOrder={1} contentOrder={2} title={'YelpCamp'} 
                img='https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
                content={['needed thank yourself calm scared donkey noted alone simple horse heat surrounded sink wind hope worker place scientific winter kitchen thin agree connected possibly', 'nose printed thrown would mile youth aside arrow battle sudden able necessary create beneath thing sum school hidden huge forget electricity as dull gun', 'possibly few happen religious pack slowly great truck shore laid studying hunter excited doll planned another shout author rise unusual red stomach roar dry']} />
                
                <ProjectRow index={4} transitionDirection='right' bgColor='#5638A9' color='#FFFFFF' imgOrder={2} contentOrder={1} title={'YelpCamp'} 
                img='https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
                content={['general arm seems sharp such gone ate baby distant rice please bigger length suggest price doctor sense monkey grandfather dried equal temperature cross mathematics', 'giving slave excitement triangle begun damage studying thank brick them sign nervous full music gate now ear quiet grow syllable neighborhood page arrow bend', 'car drew zoo sure apartment share stopped city wood changing lesson master mission win golden system point shallow hide deer cup hearing medicine finish']} />
                
                <ProjectRow index={5} transitionDirection='left' bgColor='#FFFFFF' color='#5638A9' imgOrder={1} contentOrder={2} title={'YelpCamp'} 
                img='https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
                content={['belong parts four prove popular something wing facing run next topic diagram purpose review toward search develop brass cave policeman breakfast news inside gradually', 'air plastic else tail thou teeth beat helpful lose trail statement express knew gone making drop belt strike plan train available fact string willing', 'due dress they modern back affect making gulf cowboy anywhere cause entire larger wherever camera door product whatever wonderful announced instrument did trade industrial']} />
                
                <ProjectRow index={6} transitionDirection='right' bgColor='#5638A9' color='#FFFFFF' imgOrder={2} contentOrder={1} title={'YelpCamp'} 
                img='https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
                content={['shop discussion recall however several herd effort tropical why box student shall noise buy north doubt dig chance represent separate support certain time size', 'outline immediately thought red shape warm worker since right jar want mission weight brown whether aware border sheet bean plain outer using bottle find', 'tone pot flew opinion beneath dream pattern alphabet like tax driving earn dead mirror fort minute upper shade mice law teacher any finally late']} />

            </Page>
        );
    }
}