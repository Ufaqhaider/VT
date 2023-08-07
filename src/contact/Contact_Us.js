import React, { useState } from "react";
import "./contact.css";
import axios from "axios";

const Contact_Us = () => {
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(name, website, email,message);

    const data = {
      Name: name,
      Website: website,
      Email: email,
      Message: message,
    };
    axios
      .post("https://sheetdb.io/api/v1/m1dppvbg5qawz", data)
      .then((response) => {
        // console.log(response);
        setName("");
        setWebsite("");
        setEmail("");
        setMessage("");
      });
  };

  return (
    <div className=" contact contactContainer  sectionContainer container snipcss-KKvc5">
      <div className="respo">
        <h3>Get in Touch</h3>
        <div className="contactTypes">
          <div className="flexContainer">
            <div className="typeBox">
              {/* <i className="lni lni-envelope"></i> */}
              <img
                className="lni lni-envelope"
                src="./images/Email.png"
                alt="Envelope Icon"
              />

              <a className="email" href="mailto:krishna.s@velocitytech.in">
                krishna.s@velocitytech.in
              </a>

              <p>Email Us</p>
            </div>
          </div>
          <div className="flexContainer">
            <div className="typeBox ">
              {/* <i className="lni lni-calendar"></i> */}
              <img
                className="lni lni-envelope"
                src="./images/calender.png"
                alt="Envelope Icon"
              />
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
          onSubmit={handleSubmit}
        >
          <div className="input1">
            <label for="nameInput" className="srOnly"></label>
            <input
              type="text"
              id="nameInput"
              name="nameInput"
              className="nameInput"
              required
              placeholder="Organization Name*"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <label for="emailInput" className="srOnly"></label>
            <input
              type="url"
              id="urlnput"
              name="urlnput"
              className="urlnput"
              required
              placeholder="Organization Website*"
              onChange={(e) => setWebsite(e.target.value)}
              value={website}
            />
          </div>
          <div className="input2">
            <label for="subjectInput" className="srOnly"></label>
            <input
              type="email"
              id="emailInput"
              name="emailInput"
              className="subjectInput"
              required
              placeholder="Organization Email*"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label for="messageInput" className="srOnly"></label>
            <input
              className="messageInput"
              name="messageInput"
              id="messageInput"
              required
              placeholder="Your Message*"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></input>
          </div>
        
        </form>
        <button
            type="submit"
            className="formSend"
            target="_blank"
            form="contactForm"
            rel="noopener noreferrer"
          >
            SEND
          </button>
      </div>
    </div>
  );
};

export default Contact_Us;
