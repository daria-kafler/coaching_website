// components
import Navigation from './components/navigation.jsx';
import Hero from './components/hero.jsx';
import About from './components/about.jsx';
import Services from './components/services.jsx';
import Testimonials from './components/testimonials.jsx';
import Teamup from './components/teamup.jsx';

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Services />

      {/*Team up with me page is fooked on mobile and missing proper styling for now */}
      {/* <Teamup />  */}

      <Testimonials />
    </>
  );
}

export default App;
