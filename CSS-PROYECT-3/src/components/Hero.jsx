
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-circle">
        <span className="circle-label project">Project</span>
        <div className="line"></div>
        <button className="circle-play">▶</button>
        <span className="circle-label aboutt">About</span>
      </div>
      <h1>STUDIO</h1>
      <p className="herotext">
        A digital studio focusing on limitless creativity. Lenta is involved in creating
        digital art, design, animation, or perhaps something even more unique.The ability
        to explore creativity without limits opens up endless possibilities!
      </p>
      <div className="subscribe">
        <input type="email" placeholder="Subscribe with email" />
        <button>→</button>
      </div>
    </section>
  );
};

export default Hero;

