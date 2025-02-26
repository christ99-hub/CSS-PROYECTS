import React from 'react';

const PainPoints = () => {
  return (
    <section id="painpoints" className="pain-section">
      <h2 className="section-title fade-in">Desafíos Comunes</h2>
      <p className="pain-section-p fade-in">
        Muchos negocios enfrentan retos en la era digital. Descubre cómo superar obstáculos y aprovechar oportunidades para crecer.
      </p>
      <div className="pain-content">
        <div className="pain-text fade-in">
          <ul className="pain-list">
            <li>Falta de visibilidad en el mercado</li>
            <li>Ineficiencia en procesos internos</li>
            <li>Dificultad para adaptarse a nuevas tecnologías</li>
          </ul>
        </div>
      </div>
      <button className="cta-button pain-button fade-in">Ver casos de éxito</button>
    </section>
  );
};

export default PainPoints;
