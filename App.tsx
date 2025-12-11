import React from 'react';
import Hero from './components/Hero';
import Details from './components/Details';
import Assistant from './components/Assistant';
import Rsvp from './components/Rsvp';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Details />
      <Assistant />
      <Rsvp />
      <Footer />
    </div>
  );
};

export default App;