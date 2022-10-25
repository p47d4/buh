import React from 'react'
import { Carousel } from 'react-bootstrap'

const HeroSlider = () => {
    return (
        <>


            
    
        
         <Carousel>
                <Carousel.Item interval={3000}>
                    
                    <img 
                        className="d-block w-100"
                        src="assets/img/home-slider/buhHERO1.jpeg"
                        alt="First slide"
                        height='800px'
                        filter='brightness(50%)'
                    />
                    <Carousel.Caption>
                        <h4>Welcome to </h4>
                        <h1><span>Baze University Hospital</span></h1> 
                        <div className="mx-4 row">
                            
                            <a href="/patient/register"className="btn btn-outline-light col rounded-pill ">Register</a>
                            <a href="https://www.youtube.com/watch?v=vunzMowSQAQ" className="btn btn-outline-info col rounded-pill" target="_blank"rel="noreferrer">Watch Video</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    
                    <img 
                        className="d-block w-100"
                        src="assets/img/home-slider/buhHERO3.jpeg"
                        alt="First slide"
                        height='700px'
                        filter='brightness(50%)'
                    />
                    <Carousel.Caption>
                        <h4>Welcome to </h4>
                        <h1><span>Baze University Hospital</span></h1>
                        <div className="mx-4 row">
                            <a href="/patient/register"className="btn btn-outline-light col rounded-pill">Register</a>
                            <a href="https://www.youtube.com/watch?v=vunzMowSQAQ" className="btn btn-outline-info col rounded-pill" target="_blank"rel="noreferrer">Watch Video</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            

                <Carousel.Item interval={3000}>
                    
                    <img 
                        className="d-block w-100"
                        src="assets/img/home-slider/buhHERO2.jpeg"
                        alt="First slide"
                        height='800px'
                        filter='brightness(50%)'
                    />
                    <Carousel.Caption>
                        <h4>Welcome to </h4>
                        <h1><span>Baze University Hospital</span></h1>
                        <div className="mx-4 row">
                            <a href="/patient/register"className="btn btn-outline-light col rounded-pill">Register</a>
                            <a href="https://www.youtube.com/watch?v=vunzMowSQAQ" className="btn btn-outline-info col rounded-pill" target="_blank"rel="noreferrer">Watch Video</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    
                    <img 
                        className="d-block w-100"
                        src="assets/img/home-slider/buhHERO4.jpeg"
                        alt="First slide"
                        height='800px'
                        filter='brightness(50%)'
                    />
                    <Carousel.Caption>
                        <h4>Welcome to </h4>
                        <h1><span>Baze University Hospital</span></h1>
                        <div className="mx-4 row">
                            
                            <a href="/patient/register"className="btn btn-outline-light col rounded-pill">Register</a>
                            <a href="https://www.youtube.com/watch?v=vunzMowSQAQ" className="btn btn-outline-info col rounded-pill" target="_blank"rel="noreferrer">Watch Video</a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 

        
            


        </>
    )
}

export default HeroSlider

