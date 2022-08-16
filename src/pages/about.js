import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'


const About = () => {
  return (

    <>
        <Header />

        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>About Us</h2>
              <ol>
                {/* <li><Link to="/">Home</Link></li> */}
                <li><a href="/">Home</a></li>
                <li>About Us</li>
              </ol>
            </div>
          </div>
        </section>

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

        <section className='section-bg'>
          <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
							<div className="row : center-md">
								<div className="col-md-12">
									<div className="row">
                    <h2>Our Values</h2><br /><br /><br />
											<div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
												<div className="leader-testimonial">
													
													<div className="leader-testimonial__content : text--14">
														<div className="leader-testimonial__title : text--uppercase : text--cgp-green-1 : text--bd">
															<h3>EXCELLENCE</h3>
														</div>
														<div className="leader-testimonial__text : text--gray"><p>Surpassing current benchmarks constantly by continually challenging our ability and skills to take theorganization to greater heights</p></div>
														<div className="leader-testimonial__name : text--12 : text--uppercase"><strong>ALBERT EINSTEIN</strong></div>
													</div>
												</div>
											</div>

											<div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
												<div className="leader-testimonial">
													
													<div className="leader-testimonial__content : text--14">
														<div className="leader-testimonial__title : text--uppercase : text--cgp-green-1 : text--bd">
															<h3>RESPECT</h3>
														</div>
														<div className="leader-testimonial__text : text--gray"><p>Treating people with utmost dignity, valuing their contributions and fostering a culture that allow each individual to rise to their fullest potential</p></div>
														<div className="leader-testimonial__name : text--12 : text--uppercase"><strong>MAHATMA GANDHI</strong></div>
													</div>
												</div>
											</div><hr />
										
											<div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
												<div className="leader-testimonial">
													
													<div className="leader-testimonial__content : text--14">
														<div className="leader-testimonial__title : text--uppercase : text--cgp-green-1 : text--bd">
															<h3>COMPASSION</h3>
														</div>
														<div className="leader-testimonial__text : text--gray"><p>Going beyond boundaries with empathy and care</p></div>
														<div className="leader-testimonial__name : text--12 : text--uppercase"><strong>MOTHER TERESA</strong></div>
													</div>
												</div>
											</div>
										
											<div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
												<div className="leader-testimonial">
													
													<div className="leader-testimonial__content : text--14">
														<div className="leader-testimonial__title : text--uppercase : text--cgp-green-1 : text--bd">
															<h3>PASSION</h3>
														</div>
														<div className="leader-testimonial__text : text--gray"><p>Going the extra mile willingly, with a complete sense of belongingness and purpose while adding value to our stakeholders</p></div>
														<div className="leader-testimonial__name : text--12 : text--uppercase"><strong>STEVE JOBS</strong></div>
													</div>
												</div>
											</div><hr />
										
											<div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
												<div className="leader-testimonial">
													
													<div className="leader-testimonial__content : text--14">
														<div className="leader-testimonial__title : text--uppercase : text--cgp-green-1 : text--bd">
															<h3>INTEGRITY</h3>
														</div>
														<div className="leader-testimonial__text : text--gray"><p>Doing the right thing without any compromises and embracing a higher standard of conduct</p></div>
														<div className="leader-testimonial__name : text--12 : text--uppercase"><strong>NELSON MANDELA</strong></div>
													</div>
												</div>
											</div>
										
											<div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
												<div className="leader-testimonial">
													
													<div className="leader-testimonial__content : text--14">
														<div className="leader-testimonial__title : text--uppercase : text--cgp-green-1 : text--bd">
															<h3>UNITY</h3>
														</div>
														<div className="leader-testimonial__text : text--gray"><p>Harnessing the power of synergy and engaging people for exponential performance and results</p></div>
														<div className="leader-testimonial__name : text--12 : text--uppercase"><strong>H.H. SHEIKH ZAYED BIN SULTAN AL NAHYAN</strong></div>
													</div>
												</div>
											</div><hr />
										
									</div>
								</div>
							</div>
						</div>
        </section>

        <Footer />
    </>
  )
}

export default About