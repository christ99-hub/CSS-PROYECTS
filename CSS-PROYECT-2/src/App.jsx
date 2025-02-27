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

        <PainPoints />

        <HowHelp />

        <Services />

        <ServiceDetails />
      </main>
    </div>
  );
};

export default App;
