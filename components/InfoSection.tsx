import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { DISPLAY_PHONE } from '../types';

const InfoSection: React.FC = () => {
  return (
    <section className="bg-white py-16" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Info Cards */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Visit Us</h2>
              <p className="mt-2 text-lg text-gray-600">
                We are located in the heart of Eldoret. Come taste the tradition.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                <MapPin className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">Address</h3>
                  <p className="text-gray-600">Outspan Centre</p>
                  <p className="text-gray-600">Eldoret, Kenya</p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                <Clock className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">Opening Hours</h3>
                  <p className="text-gray-600">Monday - Sunday</p>
                  <p className="text-gray-900 font-medium">10:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                <Phone className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">Contact & Orders</h3>
                  <p className="text-gray-600">Call or WhatsApp</p>
                  <a href={`tel:${DISPLAY_PHONE.replace(/\s/g, '')}`} className="text-red-600 font-bold hover:underline">
                    {DISPLAY_PHONE}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-96 w-full rounded-2xl overflow-hidden shadow-lg bg-gray-200 relative group">
            {/* Using a static placeholder image for map as google maps require API key */}
            <img 
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1600&auto=format&fit=crop" 
              alt="Eldoret Map Placeholder" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-xl text-center">
                <MapPin className="w-8 h-8 text-red-600 mx-auto mb-2 animate-bounce" />
                <p className="font-bold text-gray-900">Outspan Centre</p>
                <p className="text-xs text-gray-500">Eldoret</p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Outspan+Centre+Eldoret" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block mt-3 text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;