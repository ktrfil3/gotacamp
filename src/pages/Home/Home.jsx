import workList from "../../data/workList";
import blogList from "../../data/BlogList";
import React, { useEffect, useRef, useState } from "react"; // <--- Corregida la doble importación de React y useState
import { Link } from "react-router-dom";
import "./Home.css";

import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import Reviews from "../../components/Reviews/Reviews";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import StickyTitlesCarousel from "../../components/StickyTitlesCarousel/"; // <--- IMPORTACIÓN DEL NUEVO COMPONENTE

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

import Transition from "../../components/Transition/Transition";

const Home = () => {
  const workItems = Array.isArray(workList) ? workList : [];
  // ELIMINADAS las referencias stickyTitlesRef y titlesRef ya que ahora están en el componente Carousel
  const stickyWorkHeaderRef = useRef(null);
  const homeWorkRef = useRef(null);

  // NOTA: Si tenías lógica GSAP asociada a stickyTitlesRef y titlesRef, 
  // deberás adaptarla al nuevo componente StickyTitlesCarousel.

  return (
    <ReactLenis root>
      <div className="page home">
        <section className="hero">
          <div className="hero-img">
            <video 
              src="/home/C0996.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="hero-video"
            /> 
          </div>
          
          <div className="hero-header">
            <AnimatedCopy tag="h1" animateOnScroll={false} delay={0.7}>
              Recover your 
              health
            </AnimatedCopy>
            <AnimatedCopy tag="p" animateOnScroll={false} delay={0.7}>
              GotaCamp is a place where health is cultivated naturally and well-being is lived as a lifestyle
            </AnimatedCopy>
          </div>
        </section>
        <div className="scroll-down-indicator">
        <p>Scroll Down</p>
        <span className="arrow-down"></span>
        </div>
        {/* REEMPLAZO DE LA SECCIÓN ANTERIOR POR EL CARRUSEL */}
        <StickyTitlesCarousel />

        <section ref={stickyWorkHeaderRef} className="sticky-work-header">
          <AnimatedCopy tag="h1" animateOnScroll="true">
            “Dear friend, I pray that you may enjoy good health and that all may go well with you, even as your soul is getting along well”
            – 3 John 1:2 –
          </AnimatedCopy>
        </section>

        <section ref={homeWorkRef} className="home-work">
          <div className="home-work-list">
            {workItems.map((work, index) => (
              <Link
                to="/sample-project"
                key={work.id}
                className="home-work-item"
              >
                <p className="primary sm">{`${String(index + 1).padStart(
                  2,
                  "0"
                )} - ${String(workItems.length).padStart(2, "0")}`}</p>
                <h3>{work.title}</h3>
                <div className="work-item-img">
                  <img src={work.image} alt={work.title} />
                </div>
                <h4>{work.category}</h4>
              </Link>
            ))}
          </div>
        </section>

        <Reviews />

        <section className="hobbies">
          <div className="hobby">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Healing
            </AnimatedCopy>
          </div>
          <div className="hobby">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Well-being
            </AnimatedCopy>
          </div>
          <div className="hobby">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Hope
            </AnimatedCopy>
          </div>
          <div className="hobby">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Soul
            </AnimatedCopy>
          </div>
        </section>

          <section ref={homeWorkRef} className="home-work">
          <div className="blog">
            <AnimatedCopy tag="h1" animateOnScroll={true}>
              BLOG
            </AnimatedCopy>
          </div>
          <div className="home-work-list">
            {workItems.map((work, index) => (
              <Link
                to="/sample-project"
                key={work.id} // Corregido: asumí que workList y blogList comparten estructura, usando work.id en lugar de blogList.id
                className="home-work-item"
              >
                <p className="primary sm">{`${String(index + 1).padStart(
                  2,
                  "0"
                )} - ${String(workItems.length).padStart(2, "0")}`}</p>
                <h3>{work.title}</h3>
                <div className="work-item-img">
                  <img src={work.image} alt={work.title} />
                </div>
                <h4>{work.category}</h4>
              </Link>
            ))}
          </div>
        </section>

        <ContactForm />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Home);
