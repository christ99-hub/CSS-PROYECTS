import  { useEffect, useRef } from "react";

const Hero = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      if (textRef.current) {
        textRef.current.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
      }

      if (buttonRef.current) {
        buttonRef.current.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      <div className="hero-content" ref={textRef}>
        <h1 className="animated-text">Transforma tu experiencia digital</h1>
        <p className="animated-subtext">
          Descubre una nueva forma de interactuar con la tecnología
        </p>
        <button
          ref={buttonRef}
          className="cta-button floating"
          onMouseEnter={() => buttonRef.current.classList.add("pulse")}
          onMouseLeave={() => buttonRef.current.classList.remove("pulse")}
        >
          Comenzar ahora
        </button>
      </div>
    </section>
  );
};

export default Hero;
