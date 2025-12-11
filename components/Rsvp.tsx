import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Rsvp: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="rsvp" className="py-20 px-4 bg-christmas-cream">
      <div className="max-w-xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-2xl border-b-4 border-christmas-red relative overflow-hidden">
        
        {/* Festive corner decorations */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-christmas-red/5 rounded-bl-[100px] -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-christmas-green/5 rounded-tr-[100px] -ml-10 -mb-10"></div>

        <div className="text-center mb-10 relative z-10">
          <h2 className="text-4xl font-display text-christmas-red mb-2">RSVP</h2>
          <p className="text-gray-500">Please respond by December 15th</p>
        </div>

        {submitted ? (
          <div className="text-center py-12 animate-fade-in">
            <div className="inline-block p-4 bg-green-100 text-green-600 rounded-full mb-4">
              <CheckCircle size={48} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">You're on the list!</h3>
            <p className="text-gray-600">We can't wait to celebrate with you.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Your Name</label>
              <input 
                required 
                type="text" 
                className="w-full border-b-2 border-gray-200 p-2 focus:border-christmas-red focus:outline-none transition-colors bg-transparent"
                placeholder="Santa Claus"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Number of Guests</label>
              <select className="w-full border-b-2 border-gray-200 p-2 focus:border-christmas-red focus:outline-none transition-colors bg-transparent">
                <option>Just me</option>
                <option>Plus One (+1)</option>
                <option>Family (3)</option>
                <option>Family (4+)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Dietary Restrictions</label>
              <input 
                type="text" 
                className="w-full border-b-2 border-gray-200 p-2 focus:border-christmas-red focus:outline-none transition-colors bg-transparent"
                placeholder="e.g. Vegetarian, Allergies..."
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-christmas-red text-white font-bold py-4 rounded hover:bg-red-800 transition-all flex justify-center items-center gap-2 shadow-lg mt-8"
            >
              <span>Confirm Attendance</span>
              <Send size={18} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Rsvp;