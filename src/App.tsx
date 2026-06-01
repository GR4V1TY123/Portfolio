import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
}
