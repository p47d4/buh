import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';

const Contact = () => {
  return (
    <>
      <Header />
        
      <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <h3><span>Contact Us</span></h3>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map"></i>
              <h3>Our Address</h3>
              <p>Plot 606 Cadastral Zone,
                  Behind National Judicial Institute,
                  Abuja, Nigeria.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <p>info@bazeuniversityhospital.com</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p>+234 813 376 9658</p>
            </div>
          </div>

        </div>
        <div className="row" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-12">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
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

      <Footer/>
    </>
  )
}

export default Contact