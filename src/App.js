import Home from './Home/Home';
import Navbar from './navbar/Navbar';
import Service from './why_choose';
import contentwrapper from './contentWrapper/contentwrapper'
import ContentWrapper from './contentWrapper/contentwrapper';
import About from './about us/about';
import Contact_Us from './contact/Contact_Us';
import OurServices from './our services/OurServices';
import { BrowserRouter as Routes, Route,} from 'react-router-dom';
import './App.css'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './footer/Footer';
// import Footer from './footer/Footer';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
    <div className=' m-lg-5' style={{ justifyContent:'center', textAlign:'center', alignItems:'center'}}>
      <Navbar/>
      <Home/>
      <Service/>
      <About/>
      <OurServices/>
      <Contact_Us/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
