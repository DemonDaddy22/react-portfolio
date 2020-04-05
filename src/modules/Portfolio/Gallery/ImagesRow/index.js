import React from 'react';

import './index.css';
import { Row, Col } from 'react-bootstrap';

export default class ImagesRow extends React.Component {

    render = () => {
        return (
            <Row>
                {this.props.images.map((entry, index) => (
                    <Col className='mb-5' key={`image-${this.props.rowIndex}-${index}`} sm={12} md={6} lg={4}>
                        <img src={entry} alt='gallery-pic' className='d-block img-fluid gallery-img' />
                    </Col>))}
            </Row>
        );
    }
}