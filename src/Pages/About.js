import React from 'react';
import '../styleguides/about.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar, Mousewheel } from 'swiper/modules';

function About() {
  return (
    <div className="aboutus-maincontainer">
      <div className="aboutus-container">
        <div className="row">
          <h2>About Me</h2>
          <p>
            A passionate Flutter developer with strong expertise in
            cross-platform apps, REST APIs, UI/UX, widgets, and state management
            solutions. Proven track record in delivering cutting-edge solutions,
            including API integration, third-party libraries, and performance
            optimization. Adept at debugging to ensure high-quality, responsive
            apps and An agile collaborator committed to staying current with
            industry trends.
          </p>
          <p>
            If you're seeking a skilled Flutter developer to breathe life into
            your project and exceed your expectations, I am here to collaborate
            and create magic together. Reach out, and let's transform your
            vision into a reality!
          </p>
        </div>
      </div>
      <section class="service">
        <h3 class="h3 service-title">What i'm doing</h3>

        <ul class="service-list">
          <li class="service-item">
            <div class="service-icon-box">
              <i class="fa-solid fa-mobile"></i>
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Mobile Apps</h4>

              <p class="service-item-text">
                Professional development of applications for Android and ios.
              </p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <i class="fa-solid fa-terminal"></i>
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Web development</h4>

              <p class="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <i class="fa-solid fa-terminal"></i>
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">UI/UX Design</h4>

              <p class="service-item-text">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <i class="fa-solid fa-terminal"></i>
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Backend Development</h4>

              <p class="service-item-text">
                High-performance backend services designed for scalability and
                seamless user experience.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="clients">
        <h3 className="h3 clients-title">Skills</h3>

        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          scrollbar={{ draggable: true }}
          mousewheel={true}
          modules={[Scrollbar, Mousewheel]}
          className="clients-list"
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          <SwiperSlide className="clients-item">
            <a
              // href="https://dart.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require('../images/csslogo.png')}
                className="img-fluid"
                alt="CSS Logo"
              />
            </a>
          </SwiperSlide>

          <SwiperSlide className="clients-item">
            <a
              href="https://flutter.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require('../images/htmllogo.png')}
                className="img-fluid"
                alt="HTML Logo"
              />
            </a>
          </SwiperSlide>

          <SwiperSlide className="clients-item">
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require('../images/jslogo.png')}
                className="img-fluid"
                alt="JS Logo"
              />
            </a>
          </SwiperSlide>

          <SwiperSlide className="clients-item">
            <a
              href="https://www.postman.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require('../images/reactlogo.png')}
                className="img-fluid"
                alt="React Logo"
              />
            </a>
          </SwiperSlide>

          <SwiperSlide className="clients-item">
            <a
              href="https://www.figma.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require('../images/jslogo.png')}
                className="img-fluid"
                alt="Figma Logo"
              />
            </a>
          </SwiperSlide>

          <SwiperSlide className="clients-item">
            <a
              href="https://developer.android.com/studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require('../images/tailwindlogo.png')}
                className="img-fluid"
                alt="Tailwind Logo"
              />
            </a>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

export default About;
