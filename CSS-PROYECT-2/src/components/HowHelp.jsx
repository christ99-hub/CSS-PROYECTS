import React from 'react';

const HowHelp = () => {
  return (
    <section id="howhelp" className="help-section">
      <div className="help-content">
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc3VsdG9yaWF8ZW58MHx8MHx8fDA%3D"
          alt="Solución Integral"
          className="help-image fade-in"
        />
        <div>
          <h2 className="section-title-howhelp fade-in">Cómo Podemos Ayudarte</h2>
          <div className="ga-elements">
            <div className="ga-item fade-in">
              <h3>Consultoría Estratégica</h3>
              <p>Te asesoramos para optimizar procesos y crecer en el mercado.</p>
            </div>
            <div className="ga-item fade-in">
              <h3>Desarrollo Tecnológico</h3>
              <p>Implementamos soluciones digitales a medida para tu negocio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowHelp;
