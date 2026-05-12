import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-stone-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;