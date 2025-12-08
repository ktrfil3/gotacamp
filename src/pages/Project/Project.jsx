import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Project.css";
import projectDetails from "../../data/projectDetails";

import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import ReactLenis from "lenis/react";
import Transition from "../../components/Transition/Transition";

const Project = () => {
  const { id } = useParams();
  // Default to project 1 if no ID or not found (for safety, though routing should handle it)
  const projectId = parseInt(id) || 1;
  const project = projectDetails.find((p) => p.id === projectId) || projectDetails[0];

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) return null;

  return (
    <ReactLenis root>
      <div className="page project">
        <section className="project-header">
          <AnimatedCopy
            delay={1}
            animateOnScroll={false}
            className="primary sm"
          >
            {project.subtitle}
          </AnimatedCopy>
          <AnimatedCopy tag="h2" delay={1}>
            {project.title}
          </AnimatedCopy>
        </section>

        <section className="project-banner-img">
          <div className="project-banner-img-wrapper">
            <ParallaxImage src={project.heroImage} alt={project.title} />
          </div>
        </section>

        <section className="project-details">
          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Overview
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              {project.overview}
            </AnimatedCopy>

            {project.benefits.map((benefit, index) => (
              <AnimatedCopy key={index} tag="h4" animateOnScroll={true}>
                {benefit}
              </AnimatedCopy>
            ))}
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              💲 Basic Plan:
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              {project.Basic}
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              💲 Premium Plan:
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              {project.Premium}
            </AnimatedCopy>
          </div>
          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              💲 Early Bird Discount:
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              {project.EarlyBirdDiscount}
            </AnimatedCopy>
          </div>


          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              📍 Modality:
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              {project.modality}
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              📅 Duration:
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              {project.duration}
            </AnimatedCopy>
          </div>
        </section>

        <section className="project-images">
          <div className="project-images-container">
            {project.gallery.map((imgSrc, index) => (
              <div className="project-img" key={index}>
                <div className="project-img-wrapper">
                  <ParallaxImage src={imgSrc} alt="" />
                </div>
              </div>
            ))}
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

        <Link to={`/project/${project.nextProject.id}`}>
          <section className="next-project">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              {project.nextProject.subtitle}
            </AnimatedCopy>
            <AnimatedCopy tag="h3" animateOnScroll={true}>
              Next
            </AnimatedCopy>

            <div className="next-project-img">
              <div className="next-project-img-wrapper">
                <ParallaxImage src={project.nextProject.image} alt={project.nextProject.title} />
              </div>
            </div>

            <AnimatedCopy tag="h4" animateOnScroll={true}>
              {project.nextProject.title}
            </AnimatedCopy>
          </section>
        </Link>
      </div>
    </ReactLenis>
  );
};

export default Transition(Project);
