import React from "react";
import {FaFacebookF, FaInstagram } from 'react-icons/fa';
import {FaXTwitter, FaLinkedin} from 'react-icons/fa6';

const ContactPage = () => {
  return (
    <section className="contact-page-main">
      <div className="contact-header">
        <div className="contact-title-wrapper">
          <h5 className="contact-label">Contact Us</h5>
        </div>
        <div className="contact-heading-wrapper">
          <h4 className="contact-heading">
            General Inquiry, Get Featured, Plan Your Date With Us,
            Cafe Suggestion
          </h4>
        </div>

      </div>

      <div className="contact-content">
        <div className="contact-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Contact"
            className="contact-image"
          />
        </div>

        <div className="contact-form-wrapper">

          <form className="contact-form">

            <div className="form-group">
              <label>Contact Reason</label>
              <input type="text" placeholder="Plan Your Date With Us" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" />
            </div>

            <div className="form-group">
              <label>Your Name</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Date</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Occasion</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Other Details</label>
              <textarea rows="3"></textarea>
            </div>

            <button type="submit" className="send-btn">
              Send
            </button>

          </form>

          <div className="contact-extra-info">
            <p>
              We help you plan and book your perfect date experience through
              curated cafe recommendations.
            </p>

            <a href="mailto:hello@dateflyx.com">
              hello@dateflyx.com
            </a>
          </div>

        </div>

      </div>

      <div className="social-section">

        <div className="social-heading-wrapper">
          <h2 className="social-heading">
            Follow DateFlyx On Socials
          </h2>
        </div>

        <div className="social-icons">
          <a><FaFacebookF /></a>
          <a><FaInstagram /></a>
          <a><FaLinkedin /></a>
          <a><FaXTwitter /></a>

        </div>

      </div>

    </section>
  );
};

export default ContactPage;