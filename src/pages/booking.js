import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
  export default class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      time: "",
      comment: "",
      specialty: "",
      doctor: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, phone, time, comment, specialty, doctor
     } = this.state;
    console.log(fname, lname, email, phone, time, comment, specialty, doctor);
    fetch("http://localhost:5000/booking", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        phone,
        time,
        comment,
        specialty,
        doctor
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "BookAppointment");
      });
  }
  render() {
    return (

        <>
            <Header />

            <section id="register" className="contact">
    <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title">
            <h2>Booking</h2>
            <h3><span>Book </span>An Appointment</h3>
        </div>
        <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-qw">
                <div className="editd_person_details_formpage">
                    <div className="container main_section">
                        <div className="row">
                            <div className="col-md-12">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="first_section">
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label for="specialty">Specialty <span className="text-danger">*</span></label>
                                                <select name="specialty" className="form-control" id="specialty" onChange={(e) => this.setState({ specialty: e.target.value })}>
                                                    <option>-- Select Specialty --</option>
                                                    <option>Specialty A</option>
                                                    <option>Specialty B</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label for="doctor">Doctor <span className="text-danger">*</span></label>
                                                <select name="doctor" className="form-control" id="doctor" onChange={(e) => this.setState({ doctor: e.target.value })}>
                                                    <option>-- Select Doctor --</option>
                                                    <option>Dr A</option>
                                                    <option>Dr B</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label for="firstName">First Name <span className="text-danger">*</span></label><input name="firstName" type="text" className="form-control" id="firstName"  onChange={(e) => this.setState({ fname: e.target.value })} />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label for="surname">Last Name <span className="text-danger">*</span></label><input name="surname" type="text" className="form-control" id="surname"  onChange={(e) => this.setState({ lname: e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <label for="phoneNumber">Phone Number <span className="text-danger">*</span></label><input name="phoneNumber" type="text" className="form-control" id="phoneNumber"  onChange={(e) => this.setState({ phone: e.target.value })} />
                                            </div>
                                            <div className="col-md-4 mb-3"><label for="emailAddress">Email Address</label><input name="emailAddress" type="email" className="form-control" id="emailAddress"  onChange={(e) => this.setState({ email: e.target.value })} /></div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col-md-6 mb-3"><label for="time">Preferred Time</label><input name="time" type="time" className="form-control" id="time"  onChange={(e) => this.setState({ time: e.target.value })} /></div>
                                            <div className="col-md-6 mb-3">
                                                <div className="form-group"><label for="comment">Comment</label><textarea name="comment" className="form-control" id="comment" rows="5" onChange={(e) => this.setState({ comment: e.target.value })}></textarea></div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row"><button className="btn btn-success btn-block" type="submit">Book Appointment</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
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