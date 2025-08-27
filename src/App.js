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
      <Navbar />
      <Home />
      <About />
      {/* <Education/> */}
      <Experience />
      <Projects />
      <Contact />
      {/* <Experience /> */}
      {/* <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/Education" element={<Education />} />
          <Route exact path="/Skills" element={<Skills />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
