import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { DISPLAY_PHONE } from '../types';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-red-700 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1621447504864-d8686e12698c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 flex flex-col items-center text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-yellow-400 text-red-900 font-bold text-sm mb-6 animate-bounce">
          Since 2023
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-yellow-400 drop-shadow-lg">
          AJ ICONIC CHIPS JOINT
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-100 font-light">
          The crunchiest, golden-fried potato goodness in Eldoret. 
          Freshly made, iconic taste.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <Clock className="w-5 h-5 text-yellow-400 mr-2" />
            <span>Mon-Sun: 10:00am - 8:00pm</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <MapPin className="w-5 h-5 text-yellow-400 mr-2" />
            <span>Outspan Centre, Eldoret</span>
          </div>
          <a href={`tel:${DISPLAY_PHONE.replace(/\s/g, '')}`} className="flex items-center bg-yellow-500 hover:bg-yellow-400 text-red-900 px-6 py-2 rounded-lg transition-colors font-bold shadow-lg">
            <Phone className="w-5 h-5 mr-2" />
            Call: {DISPLAY_PHONE}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;