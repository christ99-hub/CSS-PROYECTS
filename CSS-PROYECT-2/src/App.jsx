import "./styles.css";
import Navigation from "./components/1-navigation/Navigation";
import Hero from "./components/2-hero/Hero";
import PainPoints from "./components/3-painPoints/PainPoints";
import HowHelp from "./components/4-howhelp/HowHelp";
import Services from "./components/5-services/Services";
import ServiceDetails from "./components/6-servicesDetails/ServiceDetails";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <div className="divider"></div>
        <PainPoints />
        <div className="divider"></div>
        <HowHelp />
        <div className="divider"></div>
        <Services />
        <div className="divider"></div>
        <ServiceDetails />
      </main>
    </div>
  );
};

export default App;
