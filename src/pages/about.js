import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const About = () => {
  return (
    <>
        <Header/>
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>About</h2>
              <h3>Welcome to <span>Baze University Hospital</span></h3>
            </div>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                <img src="assets/img/buh/reception.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
                <p className="fst-italic">
                        Baze University Hospital was commissioned on 23rd October, 2021 by the President of Nigeria Muhammed Buhari GCFR. 
                        BUH provides quality healthcare services to healthcare users; serves as a center for research, 
                        innovation and training of healthcare professionals.
                </p>
                <ul>
                  <li>
                    <i className="bx bx-target-lock"></i>
                    <div>
                      <h5>Our Mission</h5>
                      <p>To be the trusted leader in quality healthcare</p>
                    </div>
                  </li>
                  <li>
                    <i className="bx bx-bulb"></i>
                    <div>
                      <h5>Our Vision</h5>
                      <p>We provide hope and contribute to health and well-being through the best integrated clinical practice, teaching and research.</p>
                    </div>
                  </li>
                </ul>
                <p>
                      BUH is a 200 bed capacity hospital equipped with cutting edge technology and run by expert medical and support- professionals. 
                        It is a top notch healthcare provider in Nigeria.
                </p>
              </div>
            </div>

          </div>
        </section>
		
		<section className="contact">
        <div className="container">

        <div className="section-title">
          <h2>Values</h2>
          <h3><span>Our Values</span></h3>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-4">
            <div className="info-box mb-4">
              <h3>EXCELLENCE</h3>
              <p>Surpassing current benchmarks constantly by continually challenging our ability and skills to take theorganization to greater heights</p><br/>
			  <h6>- ALBERT EINSTEIN -</h6>
			</div>
          </div>

          <div className="col-lg-4">
            <div className="info-box mb-4">
              <h3>COMPASSION</h3>
              <p>Going beyond boundaries with empathy and care</p><br/>
			  <h6>- MOTHER TERESA -</h6>
			</div>
          </div>

		  <div className="col-lg-4">
            <div className="info-box mb-4">
              <h3>INTEGRITY</h3>
              <p>Doing the right thing without any compromises and embracing a higher standard of conduct</p><br/>
			  <h6>- NELSON MANDELA -</h6>
			</div>
          </div>

        </div>

		<div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-4">
            <div className="info-box mb-4">
              <h3>RESPECT</h3>
              <p>Treating people with utmost dignity, valuing their contributions and fostering a culture that allow each individual to rise to their fullest potential</p><br/>
			  <h6>- MAHATMA GANDHI -</h6>
			</div>
          </div>

          <div className="col-lg-4">
            <div className="info-box mb-4">
              <h3>PASSION</h3>
              <p>Going the extra mile willingly, with a complete sense of belongingness and purpose while adding value to our stakeholders</p><br/>
			  <h6>- STEVE JOBS -</h6>
			</div>
          </div>

		  <div className="col-lg-4">
            <div className="info-box mb-4">
              <h3>UNITY</h3>
              <p>Harnessing the power of synergy and engaging people for exponential performance and results</p><br/>
			  <h6>- H.H. SHEIKH ZAYED BIN SULTAN AL NAHYAN -</h6>
			</div>
          </div>

        </div>
        {/* <div className="google-map-container"> 
         <iframe 
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.253473578433!2d7.404114499999994!3d9.006451099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e7372e355f317%3A0x7f90ec48624fd5b4!2sBaze+University!5e0!3m2!1sen!2sng!4v1463473608506" 
         width="100" 
         height="350" 
         frameborder="0" 
         style="{{ border:0 }}" 
         allowfullscreen=""
         aria-hidden="false" 
         tabIndex="0"
         />
		    </div> */}
      </div>
    </section>
        <Footer />
    </>
  )
}

export default About