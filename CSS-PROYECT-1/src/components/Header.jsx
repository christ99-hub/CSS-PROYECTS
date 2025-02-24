import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / windowHeight) * 100);
    };

    window.addEventListener("scroll", calculateScrollProgress);
    return () => window.removeEventListener("scroll", calculateScrollProgress);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      ></div>
      <nav>
        <ul className="nav-menu">
          <li>
            <a href="#hero" className="nav-link">
              Inicio
            </a>
          </li>
          <li>
            <a href="#howitworks" className="nav-link">
              Cómo funciona
            </a>
          </li>
          <li>
            <a href="#features" className="nav-link">
              Características
            </a>
          </li>
          <li>
            <a href="#testimonials" className="nav-link">
              Testimonios
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
