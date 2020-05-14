import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero.jsx';
import Footer from './Footer/Footer';
import HowItWorks from './HowItWorks/HowItWorks';
import Calculator from './Calculator/Calculator';
import GetStarted from './GetStarted/GetStarted';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Calculator />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;
