import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-headline fade-in">Transforma tu negocio con innovación</h1>
          <p className="broad-script fade-in">
            Descubre soluciones únicas que impulsan tu éxito en el mundo digital.
          </p>
          <p className="brand-tagline fade-in">Innovación a tu alcance</p>
          <button className="cta-button fade-in">Descubre más</button>
        </div>
        <div className="hero-main-image-container fade-in">
          <img
            src="https://plus.unsplash.com/premium_photo-1663050756824-165ee7eafdac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5ub3ZhY2klQzMlQjNuJTIwdGVjbm9sb2clQzMlQURhfGVufDB8fDB8fHww"
            alt="Innovación"
            className="hero-main-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
