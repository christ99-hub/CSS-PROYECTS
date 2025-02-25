const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-content">
        <li className="footer-section">
          <h4>Contacto</h4>
          <p>contacto@empresa.com</p>
          <p>+34 123 456 789</p>
        </li>
        <li className="footer-section">
          <h4>Enlaces rápidos</h4>
          <a href="#hero">Inicio</a>
          <a href="#features">Características</a>
          <a href="#howitworks">Cómo funciona</a>
        </li>
        <li className="footer-section">
          <h4>Redes sociales</h4>
          
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          
        </li>
      </ul>
      <div className="footer-bottom">
        <p>© 2024 Nombre Empresa. Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
