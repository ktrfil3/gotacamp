import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const StickyTitlesCarousel = () => {
  const titles = [
    "What once saved her life now transforms the lives of others at GotaCamp!",
    "Twelve years of illness and failed treatments ended when she heard God’s voice and turned to natural medicine: in two weeks, she regained her health.",
    "Dr. Mario, along with Alejandra, a naturopath with years of experience, created GotaCamp: a space for more people to experience true healing and renewal."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    // Avanza el índice (vuelve a 0 después del último título)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
  };

  const goToPrev = () => {
    // Retrocede el índice (vuelve al final si está en 0)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + titles.length) % titles.length);
  };

  return (
    <section className="sticky-titles carousel-container">
      {/* Elementos de navegación Superior */}
      <div className="sticky-titles-nav">
        <p className="primary sm">About us</p>
        <p className="primary sm">Let’s Connect</p>
      </div>

      {/* Contenedor principal del carrusel (Contenido + Botones) */}
      <div className="carousel-content">
        {/* Botón de retroceso */}
        <button
          onClick={goToPrev}
          className="carousel-button prev"
          aria-label="Previous Slide"
        >
          <FaChevronLeft />
        </button>

        {/* Título actual (Wrapper para centrar y animar) */}
        <div className="carousel-title-wrapper">
          <h2 className="carousel-title">
            {titles[currentIndex]}
          </h2>
        </div>

        {/* Botón de avance */}
        <button
          onClick={goToNext}
          className="carousel-button next"
          aria-label="Next Slide"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Indicadores de diapositiva (Puntos de navegación) */}
      <div className="carousel-indicators">
        {titles.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></span>
        ))}
      </div>

      {/* Elementos de pie de página */}
      <div className="sticky-titles-footer">
        <p className="primary sm">Our Services</p>
        <p className="primary sm">Open Our Services</p>
      </div>
    </section>
  );
};

export default StickyTitlesCarousel;