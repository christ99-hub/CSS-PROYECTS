import './styles.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import HowHelp from './components/HowHelp';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';

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
