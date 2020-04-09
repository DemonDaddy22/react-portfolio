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
            <Carousel indicators={false} activeIndex={this.state.index} onSelect={this.handleSelectIndex} >
                <Carousel.Item>
                    <img
                        className="d-block w-100 portfolio-carousel-image"
                        src="https://images.unsplash.com/photo-1517823382935-51bfcb0ec6bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                        alt="yelpcamp"
                    />
                    <Carousel.Caption className='text-white'>
                        <h3>YelpCamp</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 portfolio-carousel-image"
                        src="https://boost-social-media.com/wp-content/uploads/2019/11/most-Instagram-followers.jpg"
                        alt="insta follower"
                    />

                    <Carousel.Caption className='text-dark'>
                        <h3>Insta-Follower</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 portfolio-carousel-image"
                        src="https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                        alt="splashmywall"
                    />

                    <Carousel.Caption className='text-white'>
                        <h3>SplashMyWall</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 portfolio-carousel-image"
                        src="https://images.unsplash.com/photo-1582079768266-e65af1ad8d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="daily news"
                    />
                    <Carousel.Caption className='text-white'>
                        <h3>Daily News</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 portfolio-carousel-image"
                        src="https://images.unsplash.com/photo-1571156425562-12341e7c9aae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                        alt="hangman"
                    />

                    <Carousel.Caption className='text-white'>
                        <h3>HangMan</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 portfolio-carousel-image"
                        src="https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="color picker"
                    />

                    <Carousel.Caption className='text-white'>
                        <h3>Color-picker</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
