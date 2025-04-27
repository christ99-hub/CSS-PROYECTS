
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-container">
          <div className="moon"></div>
        </div>
        <p>LENTA</p>
        </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Support</a></li>
        <div className="separator"></div>
        <li><a href="#" className="contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

