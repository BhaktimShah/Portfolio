import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";

import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Services />
        <Skills />
        <Portfolio />

        <Resume />
        

        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
