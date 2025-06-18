import About from "./sections/About";
import Navbar from "./components/Navbar";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Projects from "./sections/Projects";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
      // checking local storage 
      const savedTheme = localStorage.getItem('theme');
      const isDark = savedTheme === 'dark';
      setIsDark(isDark);
      document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
      const newTheme = !isDark;
      setIsDark(newTheme);
      document.documentElement.classList.toggle('dark', newTheme);
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <div >
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <About isDark={isDark} />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;