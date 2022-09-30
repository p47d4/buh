import React from 'react'
import { Carousel } from 'react-bootstrap'

const HeroSlider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="assets/img/buh/home-slider/buh9.jpeg"
                        alt="First slide"
                        height='800px'
                    />
                    <Carousel.Caption>
                        <h1>Welcome to <span>Baze University Hospital</span></h1>
                        <div className="mx-4 row">
                            <a href="/patient/register"className="btn btn-secondary col">Register</a>
                            <a href="https://www.youtube.com/watch?v=vunzMowSQAQ" className="btn btn-success col" target="_blank">Watch Video</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="assets/img/buh/home-slider/buh10.jpeg"
                        alt="Second slide"
                        height='800px'
                    />
                    <Carousel.Caption>
                        <h1>Welcome to <span>Baze University Hospital</span></h1>
                        <div className="mx-4 row">
                            <a href="/patient/register"className="btn btn-secondary col">Register</a>
                            <a href="https://www.youtube.com/watch?v=vunzMowSQAQ" className="btn btn-success col" target="_blank">Watch Video</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="assets/img/buh/home-slider/buh13.jpeg"
                        alt="Third slide"
                        height='800px'
                    />
                    <Carousel.Caption>
                        <h1>Welcome to <span>Baze University Hospital</span></h1>
                        <div className="mx-4 row">
                            <a href="/patient/register"className="btn btn-secondary col">Register</a>
                            <a href="https://www.youtube.com/watch?v=vunzMowSQAQ" className="btn btn-success col" target="_blank">Watch Video</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="assets/img/buh/1.jpg"
                        alt="Fourth slide"
                        height='800px'
                    />
                    <Carousel.Caption>
                        <h1>Welcome to <span>Baze University Hospital</span></h1>
                        <div className="mx-4 row">
                            <a href="/patient/register"className="btn btn-secondary col">Register</a>
                            <a href="https://www.youtube.com/watch?v=vunzMowSQAQ" className="btn btn-success col" target="_blank">Watch Video</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="assets/img/buh/2.jpg"
                        alt="Fifth slide"
                        height='800px'
                    />
                    <Carousel.Caption>
                        <h1>Welcome to <span>Baze University Hospital</span></h1>
                        <div className="mx-4 row">
                            <a href="/patient/register"className="btn btn-secondary col">Register</a>
                            <a href="https://www.youtube.com/watch?v=vunzMowSQAQ" className="btn btn-success col" target="_blank">Watch Video</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="assets/img/buh/home-slider/buh18.jpeg"
                        alt="Sixth slide"
                        height='800px'
                    />
                    <Carousel.Caption>
                        <h1>Welcome to <span>Baze University Hospital</span></h1>
                        <div className="mx-4 row">
                            <a href="/patient/register"className="btn btn-secondary col">Register</a>
                            <a href="https://www.youtube.com/watch?v=vunzMowSQAQ" className="btn btn-success col" target="_blank">Watch Video</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="assets/img/buh/home-slider/buh21.jpeg"
                        alt="Seventh slide"
                        height='800px'
                    />
                    <Carousel.Caption>
                        <h1>Welcome to <span>Baze University Hospital</span></h1>
                        <div className="mx-4 row">
                            <a href="/patient/register"className="btn btn-secondary col">Register</a>
                            <a href="https://www.youtube.com/watch?v=vunzMowSQAQ" className="btn btn-success col" target="_blank">Watch Video</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default HeroSlider