import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Navbar from '../components/NavBar/NavBar';
import Section from '../components/Section/Section';
import IntroSection from '../components/IntroSection/IntroSection';
import BackToTop from './Miscellaneous/BackToTop';
import About from './Section/About';
import Projects from './Section/Projects';
import Resume from './Section/Resume';
import Contact from './Section/Contact';
import Footer from './Miscellaneous/Footer';
import '../assets/css/main.css';

const Layout: React.FC = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <IntroSection />
      <Section idInp="about" heading="About Me">
        <About />
      </Section>
      <Section idInp="resume" heading="Resume">
        <Resume />
      </Section>
      <Section idInp="projects" heading="Projects">
        <Projects />
      </Section>
      <Section idInp="contact" heading="Contact me">
        <Contact />
      </Section>
      <Footer />
      <BackToTop />
    </Provider>
  );
}

export default Layout;