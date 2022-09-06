import React, { Component } from "react";
import Header from './header';
import Footer from './footer';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./userDetails";
        }
      });
  }
  render() {
    return (
        <>
      <Header />

      <section id="login" class="contact">
        <div class="container aos-init aos-animate" data-aos="fade-up">
          <div class="section-title">
            <h2>Login</h2>
            <h3>
              <span>Login</span>
            </h3>
            <p>Welcome back. Use the form below to login</p>
          </div>
          <div class="row aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-qw">
              <form onSubmit={this.handleSubmit} class="php-email-form">
                <div class="form-group">
                  <label for="username">Hospital ID</label>
                  <input type="text" class="form-control" name="username" id="username" placeholder="Enter your Hospital ID" onChange={(e) => this.setState({ email: e.target.value })} />
                </div>
                <div class="form-group pt-2">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" name="password" id="password" placeholder="Enter your password" onChange={(e) => this.setState({ password: e.target.value })} />
                </div>
                <div class="my-3"></div>
                <div class="text-center">
                  <button type="submit">Login</button>
                  <a href="/sign-up">Register</a>
                   <p>
                    <a href="/patient/account/reset">
                      <span class="primary">Forgot credentials?</span>
                    </a>
                  </p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </>
    );
  }
}