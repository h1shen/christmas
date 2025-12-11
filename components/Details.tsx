import React from 'react';
import { Calendar, MapPin, Clock, Music } from 'lucide-react';
import { PARTY_INFO } from '../constants';

const Details: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-christmas-cream relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-christmas-red mb-4">The Details</h2>
          <p className="text-stone-600 italic">Join us for an evening of warmth, laughter, and holiday cheer.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Info Card */}
          <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-christmas-green space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-christmas-red/10 p-3 rounded-full text-christmas-red">
                <Calendar size={28} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-800">When</h3>
                <p className="text-gray-600 text-lg">{PARTY_INFO.date}</p>
                <p className="text-gray-500">{PARTY_INFO.weekday}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-christmas-red/10 p-3 rounded-full text-christmas-red">
                <Clock size={28} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-800">Time</h3>
                <p className="text-gray-600 text-lg">{PARTY_INFO.time}</p>
                <p className="text-gray-500">Come hungry & thirsty!</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-christmas-red/10 p-3 rounded-full text-christmas-red">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-800">Where</h3>
                <p className="text-gray-600 text-lg">{PARTY_INFO.locationName}</p>
                <p className="text-gray-500 text-sm">{PARTY_INFO.fullAddress}</p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PARTY_INFO.fullAddress)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-christmas-red underline mt-2 block text-sm hover:text-red-800 transition-colors"
                >
                  View on Map
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-christmas-red/10 p-3 rounded-full text-christmas-red">
                <Music size={28} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-800">The Vibe</h3>
                <p className="text-gray-600">
                  Elegant vintage. Think velvet, gold, and classic Christmas jazz. 
                  <br/>
                  <span className="text-sm italic text-christmas-green mt-1 block">
                    Venue: D Bldg, 18F, Unit A1805
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Decorative / Map Image Placeholder */}
          <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden shadow-xl group">
             {/* Map Integration Tip: For a real app, use Google Maps Embed API here. 
                 Since we don't have a Maps API key in this context, we'll link to it. */}
            <div className="absolute inset-0 bg-christmas-green/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
             <iframe 
               width="100%" 
               height="100%" 
               style={{border:0, minHeight: '400px'}}
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               // Using a generic embed for Shenzhen area as specific address might not resolve without valid API key in iframe for some regions
               // In production, use your specific Google Maps Embed API Key
               src={`https://maps.google.com/maps?q=${encodeURIComponent(PARTY_INFO.fullAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
               title="Party Location"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;