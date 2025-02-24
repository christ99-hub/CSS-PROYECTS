const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ana Pérez",
      role: "CEO TechSolutions",
      text: "La mejor plataforma que hemos usado para nuestra gestión diaria",
      avatar: "👩💼",
    },
    {
      id: 2,
      name: "Carlos Gómez",
      role: "Diseñador UX",
      text: "Una experiencia de usuario realmente excepcional",
      avatar: "👨🎨",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2>Lo que dicen nuestros usuarios</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-avatar">{testimonial.avatar}</div>
            <p className="testimonial-text">{testimonial.text}</p>
            <h4>{testimonial.name}</h4>
            <small>{testimonial.role}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
