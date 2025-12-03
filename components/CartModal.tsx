import React from 'react';
import { X, Trash2, Smartphone, CheckCircle } from 'lucide-react';
import { CartItem, BUSINESS_PHONE, DISPLAY_PHONE, PAYBILL_NAME } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cart, updateQuantity, removeFromCart }) => {
  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Generate WhatsApp message for ordering
  const generateWhatsAppLink = () => {
    const orderDetails = cart.map(item => `${item.quantity}x ${item.name}`).join(', ');
    const text = `Hello AJ Iconic Chips, I would like to order: ${orderDetails}. Total: Ksh ${total}. I have sent payment via M-PESA.`;
    return `https://wa.me/${BUSINESS_PHONE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      <div className="absolute inset-y-0 right-0 max-w-md w-full flex">
        <div className="h-full w-full flex flex-col bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-6 bg-red-700 text-white sm:px-6">
            <h2 className="text-lg font-medium">Your Order</h2>
            <button onClick={onClose} className="p-2 hover:bg-red-800 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                <ShoppingBagIcon className="w-16 h-16 text-gray-300" />
                <p>Your cart is empty. Start crunching!</p>
                <button onClick={onClose} className="text-red-600 font-semibold hover:underline">
                  View Menu
                </button>
              </div>
            ) : (
              <ul className="space-y-6">
                {cart.map((item) => (
                  <li key={item.id} className="flex py-2">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">Ksh {item.price * item.quantity}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">Ksh {item.price} each</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border rounded-md">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-3 py-1 hover:bg-gray-100 disabled:opacity-50"
                            disabled={item.quantity <= 1}
                          >-</button>
                          <span className="px-2 font-semibold">{item.quantity}</span>
                          <button 
                             onClick={() => updateQuantity(item.id, 1)}
                             className="px-3 py-1 hover:bg-gray-100"
                          >+</button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="font-medium text-red-600 hover:text-red-500 flex items-center"
                        >
                          <Trash2 className="w-4 h-4 mr-1" /> Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer / Checkout */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6 bg-gray-50">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                <p>Total</p>
                <p className="text-xl font-bold text-red-700">Ksh {total}</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-yellow-200 mb-6 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <Smartphone className="w-5 h-5 mr-2 text-green-600" />
                  Payment Steps (M-PESA)
                </h3>
                <ol className="text-sm text-gray-600 list-decimal list-inside space-y-1">
                  <li>Go to <strong>M-PESA</strong> Menu on your phone.</li>
                  <li>Select <strong>Send Money</strong>.</li>
                  <li>Enter Phone: <strong className="text-gray-900 select-all">{DISPLAY_PHONE.replace(/\s/g, '')}</strong></li>
                  <li>Name check: <strong>{PAYBILL_NAME}</strong>.</li>
                  <li>Enter Amount: <strong>Ksh {total}</strong>.</li>
                  <li>Enter your PIN and Send.</li>
                </ol>
              </div>

              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center rounded-xl border border-transparent bg-green-600 px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-green-700 transition-colors"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Confirm Payment on WhatsApp
              </a>
              <p className="mt-4 text-center text-xs text-gray-500">
                Clicking above opens WhatsApp with your order details pre-filled.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper icon since I can't import the lucide one if I didn't verify it, but ShoppingBag is safe.
function ShoppingBagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

export default CartModal;