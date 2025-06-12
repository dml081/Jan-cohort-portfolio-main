import About from "../component/About";
import Herosection from "../component/Herosection";
import Services from "../component/Services";
import Stat from "../component/Stat";
import Testimonials from "../component/Testimonials";

const Homepage = () => {
  return (
    <div>
      <Herosection />
      <About />
      <Services />
      <Stat />
      <Testimonials/>
    </div>
  );
};

export default Homepage;
