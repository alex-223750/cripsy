import React from 'react';
import { ChipPortion } from '../types';
import { ShoppingBag, Plus } from 'lucide-react';

interface MenuProps {
  addToCart: (item: ChipPortion) => void;
}

const portions: ChipPortion[] = [
  {
    id: 'p1',
    name: 'Quick Snack',
    price: 70,
    description: 'Perfect for a quick bite on the go.',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'p2',
    name: 'Regular Crunch',
    price: 100,
    description: 'Our standard serving. Satisfaction guaranteed.',
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'p3',
    name: 'Iconic Plate',
    price: 150,
    description: 'A hearty portion for the truly hungry.',
    image: 'https://images.unsplash.com/photo-1599557404456-626a57c5ce9c?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'p4',
    name: 'Mega Feast',
    price: 200,
    description: 'Share with a friend (or don\'t!). Massive portion.',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&auto=format&fit=crop&q=60'
  }
];

const Menu: React.FC<MenuProps> = ({ addToCart }) => {
  return (
    <section id="menu" className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-red-800 sm:text-4xl">
            Our Iconic Menu
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Select your size. Freshly fried upon order.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {portions.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute top-2 right-2 bg-yellow-400 text-red-900 font-bold px-3 py-1 rounded-full shadow-md">
                  Ksh {item.price}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                </div>
                <button
                  onClick={() => addToCart(item)}
                  className="w-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors active:scale-95"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;