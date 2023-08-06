import React from "react";

const Footer = () => {
  return (
    <div className=" w-100">
      <footer className="bg-light mt-lg-5 text-white d-flex justify-content-between">
        {/* Copyright */}
        <div
          className=" text-left text-black w-50 p-3"
        //   style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
             <img src={`/images/logo.png`} style={{width:'250px', height:'50px'}} alt="Company Logo" />
          {/* © 2023 Copyright:
          <a className="text-black" href="https://velocitytech.in/">
            velocitytech.in
          </a> */}
        </div>

        {/* Social media */}
        <div className="container p-4 pb-0">
          <section className="d-flex justify-content-end mb-4">
            {/* Facebook */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            {/* Twitter */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            {/* Google */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-youtube"></i>
            </a>

            {/* Instagram */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* Linkedin */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </section>
          {/* Section: Social media */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
