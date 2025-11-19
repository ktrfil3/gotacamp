import React from "react";
import "./Project.css";

import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";

const Project = () => {
  return (
    <ReactLenis root>
      <div className="page project">
        <section className="project-header">
          <AnimatedCopy
            delay={1}
            animateOnScroll={false}
            className="primary sm"
          >
            Discover what your blood reveals about your well-being.
          </AnimatedCopy>
          <AnimatedCopy tag="h2" delay={1}>
            In-Person Consultation
          </AnimatedCopy>
        </section>

        <section className="project-banner-img">
          <div className="project-banner-img-wrapper">
            <ParallaxImage src="/work/enfermera.jpg" alt="" />
          </div>
        </section>

        <section className="project-details">
          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Overview
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Experience a comprehensive evaluation with Alejandra Robinson, co-founder of GOTA Camp and a live blood microscopy specialist. In a personalized one-hour session, you’ll receive:
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Live blood analysis to detect imbalances and risks.
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Comprehensive health assessment tailored to your needs.
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              Personalized recommendations to improve your well-being and energy.
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              💲 Fee:
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              $250 (includes blood analysis)
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              📍 Modality:
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
               In-person
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              📅 Duration:
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
               1 hour
            </AnimatedCopy>
          </div>
        </section>

        <section className="project-images">
          <div className="project-images-container">
            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/project-1.jpg" alt="" />
              </div>
            </div>

            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/project-2.jpg" alt="" />
              </div>
            </div>

            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/project-3.jpg" alt="" />
              </div>
            </div>

            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/project-4.jpg" alt="" />
              </div>
            </div>

            <div className="project-img">
              <div className="project-img-wrapper">
                <ParallaxImage src="/project/project-5.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="project-details">
          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              More
            </AnimatedCopy>
            <AnimatedCopy tag="h3" animateOnScroll={true}>
              Book your appointment directly online or request additional dates by calling 760-892-4682.
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
             Discover what your blood reveals about your well-being.
            </AnimatedCopy>
          </div>
        </section>

        <section className="next-project">
          <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
            02 - 05
          </AnimatedCopy>
          <AnimatedCopy tag="h3" animateOnScroll={true}>
            Next
          </AnimatedCopy>

          <div className="next-project-img">
            <div className="next-project-img-wrapper">
              <ParallaxImage src="/work/plato.jpg" alt="" />
            </div>
          </div>

          <AnimatedCopy tag="h4" animateOnScroll={true}>
            7-Day Detox Retreats
          </AnimatedCopy>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Transition(Project);
