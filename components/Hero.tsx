import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import { PARTY_IMAGE_URL, PARTY_INFO } from '../constants';
import Countdown from './Countdown';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={PARTY_IMAGE_URL} 
          alt="Party Venue" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-christmas-red/90 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <p className="text-christmas-gold tracking-[0.2em] uppercase text-sm md:text-base mb-4 font-bold">
          You are cordially invited to
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-display font-bold mb-4 drop-shadow-lg">
          Christmas <br/>
          <span className="italic font-serif text-4xl md:text-6xl text-christmas-gold block mt-2">Party</span>
        </h1>
        
        <div className="w-24 h-1 bg-christmas-gold mx-auto my-6"></div>
        
        <p className="text-white text-xl md:text-2xl font-light tracking-wide mb-2">
          {PARTY_INFO.date}
        </p>
        <p className="text-white/90 text-lg md:text-xl">
          {PARTY_INFO.locationName}
        </p>

        <Countdown />

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-center">
          <a 
            href="#rsvp" 
            className="px-8 py-3 bg-christmas-gold hover:bg-yellow-500 text-christmas-red font-bold rounded-full transition-all transform hover:scale-105 shadow-lg uppercase tracking-wider min-w-[160px]"
          >
            RSVP Now
          </a>
          
          <button 
            onClick={handleShare}
            className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 min-w-[160px]"
          >
            {copied ? <Check size={18} /> : <Share2 size={18} />}
            <span>{copied ? 'Link Copied' : 'Share'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;