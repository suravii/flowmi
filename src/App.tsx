import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import Features from "./Components/Features/Features";
import DownloadSection from "./Components/DownloadSection/DownloadSection";
import FAQ from "./Components/FAQ/FAQ";
import FlowmiBottom from "./Components/FlowmiBottom/FlowmiBottom";
import FooterSection from "./Components/FooterSection/FooterSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Features />
      <DownloadSection />
      <FAQ />
      <FlowmiBottom /> 
      <FooterSection />
    </div>
  );
};

export default App;
