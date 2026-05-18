import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/hero';
import Projects from './pages/Projects';
import AboutMe from './components/AboutMe';
import Contact from './pages/Contact';
import Technologies from './pages/Technologies';
import Interests from './pages/Interests';

function App() {
  return (
    <>
      <Header />
      <div className='main'>
        <Hero />
        <AboutMe />
        <Projects />
        <Technologies />
        <Interests />
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;