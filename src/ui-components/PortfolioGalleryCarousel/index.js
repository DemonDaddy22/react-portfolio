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
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://fullhdpictures.org/wp-content/uploads/2019/09/Desktop-Wallpapers.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.itl.cat/pics/b/37/379513_hd-wallpapers-for-desktop.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wallpaperplay.com/walls/full/c/4/f/30906.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://fullhdpictures.org/wp-content/uploads/2019/09/Desktop-Wallpapers.jpg"
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.itl.cat/pics/b/37/379513_hd-wallpapers-for-desktop.jpg"
                        alt="Fifth slide"
                    />
                </Carousel.Item>
            </Carousel>
        );
    }
}
