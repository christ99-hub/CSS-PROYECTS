import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Registro",
      description: "Crea tu cuenta en simples pasos",
      icon: "📝",
    },
    {
      id: 2,
      title: "Configuración",
      description: "Personaliza tu experiencia",
      icon: "⚙️",
    },
    { 
      id: 3, 
      title: "Disfruta", 
      description: "Comienza a usar la plataforma",
      icon: "🎉",
    },
  ];

  return (
    <section className="how-it-works" id="howitworks">
      <h2>Cómo funciona nuestra plataforma</h2>
      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.id} className="step-card">
            <div className="step-header">
              <div className="step-number">{step.id}</div>
              <div className="step-icon">{step.icon}</div>
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <div className="step-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;