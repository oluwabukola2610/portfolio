import "./App.css";
import About from "./component/About";
import Banner from "./component/Banner";
import Contact from "./component/Contact";
import Experience from "./component/Experience";
import Nav from "./component/Nav";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Social from "./component/Social";
const App = () => {
  return (
    <div className=' bg-site bg-no-repeat bg-cover overflow-hidden '>
      <Navbar />
      <Banner />
      <Social />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
