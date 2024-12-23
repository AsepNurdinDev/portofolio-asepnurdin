import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";
import Certificate from "./pages/Certificate";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      
      {/* Home */}
      <Home />

      {/* About */}
      <About />

      {/* Project */}
      <Projects />

      {/* Certificate */}
      <Certificate />

      {/* Experience */}
      <Experience />

      {/* Contacts */}
      <Contacts />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
