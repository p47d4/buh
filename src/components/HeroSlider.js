import React from 'react'
import { Carousel } from 'react-bootstrap'

const HeroSlider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="assets/img/bg-1.jpg"
                        alt="First slide"
                        height='900px'
                    />
                    <Carousel.Caption>
                        <h1>Welcome to <span>Baze University Hospital</span></h1>
                        <div className="mx-0 row">
                            <a href="/patient/register"className="btn btn-secondary col">Register</a>
                            <a href="https://www.youtube.com/watch?v=vunzMowSQAQ" className="btn btn-success col" target="_blank">Watch Video</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="assets/img/bg-2.jpg"
                        alt="Second slide"
                        height='900px'
                    />
                    <Carousel.Caption>
                        <h1>Welcome to <span>Baze University Hospital</span></h1>
                        <div className="mx-0 row">
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