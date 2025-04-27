import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import TimelineDetails from "./components/TimelineDetails";
import Footer from "./components/Footer";
import "./index.css";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Timeline />
      <TimelineDetails />
      <Footer />
    </div>
  );
}

export default App;
