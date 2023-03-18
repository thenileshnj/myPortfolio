import Header from "./components/Header";
import HeroSec from "./components/HeroSec";
import IntroSec from "./components/IntroSec";
import TechSec from "./components/TechSec";
import Services from "./components/Services";
import WhyMe from "./components/WhyMe";
import Contact from "./components/Contact";
import FooterSec from "./components/FooterSec";


function App() {
  return (
    <>
      <Header />
      <HeroSec />
      <IntroSec />
      <TechSec />
      <Services />
      <WhyMe />
      {/* <Contact /> */}
      <FooterSec />
    </>
  );
}

export default App;
