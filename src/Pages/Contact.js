import React from 'react';
import '../styleguides/contact.css';

function Contact() {
  return (
    <div className="contactus-container container p-5">
      <section id="contact" class="contact-section">
        <div class="container">
          <h2 class="section-title">Contact</h2>
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11610046565!2d72.74109823309732!3d19.08219783915274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63ac055f4eb%3A0x4d83af2030c4f4a!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719849200000"
              width="100%"
              height="350"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div class="form-container">
            <h3 class="form-title">Contact Form</h3>
            <form id="contact-form" action="#" method="POST">
              <div class="form-row">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                />
              </div>

              <div class="form-row">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              <div class="form-row">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <div class="form-row">
                <button type="submit" class="submit-btn">
                  <i class="fa fa-paper-plane"></i> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
