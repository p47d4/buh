import React, { Component } from "react";
import Header from './header';
import Footer from './footer';

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }
  render() {
    return (
        <>
        <Header />

        <section id="contact" className="contact">
          <div className="container">

            <div className="section-title">
              <h2>Profile</h2>
              <h3><span>Profile</span></h3>
            </div>
            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-4">
                <div className="info-box mb-4">
                  <i className="bx bx-map"></i>
                  <h3>Name</h3>
                  <p>{this.state.userData.fname}</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="info-box  mb-4">
                  <i className="bx bx-envelope"></i>
                  <h3>Email</h3>
                  <p>{this.state.userData.email}</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="info-box  mb-4">
                  <i className="bx bx-phone-call"></i>
                  <h3>Phone</h3>
                  <p>{this.state.userData.phone}</p>
                </div>
              </div>

            </div>
          </div>
        </section>

      <Footer />
      </>
    );
  }
}