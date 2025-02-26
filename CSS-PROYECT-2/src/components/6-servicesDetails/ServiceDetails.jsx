const ServiceDetails = () => {
  const serviceDetails = [
    {
      id: 1,
      title: "Consultoría Estratégica",
      description:
        "Asesoramiento experto para transformar tu negocio y adaptarlo a la era digital.",
      features: [
        "Análisis de mercado",
        "Planificación estratégica",
        "Implementación tecnológica",
      ],
    },
    {
      id: 2,
      title: "Desarrollo a Medida",
      description:
        "Soluciones de software personalizadas que mejoran la eficiencia y productividad.",
      features: [
        "Aplicaciones web",
        "Aplicaciones móviles",
        "Integraciones API",
      ],
    },
    {
      id: 3,
      title: "Marketing Digital",
      description:
        "Campañas creativas que conectan con tu audiencia y potencian tu marca.",
      features: [
        "SEO & SEM",
        "Gestión de redes sociales",
        "Estrategias de contenido",
      ],
    },
  ];

  return (
    <section className="service-details" id="serviceDetails">
      <h2 className="service-header fade-in">Nuestros Servicios en Detalle</h2>
      <div className="details-container">
        {serviceDetails.map((detail) => (
          <div key={detail.id} className="detail-card fade-in">
            <div className="detail-content">
              <h3>{detail.title}</h3>
              <p>{detail.description}</p>
              <ul className="feature-list">
                {detail.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="explore-button">Saber más</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceDetails;
