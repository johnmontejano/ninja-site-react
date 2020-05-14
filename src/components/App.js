import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero.jsx';
import HowItWorks from './HowItWorks/HowItWorks';
import Calculator from './Calculator/Calculator';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Calculator />
    </div>
  );
};

export default App;
