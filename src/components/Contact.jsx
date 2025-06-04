import React, { useState } from "react";
import { MdEmail, MdPhone, MdAccessTime } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/sriramsangam21@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset(); // Clear the form
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending message. Please check your connection.");
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-subtitle">
        Have a project in mind or want to chat? Send me a message and I'll get back to you as soon as possible.
      </p>

      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <label>Your Name</label>
          <input type="text" name="name" placeholder="John Doe" required />

          <label>Email Address</label>
          <input type="email" name="email" placeholder="john@example.com" required />

          <label>Subject</label>
          <input type="text" name="subject" placeholder="Project Inquiry" required />

          <label>Message</label>
          <textarea name="message" placeholder="Tell me about your project or question..." required></textarea>

          <button type="submit">Send Message</button>

          {/* Show custom message */}
          {status && <p className="form-status">{status}</p>}
        </form>

        <div className="contact-info">
          <h3>Contact Information</h3>

          <div className="info-item">
            <MdEmail className="icon" />
            <div>
              <strong>Email</strong>
              <p>hello@yourportfolio.com</p>
            </div>
          </div>

          <div className="info-item">
            <MdPhone className="icon" />
            <div>
              <strong>Phone</strong>
              <p>+1 234 567 890</p>
            </div>
          </div>

          <div className="info-item">
            <MdAccessTime className="icon" />
            <div>
              <strong>Office Hours</strong>
              <p>Monday-Friday, 9AM-5PM</p>
            </div>
          </div>

          <div className="social-icons">
            <FaInstagram />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
