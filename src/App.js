import { GlobalStyle } from "./styles/GlobalStyle";
import Quote from "./sections/Quote";
import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";
import DesignSections from "./sections/DesignSections";
import DisplaySection from "./sections/DisplaySection";
import ProcessorSection from "./sections/ProcessorSection";
import BatterySections from "./sections/BatterySections";
import ColorSection from "./sections/ColorSection";
import CameraSection from "./sections/CameraSection";
import PricingSection from "./sections/PricingSection";

function App() {
  return (
    <>
      <GlobalStyle />
      <Quote />
      <PhoneModel />
      <HeroSection />
      <DesignSections />
      <DisplaySection />
      <ProcessorSection />
      <BatterySections />
      <ColorSection />
      <CameraSection />
      <PricingSection />
    </>
  );
}

export default App;
