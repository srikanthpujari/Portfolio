import "./App.css";
import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Clients />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
