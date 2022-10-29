import { GlobalStyle } from "./styles/GlobalStyle";
import Quote from "./sections/Quote";
import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";
import DesignSections from "./sections/DesignSections";
import DisplaySection from "./sections/DisplaySection";
import ProcessorSection from "./sections/ProcessorSection";

function App() {
  return (
    <>
      <GlobalStyle />
      <Quote />
      {/* <PhoneModel /> */}
      <HeroSection />
      <DesignSections />
      <DisplaySection />
      <ProcessorSection />
    </>
  );
}

export default App;
