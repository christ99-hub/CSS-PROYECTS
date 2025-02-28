import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-content">
        <div className="nav-brand">MiEmpresa</div>
        <div className="nav-links">
          <Link to="hero" smooth={true} className="nav-link">
            Inicio
          </Link>
          <Link to="painpoints" smooth={true} className="nav-link">
            Desafíos
          </Link>
          <Link to="howhelp" smooth={true} className="nav-link">
            Soluciones
          </Link>
          <Link to="services" smooth={true} className="nav-link">
            Servicios
          </Link>
          <Link to="serviceDetails" smooth={true} className="nav-link">
            Detalles
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
