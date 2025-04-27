
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <div className="project-title">
      <h2>Explore Case</h2>
      <h3>View Projects</h3>
      </div>
      <p className="project-text">A digital studiofocusing on limitless creativity. Lenta involved in
        creating digita art, design, animation, or perhaps something
        even more unique. The ability to explorecreativity without
        limits opens up endless possibilities!</p>
      <ol className="project-list">
        <li className="project">
          <img src="../proyects3.png" alt="Project 1" />
          <p>A digital studio focusing on limitless creativity.
           Lenta involved in creating digital art, design, animation,</p>
        </li>
        <li className="project">
          <img src="../proyects1.png" alt="Project 2" />
          <p>A digital studio focusing on limitless creativity.
          Lenta involved in creating digital art, design, animation,</p>
        </li>
        <li className="project">
          <img src="../proyects2.png" alt="Project 3" />
          <p>A digital studio focusing on limitless creativity.
          Lenta involved in creating digital art, design, animation,</p>
        </li>
      </ol>
    </section>
  );
};

export default Projects;
