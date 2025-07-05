import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styleguides/portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio-container container py-5">
      <section id="portfolio" class="portfolio-section">
        <div class="container">
          <h2 class="section-title">Portfolio</h2>

          <div class="tabs-container">
            <ul class="nav nav-underline">
              <li class="nav-item">
                <a class="nav-link" href="#all">
                  All
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#web">
                  Web
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#design">
                  Design
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#app">
                  App
                </a>
              </li>
            </ul>
          </div>

          <div class="portfolio-grid">
            <div id="all" class="tab-content">
              <div class="portfolio-card">
                <a href="https://sevenup-sevendown.netlify.app/">
                  <img
                    src={require('../images/expense-calculator.png')}
                    alt="Project 1"
                    className="img-fluid"
                  />
                </a>
                <div>
                  <h3>Expense calculator </h3>
                  <p>HTML,CSS Js & React Js</p>
                </div>
              </div>
              <div class="portfolio-card">
                <a
                  href="https://sevenup-sevendown.netlify.app/game"
                  target="blank"
                >
                  <img
                    src={require('../images/seven-up-and-seven-down.png')}
                    alt="Project 2"
                  />
                </a>
                <h3>7UP & 7Down Game</h3>
                <p>HTML,CSS Js & React Js</p>
              </div>
              <div class="portfolio-card">
                <NavLink to="/calculator"
                className="bg-grey"
                >
                  <img
                    src={require('../images/calculator.png')}
                    alt="Project 3"
                  />
                </NavLink>
                <h3>Calculator</h3>
                <p>HTML,CSS Js & React Js</p>
              </div>
              <div class="portfolio-card">
                <NavLink to="/weather">
                  <img
                    src={require('../images/weather.js.png')}
                    alt="Project 4"
                  />
                </NavLink>
                 <h3>Weather App</h3>
                <p>HTML,CSS Js & React Js</p>
              </div>
               <div class="portfolio-card">
                <NavLink to="/homeloancalc">
                  <img
                    src={require('../images/home-loan.png')}
                    alt="Project 4"
                  />
                </NavLink>
               <h3>Home Laon App</h3>
                <p>HTML,CSS Js & React Js</p>
              </div>
              <div class="portfolio-card">
                <NavLink to="/simpleint">
                  <img
                    src={require('../images/simple-interest.png')}
                    alt="Project 4"
                  />
                </NavLink>
               <h3>Simple Interest</h3>
                <p>HTML,CSS Js & React Js</p>
              </div>
               <div class="portfolio-card">
                <NavLink to="/stockavg">
                  <img
                    src={require('../images/stock-average.png')}
                    alt="Project 4"
                  />
                </NavLink>
               <h3>Stock Average</h3>
                <p>HTML,CSS Js & React Js</p>
              </div>
              <div class="portfolio-card">
                <NavLink to="/ppfcalc">
                  <img
                    src={require('../images/ppf-calc.png')}
                    alt="Project 4"
                  />
                </NavLink>
               <h3>PPFCalculator</h3>
                <p>HTML,CSS Js & React Js</p>
              </div>
            </div>

            <div id="web" class="tab-content">
              <div class="portfolio-card">
                <img src={require('../images/htmllogo.png')} alt="Project 1" />
                <h3>Web Project 1</h3>
                <p>HTML, CSS, JS</p>
              </div>
              <div class="portfolio-card">
                <img src={require('../images/htmllogo.png')} alt="Project 4" />
                <h3>Web Project 2</h3>
                <p>React, API</p>
              </div>
            </div>

            <div id="design" class="tab-content">
              <div class="portfolio-card">
                <img src={require('../images/htmllogo.png')} alt="Project 2" />
                <h3>Design Project</h3>
                <p>Figma, Photoshop</p>
              </div>
            </div>

            <div id="app" class="tab-content">
              <div class="portfolio-card">
                <img src={require('../images/htmllogo.png')} alt="Project 3" />
                <h3>App Project</h3>
                <p>React Native</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
