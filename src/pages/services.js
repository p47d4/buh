import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';

const services = () => {
  return (

    <>
        <Header />

        <section id="services" className="services">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Services</h2>
                <h3>Check Our <span>Services</span></h3>
                <p>We offer a vast range of 
                    Clinical, Diagnostics, Laboratory, Motuary, and Interventional services. 
                    Find out more about our services below.</p>
                </div>

                <div className="row">
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                    <div className="icon-box">
                    <div className="icon"><i className="bx bxl-dribbble"></i></div>
                    <h4><a href="">Clinical Services</a></h4>
                    <p>We house some of the best clinician in the country to
                        take care of your needs.
                    </p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                    <div className="icon-box">
                    <div className="icon"><i className="bx bx-file"></i></div>
                    <h4><a href="">Laboratory Services</a></h4>
                    <p>We have some of the best biomedical equipements found globally
                        that can produce accurate results for all procedures.
                    </p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                    <div className="icon-box">
                    <div className="icon"><i className="bx bx-tachometer"></i></div>
                    <h4><a href="">Diagnostic Services</a></h4>
                    <p>We house some of the best diagnosticians in 
                        country to take care of your needs.</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                    <div className="icon-box">
                    <div className="icon"><i className="bx bx-world"></i></div>
                    <h4><a href="">Interventional Services</a></h4>
                    <p>We provide top of the line interventional care procedures
                        to help our patients with thier indvidual needs.
                    </p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
                    <div className="icon-box">
                    <div className="icon"><i className="bx bx-slideshow"></i></div>
                    <h4><a href="">Telemedicine</a></h4>
                    <p>We have provided the necessary infrasture withinh the hospital
                        to allow for digital medicine dipspensation to our customers.
                    </p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                    <div className="icon-box">
                    <div className="icon"><i className="bx bx-arch"></i></div>
                    <h4><a href="">Motuary Services</a></h4>
                    <p>We provide top of the line storage facilities and embalment procedures for our dearly departed.
                    </p>
                    </div>
                </div>

                </div>

            </div>
        </section>

        <Footer />
    </>

    )
}

export default services