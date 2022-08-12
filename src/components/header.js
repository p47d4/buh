import React from 'react'
import { Link } from 'react-router-dom';

const header = () => {
  return (
    
    <>
        <section id="topbar" className="d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
              <div className="contact-info d-flex align-items-center">
                  <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">info@bazeuniversityhospital.com</a></i>
                  <i className="bi bi-phone d-flex align-items-center ms-4"><span>+234 813 376 9658</span></i>
              </div>
              <div className="social-links d-none d-md-flex align-items-center">
                    <Link className="nav-link" to="/">Patient Login</Link>
                    <Link className="nav-link" to="/patient_reg">Registration</Link>
                    <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
              </div>
          </div>
        </section>
        
        <header id="header" className="d-flex align-items-center">
              <div className="container d-flex align-items-center justify-content-between">

                  <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" /></a>

                <nav id="navbar" className="navbar">
                    <ul>
                        {/* <li><Link className="nav-link active" to="/">Home</Link></li> */}
                        <li><Link className="nav-link" to="/">Home</Link></li>
                        <li><Link className="nav-link" to="/about">About</Link></li>
                        <li className="dropdown"><Link to="/media"><span>Media</span> <i className="bi bi-chevron-down"></i></Link>
                            <ul>
                                <li><Link to="/gallery">Gallery</Link></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Videos</a></li>
                                <li><a href="#">Testimonials</a></li>
                            </ul>
                        </li>
                        <li><Link className="nav-link" to="/booking">Booking An Appointment</Link></li>
                        <li className="dropdown"><Link to="/services"><span>Services</span> <i className="bi bi-chevron-down"></i></Link>
                                <ul>
                                    <li className="dropdown"><a href="#"><span>Clinical Services</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">Dental Services</a></li>
                                            <li><a href="#">Emergency</a></li>
                                            <li><a href="#">Endocrinology</a></li>
                                            <li><a href="#">Gastroenterology</a></li>
                                            <li><a href="#">General Out-Patient</a></li>
                                            <li><a href="#">Hematology</a></li>
                                            <li><a href="#">Histopathology</a></li>
                                            <li><a href="#">Internal Medicine</a></li>
                                            <li><a href="#">Microbiology</a></li>
                                            <li><a href="#">Obstetrics & Gynecology</a></li>
                                            <li><a href="#">Pathology</a></li>
                                            <li><a href="#">Pediatrics</a></li>
                                            <li><a href="#">Physiotherapy (Including Hydrotherapy)</a></li>
                                            <li><a href="#">Radiology</a></li>
                                            <li><a href="#">Surgery</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="#"><span>Diagnostic Services</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">Ultrasound 2D, 3D, and 4D</a></li>
                                            <li><a href="#">Echocardiography</a></li>
                                            <li><a href="#">X-ray machines (CR, and DR)</a></li>
                                            <li><a href="#">Computed tomography machine (64 slice)</a></li>
                                            <li><a href="#">Magnetic Resonance machine (1.5 Tesla)</a></li>
                                            <li><a href="#">C – Arm X-ray machine</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Mortuary Services</a></li>
                                    <li className="dropdown"><a href="#"><span>Interventional Procedures</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">In vitro fertilization (Test tube baby)</a></li>
                                            <li><a href="#">Renal Dialysis</a></li>
                                            <li><a href="#">Cardiac Catherization Lab</a></li>
                                            <li><a href="#">Colonoscopy</a></li>
                                            <li><a href="#">Upper G.I.T Scoping</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="#"><span>Laboratory Services</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">Cardiac Markers testing</a></li>
                                            <li><a href="#">Fertility panel</a></li>
                                            <li><a href="#">Lipid Profile testing</a></li>
                                            <li><a href="#">Tumor markers testing</a></li>
                                            <li><a href="#">Renal, Hepatic and diabetic panels</a></li>
                                            <li><a href="#">High Performance Liquid Chromatography (HPLC)</a></li>
                                            <li><a href="#">Flow cytometry</a></li>
                                            <li><a href="#">Coagulation screening and Factor assay</a></li>
                                            <li><a href="#">Microbiology test</a></li>
                                        </ul>
                                    </li>
                                </ul>
                        </li>
                        {/* <li><Link className="nav-link" to="/patient_reg">Patient Registration</Link></li> */}
                        <li><Link className="nav-link" to="/team">Team</Link></li>
                        <li><Link className="nav-link" to="/contact">Contact</Link></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

              </div>
          </header>
        </>

  )
}

export default header