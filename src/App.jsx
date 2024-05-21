// components
import Navigation from './components/navigation.jsx';
import Hero from './components/hero.jsx';
import About from './components/about.jsx';
import Services from './components/services.jsx';
import Testimonials from './components/testimonials.jsx';
import Teamup from './components/teamup.jsx';
import Form from './components/form.jsx';
import Footer from './components/footer.jsx';
import ScrollToTopButton from './components/scrollToTopButton.jsx';
import 'react-tooltip/dist/react-tooltip.css';

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Teamup />
      <Services />
      <Testimonials />
      <Form />
      <Footer />
      <ScrollToTopButton />
      <div id="website-by">
        <a target="_blank" href="https://www.ataabatay.com/">
          website by Ata Abatay
        </a>
      </div>
    </>
  );
}

export default App;
