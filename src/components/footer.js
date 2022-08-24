import React from 'react'
import { Link } from 'react-router-dom';

const footer = () => {
  return (
    
    <>
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 footer-contact">
                        <h3>Baze University Hospital<span>.</span></h3>
                            <p>
                            Plot 606 Cadastral Zone, <br />
                            Behind National Judicial Institute,<br />
                            Abuja, Nigeria.<br /><br />
                                <strong>Phone:</strong> +234 813 376 9658<br/>
                                <strong>Email:</strong> info@bazeuniversityhospital.com<br/>
                            </p>
                        </div>

                        <div className="col-lg-4 col-md-4 footer-contact">
                            {/* <h4>For Staff</h4>
                            <div className="footer-links mt-3">
                                <a href="https://staff.bazeuniversityhospital.com/">Staff Login</a>
                            </div> */}
                            <div className="footer-links mt-3">
                            <h4>Quick Links</h4>
                                <Link to="/services">Services</Link><br/>
                                <Link to="/about">About Baze University Hospital</Link><br/>
                                <Link to="/contact">Map and Contact Information</Link>
                                {/* <a href="#" className="facebook">Symptom Checker **</a> */}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 footer-links">
                            <h4>Our Social Networks</h4>
                            <div className="social-links mt-3">
                                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                            </div>
                            {/* <div className="footer-links mt-3">
                                <a href="#" className="twitter">Appointment</a>
                                <a href="#" className="facebook">Staff Login</a>
                            </div>
                            <div className="footer-links mt-3">
                                <a href="#" className="facebook">Patient Login</a>
                                <a href="#" className="twitter">Doctors</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-4">
            <div className="copyright">
                &copy; Copyright <strong><span>Baze University Hospital</span></strong>. All Rights Reserved
            </div>
            
            </div>
            </footer>
    </>

  )
}
export default footer