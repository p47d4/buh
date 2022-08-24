import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const team = () => {
  return (
    
    <>
        <Header />

        <section id="team" className="team">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Leadership Team</h2>
              <h3>Our <span>Leadership Team</span></h3>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                <div className="member">
                  <div className="member-img">
                    <img src="assets/img/buh/100.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="member-info">
                    <h4>Dr. Dogo-Muhammad M.W.B</h4>
                    <span>Chief Executive Officer/Chief Medical Director</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                <div className="member">
                  <div className="member-img">
                    <img src="assets/img/user.webp" className="img-fluid" alt="" />
                  </div>
                  <div className="member-info">
                    <h4>Dr. Usman Adamu Gwaram</h4>
                    <span>Chairman Medical Advisory Committee</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                <div className="member">
                  <div className="member-img">
                    <img src="assets/img/buh/200.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="member-info">
                    <h4>Dr. Taofeek Uthman</h4>
                    <span>Director of Administration</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                <div className="member">
                  <div className="member-img">
                    <img src="assets/img/buh/300.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="member-info">
                    <h4>Mrs. Maryam Usman</h4>
                    <span>Chief Matron</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        <section id="team" className="team">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Governing Council</h2>
              <h3>Our <span>Governing Council</span></h3>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                <div className="member">
                  <div className="member-img">
                    <img src="assets/img/buh/pc.png" className="img-fluid" alt="" />
                  </div>
                  <div className="member-info">
                    <h4>Sen. Yusuf Datti Baba-Ahmed, PhD</h4>
                    <span>Chairman</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                <div className="member">
                  <div className="member-img">
                    <img src="assets/img/buh/100.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="member-info">
                    <h4>Dr. Dogo-Muhammad M.B.W.</h4>
                    <span>Member/Secretary</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                <div className="member">
                  <div className="member-img">
                    <img src="assets/img/buh/SS.jpeg" className="img-fluid" alt="" />
                  </div>
                  <div className="member-info">
                    <h4>Dr. Shehu Sule</h4>
                    <span>Member</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                <div className="member">
                  <div className="member-img">
                    <img src="assets/img/user.webp" className="img-fluid" alt="" />
                  </div>
                  <div className="member-info">
                    <h4>Dr. M.D. Ibrahim</h4>
                    <span>Member</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                <div className="member">
                  <div className="member-img">
                    <img src="assets/img/user.webp" className="img-fluid" alt="" />
                  </div>
                  <div className="member-info">
                    <h4>Barr. Dahiru Ibrahim</h4>
                    <span>Member</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                <div className="member">
                  <div className="member-img">
                    <img src="assets/img/buh/onari_duke.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="member-info">
                    <h4>Mrs. Onari Duke</h4>
                    <span>Member</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                <div className="member">
                  <div className="member-img">
                    <img src="assets/img/user.webp" className="img-fluid" alt="" />
                  </div>
                  <div className="member-info">
                    <h4>Stanbic IBTC Representative</h4>
                    <span>Member</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
        <Footer />
    </>
    
  )
}
export default team