import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

// components
import Navigation from './components/navigation.jsx';
import Hero from './components/hero.jsx'
import About from './components/about.jsx';

function App() {

  return (
    <>
      <Navigation />
      <Hero />
      <About />
    </>
  );
}

export default App;
