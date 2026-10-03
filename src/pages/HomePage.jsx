import Hero from '../sections/Hero.jsx';
import SelectedProjects from '../sections/SelectedProjects.jsx';
import About from '../sections/About.jsx';
import Skills from '../sections/Skills.jsx';
import Experience from '../sections/Experience.jsx';
import Contact from '../sections/Contact.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedProjects />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
