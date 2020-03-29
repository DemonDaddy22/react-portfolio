import React from 'react';

import './index.css';
import { Carousel } from 'react-bootstrap';

export default class PortfolioCarousel extends React.Component {

    state = {
        index: 0
    }

    handleSelectIndex = (selectedIndex, e) => this.setState({ index: selectedIndex });

    render = () => {
        return (
            <Carousel activeIndex={this.state.index} onSelect={this.handleSelectIndex} >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://fullhdpictures.org/wp-content/uploads/2019/09/Desktop-Wallpapers.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.itl.cat/pics/b/37/379513_hd-wallpapers-for-desktop.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wallpaperplay.com/walls/full/c/4/f/30906.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://fullhdpictures.org/wp-content/uploads/2019/09/Desktop-Wallpapers.jpg"
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.itl.cat/pics/b/37/379513_hd-wallpapers-for-desktop.jpg"
                        alt="Fifth slide"
                    />

                    <Carousel.Caption>
                        <h3>Fifth slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wallpaperplay.com/walls/full/c/4/f/30906.jpg"
                        alt="Sixth slide"
                    />

                    <Carousel.Caption>
                        <h3>Sixth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
