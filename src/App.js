import React, { useState } from 'react';
import '../src/styleguides/common.css';
import './styleguides/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './Navbar/Header';
import About from './Pages/About';
import { Outlet } from 'react-router-dom';
import Contact from './Pages/Contact';
function App() {
   const [showContacts, setShowContacts] = useState(false); 
  return (
    <div className="main-container">
      <div className="row-container gap-4">
        <div className="sidebar">
          <div className="user-info container text-center p-0">
            <div className="row gap-4">
              <div className="image-section">
                <img
                  src={require('./images/girlimage.jpeg')}
                  className="img-fluid rounded-2"
                ></img>
                <span class="active-status" title="Available for work!"></span>
              </div>
              <div className="content-section">
                <h3>Srishti Sharma</h3>
                <button className="btn btn-sm bg-light custom-btn">
                  Software Developer
                </button>
              </div>
            </div>
            <button
              className="btn  btn-sm mt-0 show-contact"
              onClick={() => setShowContacts(!showContacts)}
            >
              {showContacts ? 'Hide Contacts' : 'Show Contacts'}
            </button>
            <hr />
          </div>
          <div className={`contact-wrapper ${showContacts ? 'open' : ''}`}>
            <div className="social-info container p-0">
              <div className="row">
                <div className="col-xl-3 text-center">
                  <i className="fa-solid fa-envelope fa-lg"></i>
                </div>
                <div className="col-xl-8">
                  <span className="d-block">Email</span>
                  <p className="">abc@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="social-info container p-0">
              <div className="row">
                <div className="col-xl-3 text-center">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div className="col-xl-8">
                  <span className="d-block">Phone</span>
                  <p className="">9082015067</p>
                </div>
              </div>
            </div>
            <div className="social-info container p-0">
              <div className="row">
                <div className="col-xl-3 text-center">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div className="col-xl-8">
                  <span className="d-block">location</span>
                  <p className="">Ghatkopar, Amrut Nagar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content">
          <Header />
          <Outlet />
          {/* <About /> */}
          {/* <Contact /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
