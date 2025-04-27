
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="h2-container">
      <div className="raya"></div>
      <h2 className="abouttitle"> About Studio</h2>
      </div>
      <p className="aboutmain_text">
        The Digital Project's Studio Entered This Market In 2013 To Meet The Demands
        Of Web Design And Development.
      </p>
      
        <img className="img" src="../About.png" alt="imagen2" />
      
      <div className="text-container">
      <p className="text">A digital studiofocusing on limitless creativity. Lenta involved in
        creating digita art, design, animation, or perhaps something
        even more unique. The ability to explorecreativity without
        limits opens up endless possibilities! 
        </p>
        <p className="text2">A digital studiofocusing on limitless creativity. Lenta involved in
        creating digita art, design, animation, or perhaps something
        even more unique. The ability to explorecreativity without
        limits opens up endless possibilities! </p>
        <div className="ten-style">
          <p className="p1">10</p>
          <p className="esperience">Years experience</p>
          <div className="slash"></div>
          <p className="p2">10</p>
          <p className="designed">Parts designed</p>
        
        </div>
      
      </div>
      
        <img className="img2" src="../About2.png" alt="imagen2" />
      
    </section>
  );
};

export default About;
