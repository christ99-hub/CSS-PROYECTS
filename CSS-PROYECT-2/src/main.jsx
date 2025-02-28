import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./components/1-navigation/Navigation.css"
import "./components/2-hero/Hero.css"
import "./components/3-painPoints/PainPoints.css"
import "./components/4-howhelp/HowHelp.css"
import "./components/5-services/Services.css"
import "./components/6-servicesDetails/ServiceDetails.css"
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
