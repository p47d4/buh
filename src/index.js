import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact'
import Patient_reg  from './pages/patient_reg';
import Team from './pages/team';
import Services from './pages/services';
import Gallery from './pages/gallery';
import Booking from './pages/booking';
import Directors_message from './pages/directors_message';
import Accordion from './pages/accordion';

import Login from './components/login_component.js';
import SignUp from './components/signup_component.js';
import UserDetails from './components/userDetails.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <div className="auth-wrapper">
      <div className="auth-inner">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="patient_reg" element={<Patient_reg />} />
        <Route path="team" element={<Team />} />
        <Route path="services" element={<Services />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="booking" element={<Booking />} />
        <Route path="directors_message" element={<Directors_message />} />
        <Route path="accordion" element={<Accordion />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/userDetails" element={<UserDetails />} />
      </Routes>
      </div>
    </div>
  </BrowserRouter>

  // <Router>
  // <div className="App">
  //   <div className="auth-wrapper">
  //     <div className="auth-inner">
  //       <Routes>
  //         <Route exact path="/" element={<Login />} />
  //         <Route path="/sign-in" element={<Login />} />
  //         <Route path="/sign-up" element={<SignUp />} />
  //         <Route path="/userDetails" element={<UserDetails />} />
  //       </Routes>
  //     </div>
  //   </div>
  // </div>
  // </Router>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
