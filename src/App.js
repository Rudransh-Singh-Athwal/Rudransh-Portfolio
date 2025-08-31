import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import About from "./components/About";
// import Education from "./components/Education/Education";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contact";
import Experience from "./components/experience/Experience";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </nav>
      <div className="pt-16">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
