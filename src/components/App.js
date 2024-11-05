import {
  Header,
  About,
  Partners,
  Projects,
  Services,
  Advantages,
  Feedbacks,
  Contact,
  Footer,
} from "./";

import { colors } from "../constants/colors";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const App = () => {
  return (
    <div className="main" style={{ marginTop: "85px" }}>
      <div className="header" style={{ backgroundColor: colors.primary }}>
        <Header id="header" />
      </div>
      {/* <section id="about" className="about"> */}
      <About />
      {/* </section> */}
      <section id="partners" className="partners">
        <Partners />
      </section>
      <section id="projects" className="projects">
        <Projects />
      </section>
      <section id="services" className="services">
        <Services />
      </section>
      <section id="advantages" className="advantages">
        <Advantages />
      </section>
      <section id="feedbacks" className="feedbacks">
        <Feedbacks />
      </section>
      <section id="contact" className="contact">
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
