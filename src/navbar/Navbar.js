import React, { useState } from "react";
import "./navbar.css";
import ContentWrapper from "../contentWrapper/contentwrapper";
import { Link } from "react-scroll";


const Navbar = () => {
  const [icon,Seticon]=useState(false);

  return (
    <div className="container custom mt-5" style={{ display: "flex", justifyContent: "center" }}>
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        <Link to="home" spy={true} smooth={true} offset={-110} duration={100}>
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} style={{width:'250px', height:'50px'}} alt="Company Logo" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={()=>Seticon(!icon)} data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span>
             <i className = {icon ? "fa-solid fa-x": "fa-solid fa-bars"} style={{ color: "#000000" }}></i> 
          </span>
        </button>

        <div className={`collapse navbar-collapse ${icon ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* Add 'ms-auto' class to align items to the right */}
            <li className="nav-item ">
              <Link to="home" spy={true} smooth={true} offset={-110} duration={100}>
                <a className="nav-link " aria-current="page">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="why-us" spy={true} smooth={true} offset={-110} duration={100}>
                <a className="nav-link ">AboutUs</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="our-service" spy={true} smooth={true} offset={-110} duration={100}>
                <a className="nav-link">Service</a>
              </Link>
            </li>
            <li className="nav-item  ">
              <Link to="contact" spy={true} smooth={true} offset={-110} duration={100}>
                <a className="nav-link">Contact us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

    
  );
};

export default Navbar;
