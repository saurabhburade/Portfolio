import React from "react";
import "./getintouch.css";
import contact from "../Images/undraw_message_sent_1030.svg";
export default function GetInTouch() {
  return (
    <div className="get-cont" id="contact">
      <div className="get-in-touch-img">
        <img src={contact} alt="" className="email-img" />
      </div>
      <div className="get-in-touch-detail">
        <p className="get-in-hero">Get In Touch</p>
        <form className="get-in-form">
          <div className="form-name">
        
            <label htmlFor="name">Enter Name</label>
            <input type="text" name="name" />
          </div>
          <div className="form-email">
            <label htmlFor="email">Enter Email</label>
            <input type="email" name="email" />
          </div>
          <div className="form-sub">
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" />
          </div>
          <div className="form-msg">
            <label htmlFor="message"> Message</label>
            <textarea name="message" ></textarea>
          </div>
          <div className="form-btn">
              <button className="form-submit-btn">
                  Send Message
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}
