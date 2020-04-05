import React from 'react';

import './index.css';
import { Container, Row } from 'react-bootstrap';

export default class ProjectRow extends React.Component {

    render = () => {
        return (
            <div id={`row-${this.props.index}`} style={{ backgroundColor: this.props.bgColor, color: this.props.color }} className='project-row'>
                <Container>
                    <Row style={{marginBottom: '6rem'}} className='align-items-center'>
                        <div className={`my-5 col-sm-12 col-md-5 order-2 order-md-${this.props.imgOrder}`}>
                            <img src={this.props.img} alt={this.props.title.toLowerCase()} className='d-block mx-auto img-fluid project-img' />
                        </div>
                        <div className={`col-sm-12 col-md-7 text-center order-1 order-md-${this.props.contentOrder}`}>
                            <Row className='justify-content-center'>
                                <div className='col-10'>
                                    <div className='project-title mt-2 my-4'>{this.props.title}</div>
                                    <ul className='project-content text-left'>
                                    {this.props.content.map((entry, index) => {
                                        return (
                                            <li key={`content-${index}`}>{entry}</li>
                                        )
                                    })}
                                    </ul>
                                </div>
                            </Row>
                        </div>
                    </Row>
                </Container>
                { this.props.index !==6 && <div className='text-center'><i onClick={() => this.props.scrollTo(`#row-${this.props.index+1}`)} className='fas fa-chevron-down next-section-btn'></i></div> }
            </div>
        );
    }
}