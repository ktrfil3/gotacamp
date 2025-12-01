import React from "react";
import "./About.css";

import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";

const About = () => {
  return (
    <ReactLenis root>
      <div className="page about">
        <section className="about-header">
          <h1>Est</h1>
          <h1>2020</h1>
        </section>

        <section className="about-hero">
          <div className="about-hero-img">
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/1118524876?h=3f8c680711" width="640" height="360" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   allowfullscreen></iframe>
          </div>
        </section>

        <section className="about-me-copy">
          <div className="about-me-copy-wrapper">
            <AnimatedCopy animateOnScroll={true} tag="h3">
             Your journey to a healthier life begins here
            </AnimatedCopy>

            <AnimatedCopy animateOnScroll={true} tag="h3">
              GOTA Camp was born out of a mission: to restore health, renew hope, and guide people toward a fulfilling life in a Christian environment.
            </AnimatedCopy>

            <AnimatedCopy animateOnScroll={true} tag="h3">
              In a 73-acre natural paradise in the Temecula Valley, we design wellness programs and transformative retreats that invite you to reconnect with nature, heal your body, and strengthen your spirit.
            </AnimatedCopy>
          </div>
        </section>

        <section className="services">
          <div className="services-col">
            <div className="services-banner">
              <img src="/about/Mario_Alejandra.webp" alt="" />
            </div>
          </div>
          <div className="services-col">
            <h4>
             Founded by Dr. Mario and Alejandra Robinson
            </h4>

            <div className="services-list">
              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>live longer</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    Our mission is to empower people to live longer, healthier, and more fulfilling lives. 
                    Driven by our unwavering dedication, we strive to guide individuals on a transformative 
                    journey toward discovering their purpose and experiencing true vitality.
                  </p>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>healing in a Christian environment</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    Camp GOTA was founded by Dr. Mario Robinson and Alejandra Robinson, 
                    who share a deep commitment to restoring well-being, fostering hope, 
                    and facilitating healing in a Christian environment. 
                  </p>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>lifestyle changes</h5>
                </div>
                <div className="service-list-col">
                  <p>
                    With a combined experience of nearly two decades, 
                    the Robinsons have successfully helped countless individuals, 
                    empowering them through lifestyle changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-banner-img">
          <div className="about-banner-img-wrapper">
            <img src="/about/casa.webp" alt="" />
          </div>
        </section>

        <ContactForm />

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(About);
