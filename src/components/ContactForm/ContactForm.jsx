import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="contact-form-row">
        <div className="contact-form-row-copy-item">
          <p className="primary sm">Let's heal together</p>
        </div>
        <div className="contact-form-row-copy-item">
          <p className="primary sm">(Part — 07)</p>
        </div>
        <div className="contact-form-row-copy-item">
          <p className="primary sm">&copy; 2025</p>
        </div>
      </div>

      <div className="contact-form-row">
        <div className="contact-form-col">
          <div className="contact-form-header">
            <h3>Start a Conversation</h3>

            <p>
              Sign up with your ph/email address to receive news and update from GOTA Camp.
            </p>
          </div>
          <iframe className="map" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.6967750386566!2d-116.80839519999999!3d33.403673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db9931fd610c03%3A0x3d4b15d249390328!2sGOTA%20Camp!5e1!3m2!1ses!2sve!4v1763585699550!5m2!1ses!2sve" 
            width="500" 
            height="150" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location" // Es una buena práctica agregar un título
          ></iframe>

          <div className="contact-form-availability">
            <p className="primary sm">38176 Highway 79, Warner Springs,CA 92086</p>
            <p className="primary sm">Clients worldwide</p>
          </div>
        </div>

        <div className="contact-form-col">
          <div className="form-item">
            <input type="text" placeholder="Name" />
          </div>

          <div className="form-item">
            <input type="text" placeholder="Email" />
          </div>

          <div className="form-item">
            <textarea type="text" rows={6} placeholder="Message" />
          </div>

          <div className="form-item">
            <button className="btn">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
