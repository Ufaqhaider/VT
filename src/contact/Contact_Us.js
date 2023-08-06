import React from "react";
import "./contact.css";

const Contact_Us = () => {
  return (
    <div className=" contact contactContainer  sectionContainer container snipcss-KKvc5">
      <div className="respo">
        <h3>Get in Touch</h3>
        <div className="contactTypes">
          <div className="flexContainer">
            <div className="typeBox">
              <i className="lni lni-envelope"></i>
              <a className="email" href="krishna.s@velocitytech.in">
                krishna.s@velocitytech.in
              </a>
              <p>Email Us</p>
            </div>
          </div>
          <div className="flexContainer">
            <div className="typeBox ">
              <i className="lni lni-calendar"></i>
              <a
                href="https://calendly.com/arupmandal731/15min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Calendly
              </a>
              <p>Schedule a Meeting</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contactFormContainer">
        <h3>Contact Form</h3>
        <form
          id="contactForm"
          action="https://formspree.io/f/meqnladz"
          method="POST"
        >
          <div className="input1">
            <label for="nameInput" className="srOnly"></label>
            <input
              type="text"
              id="nameInput"
              name="nameInput"
              className="nameInput"
              required=""
              placeholder="Organization Name*"
            />
            <label for="emailInput" className="srOnly"></label>
            <input
              type="url"
              id="emailInput"
              name="emailInput"
              className="emailInput"
              required=""
              placeholder="Organization Website*"
            />
          </div>
          <div className="input2">
            <label for="subjectInput" className="srOnly"></label>
            <input
              type="email"
              id="subjectInput"
              name="subjectInput"
              className="subjectInput"
              required=""
              placeholder="Organization Email*"
            />
            <label for="messageInput" className="srOnly"></label>
            <input
              className="messageInput"
              name="messageInput"
              id="messageInput"
              required=""
              placeholder="Your Message*"
            ></input>
          </div>
          <button
          type="submit"
          className="formSend"
          target="_blank"
          form="contactForm"
          rel="noopener noreferrer"
        >
          SEND
        </button>
        </form>
      
      </div>
    </div>
  );
};

export default Contact_Us;
