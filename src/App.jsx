// components
import Navigation from './components/navigation.jsx';
import Hero from './components/hero.jsx';
import About from './components/about.jsx';
import Services from './components/services.jsx';
import Testimonials from './components/testimonials.jsx';
import Teamup from './components/teamup.jsx';
import Form from './components/form.jsx';

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
    </>
  );
}

export default App;
