import React from 'react';

import './index.css';
import { Carousel } from 'react-bootstrap';

export default class PortfolioGalleryCarousel extends React.Component {

    state = {
        index: 0
    }

    handleSelectIndex = (selectedIndex, e) => this.setState({ index: selectedIndex });

    render = () => {
        return (
            <Carousel className='gallery-slideshow' activeIndex={this.state.index} onSelect={this.handleSelectIndex} controls={false} indicators={false} interval={this.props.interval} pause={false} slide={true}>
                {this.props.images.map((entry, index) => <Carousel.Item>
                    <img
                        className='d-block w-100 gallery-carousel-img'
                        src={entry}
                        alt={`slide-${index}`}
                    />
                </Carousel.Item>)}
            </Carousel>
        );
    }
}
