import React from "react";
import "./home.css";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div className="home "></div>
      <div class="content container  mt-lg-5 snipcss0-0-0-1 snipcss-PhJat">
        <div class="block-hero snipcss0-1-1-2">
          <h1
            data-w-id="Heading 2"
            class="heading-hero snipcss0-2-2-3 "
            id="style-pZUPQ"
          >
            Hassle-free software development for your business
            <span class="text-accent snipcss0-3-3-4"></span>
          </h1>
          <p
            data-w-id="Paragraph 2"
            class="paragraph-hero snipcss0-2-2-5"
            id="style-hqFJQ"
          >
            Say goodbye to the complexities of software development. Join Us
             to experience seamless and efficient solutions.
          </p>
          <div class="form-block-banner herocta w-form snipcss0-2-2-6 d-md-table-row">
            <iframe
              name="dummyframe"
              id="dummyframe"
              class="snipcss0-3-6-7 style-eSAx2"
            ></iframe>
            <form
              action=""
              id="email-form"
              name="email-form"
              data-name="Email Form"
              target="dummyframe"
              onsubmit="document.getElementsByClassName('success-message1')[0].classList.remove('w-form-done')"
              method="post"
              class="form-banner snipcss0-3-6-8"
            >
              {/* <input
                type="email"
                class="text-field-white tophero w-input snipcss0-4-8-9"
                maxlength="256"
                name="Email"
                data-name="Email"
                placeholder="Your Email"
                id="Email"
                required=""
              /> */}
              <Link to="contact" spy={true} smooth={true} offset={-110} duration={100}>
                <input
                type="submit"
                data-wait="Please wait..."
                value="Know More"
                class="submit-button-white herobtn w-button snipcss0-4-8-10"
              />
              </Link>
            </form>
            <div class="success-message1 w-form-done snipcss0-3-6-11">
              <div class="success-text snipcss0-4-11-12">
                Thank you! Your submission has been received!
              </div>
            </div>
            <div class="error-message1 w-form-fail snipcss0-3-6-13">
              <div class="error-text snipcss0-4-13-14">
                Oops! Something went wrong while submitting the form.
              </div>
            </div>
          </div>
        </div>

                             {/* moving bolls animation  */}
        <div
          data-w-id="bfdef6b2-2e26-0bbb-6944-284fe24ab051"
          class="block-hero-img snipcss0-1-1-15  mt-lg-3 "
        >
          <div
            class="block-circle---hero-1 snipcss0-2-15-16 style-66snU"
            id="style-66snU"
          >
            <img
            data-aos="fade-down" data-aos-delay="500"
              src="https://on-the-spot.loopgenius.com/static/img/orange_circle.png"
              loading="lazy"
              alt=""
              class="image-circle---4 box bounce-1 snipcss0-3-16-17 style-JttAe"
              id="style-JttAe"
            />
            <img
            data-aos="fade-right" data-aos-delay="500"
              src="https://on-the-spot.loopgenius.com/static/img/trans_circle.png"
              loading="lazy"
              alt=""
              class="image-circle---5 box bounce-1 snipcss0-3-16-18 style-wMC9r"
              id="style-wMC9r"
            />
            <img
            // data-aos="fade-down" data-aos-delay="500" 
              src="https://on-the-spot.loopgenius.com/static/img/trans_circle.png"
              loading="lazy"
              alt=""
              class="image-circle---6 box bounce-1 snipcss0-3-16-19 style-YrTIn"
              id="style-YrTIn"
            />
            <img
            // data-aos="fade-down" data-aos-delay="500"
              src="https://on-the-spot.loopgenius.com/static/img/orange_circle.png"
              loading="lazy"
              alt=""
              class="image-circle---7 box bounce-1 snipcss0-3-16-20 style-TgUto"
              id="style-TgUto"
            />
            <img
            data-aos="fade-right" data-aos-delay="500"
              src="https://on-the-spot.loopgenius.com/static/img/orange_circle.png"
              loading="lazy"
              alt=""
              class="image-circle---8 box bounce-1 snipcss0-3-16-21 style-gvzXy"
              id="style-gvzXy"
            />
            <img
            data-aos="fade-down" data-aos-delay="500"
              src="https://on-the-spot.loopgenius.com/static/img/trans_circle.png"
              loading="lazy"
              alt=""
              class="image-circle---9 box bounce-1 snipcss0-3-16-22 style-kScxM"
              id="style-kScxM"
            />
          </div>
          <div
            class="block-circle---hero-2 box bounce-1 snipcss0-2-15-23 style-6wEZA"
            id="style-6wEZA"
          >
            <img
            data-aos="fade-down" data-aos-delay="500"
              src="https://on-the-spot.loopgenius.com/static/img/orange_circle.png"
              loading="lazy"
              alt=""
              class="image-circle---1 box bounce-1 snipcss0-3-23-24 style-deEwL"
              id="style-deEwL"
            />
            <img
            data-aos="fade-down" data-aos-delay="500"
              src="https://on-the-spot.loopgenius.com/static/img/trans_circle.png"
              loading="lazy"
              alt=""
              class="image-circle---2 snipcss0-3-23-25 style-AwGmY"
              id="style-AwGmY"
            />
            <img 
            data-aos="fade-down" data-aos-delay="500"
              src="https://on-the-spot.loopgenius.com/static/img/trans_circle.png"
              loading="lazy"
              alt=""
              class="image-circle---3 snipcss0-3-23-26 style-bmidZ"
              id="style-bmidZ"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
