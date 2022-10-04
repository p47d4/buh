import React from 'react'
import { Carousel } from 'react-bootstrap'

const HeroSlider = () => {
    return (
        <>


            
    
        
         <Carousel>
                <Carousel.Item interval={3000}>
                    
                    <img 
                        className="d-block w-100"
                        src="assets/img/buh/1.jpg"
                        alt="First slide"
                        height='800px'
                        filter='brightness(50%)'
                    />
                    <Carousel.Caption>
                        <h1>Welcome to <span>Baze University Hospital</span></h1>
                        <div className="mx-4 row">
                            
                            <a href="/patient/register"className="btn btn-outline-light col">Register</a>
                            <a href="https://www.youtube.com/watch?v=vunzMowSQAQ" className="btn btn-outline-info col" target="_blank"rel="noreferrer">Watch Video</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="assets/img/buh/2.jpg"
                        alt="Second slide"
                        height='800px'
                    />
                    <Carousel.Caption>
                        <h1>Welcome to <span>Baze University Hospital</span></h1>
                        <div className="mx-4 row">
                            <a href="/patient/register"className="btn btn-outline-light col">Register</a>
                            <a href="https://www.youtube.com/watch?v=vunzMowSQAQ" className="btn btn-outline-info col" target="_blank">Watch Video</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 

        
            


        </>
    )
}

export default HeroSlider

