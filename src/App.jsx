import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
