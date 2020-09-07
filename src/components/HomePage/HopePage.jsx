import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Carousel, index, handleSelect } from 'react-bootstrap'
import './HomePage.css';

export default function HomePage(props) {
    return (
        //  activeIndex={index} onSelect={handleSelect}
        <Carousel >
            <Carousel.Item>
                <img

                    className="d-block w-100"
                    src={("/images/IMG_8693.jpg")}
                    /* src="holder.js/800x400?text=First slide&bg=373940" */
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
                    src={("/images/IMG_8804.jpg")}
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
                    src={("/images/HomePage.jpg")}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}