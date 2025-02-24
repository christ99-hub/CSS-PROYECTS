const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>contacto@empresa.com</p>
          <p>+34 123 456 789</p>
        </div>
        <div className="footer-section">
          <h4>Enlaces rápidos</h4>
          <a href="#hero">Inicio</a>
          <a href="#features">Características</a>
          <a href="#howitworks">Cómo funciona</a>
        </div>
        <div className="footer-section">
          <h4>Redes sociales</h4>
          <div className="social-links">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Nombre Empresa. Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
