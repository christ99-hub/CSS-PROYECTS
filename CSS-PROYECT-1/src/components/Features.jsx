const Features = () => {
  const features = [
    { id: 1, title: "Interfaz intuitiva", icon: "💡" },
    { id: 2, title: "Seguridad garantizada", icon: "🔒" },
    { id: 3, title: "Soporte 24/7", icon: "🛎️" },
    { id: 4, title: "Actualizaciones constantes", icon: "🔄" },
  ];

  return (
    <section className="features" id="features">
      <h2>Características destacadas</h2>
      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
