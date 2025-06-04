import React, { useState } from "react";
import { MdEmail, MdPhone, MdAccessTime } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
     const Contact = () => {
       const [formData, setFormData] = useState({
         name: "",
         email: "",
         project: "",
         message: "",
       });
       const [isLoading, setIsLoading] = useState(false);

       const handleChange = (e) => {
         const { name, value } = e.target;
         setFormData((prev) => ({ ...prev, [name]: value }));
       };

       const handleSubmit = async () => {
         if (!formData.name || !formData.email || !formData.project || !formData.message) {
           alert("Please fill in all fields.");
           return;
         }

         setIsLoading(true);

         try {
           const url = `http://localhost:5000/contact`;
           console.log("Fetching URL:", url);
           console.log("Request Body:", formData);

           const response = await fetch(url, {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify(formData),
           });

           console.log("Response Status:", response.status);
           const responseText = await response.text();
           console.log("Raw Response:", responseText);

           let result;
           try {
             result = JSON.parse(responseText);
           } catch (parseError) {
             console.error("Failed to parse response as JSON:", parseError);
             throw new Error("Invalid response format from server");
           }

           if (!response.ok) {
             throw new Error(result.message || "Server error");
           }

           setTimeout(() => {
             alert(result.message || "Message sent successfully!");
             setFormData({ name: "", email: "", project: "", message: "" });
             setIsLoading(false);
           }, 2000);
         } catch (error) {
           console.error("Fetch Error:", error.message);
           alert(error.message || "Failed to send message. Please try again.");
           setIsLoading(false);
         }
       };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-subtitle">
        Have a project in mind or want to chat? Send me a message and I'll get back to you as soon as possible.
      </p>

      <div className="contact-content contact__form">
        <form className="contact-form contact__form-group" onSubmit={handleSubmit}>

          <label>Your Name</label>
          <input type="text" name="name" placeholder="John Doe"  id="name" value={formData.name}     onChange={handleChange} required/>

          <label>Email Address</label>
          <input type="email" name="email" placeholder="john@example.com" id="email"value={formData.email}  onChange={handleChange} required/>

          <label>Subject</label>
          <input type="text" name="project" placeholder="Project Inquiry"   id="project"value={formData.project}     onChange={handleChange} required/>

          <label>Message</label>
          <textarea type="text" name="message" placeholder="Tell me about your project or question..." id="message"  value={formData.message}    onChange={handleChange} required/>

          <button type="submit" id="submit-button" onClick={handleSubmit} disabled={isLoading}>Send Message</button>
               <div className="loader" style={{ display: isLoading ? "block" : "none ",   }}>
                 ⏳ Sending....
               </div>


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
