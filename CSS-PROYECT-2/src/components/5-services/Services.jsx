
import React from 'react';

const Services = () => {
  const services = [
    { id: 1, title: 'Consultoría', image: 'https://plus.unsplash.com/premium_photo-1661774953651-d4f658a7e34d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29uc3VsdG9yaWF8ZW58MHx8MHx8fDA%3D' },
    { id: 2, title: 'Desarrollo', image: 'https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzYXJyb2xsb3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 3, title: 'Marketing', image: 'https://plus.unsplash.com/premium_photo-1683872921964-25348002a392?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D' },
  ];

  return (
    <section className="services-section" id="services">
      <h2 className="services-heading fade-in">Nuestros Servicios</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card fade-in">
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-overlay">
              <h3>{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
