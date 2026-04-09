import React, { useState } from 'react';
import { products } from '../data/mockData';
import Button from '../components/ui/Button';
import { ShieldCheck, CreditCard, Lock, CheckCircle } from 'lucide-react';

const Checkout = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  const cartItems = [
    { ...products[0], quantity: 1 },
    { ...products[1], quantity: 2 }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const total = subtotal;

  if (isCompleted) {
    return (
      <div className="bg-[#F5F5DC] min-h-screen py-24 flex items-center justify-center">
        <div className="bg-white p-12 rounded-sm shadow-sm text-center max-w-lg mx-4">
          <div className="w-20 h-20 bg-[#e8f5e9] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-[#2E7D32]" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 font-light mb-8">
            Thank you for shopping with AYUNIK. Your herbal luxury skincare is being prepared for you. We will send an email confirmation shortly.
          </p>
          <Button to="/shop" className="w-full">
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F5F5DC] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-bold text-center mb-10 text-[#2E7D32]">Secure Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Checkout Form */}
          <div className="lg:w-2/3">
            <form className="space-y-8">
              
              {/* Contact Info */}
              <div className="bg-white p-8 rounded-sm shadow-sm">
                <h2 className="font-serif text-xl font-bold mb-6 text-gray-900 border-b pb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] rounded-sm transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="flex items-center mt-2">
                    <input type="checkbox" id="newsletter" className="w-4 h-4 text-[#2E7D32] focus:ring-[#2E7D32] border-gray-300 rounded" />
                    <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-600">
                      Email me with news and offers
                    </label>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white p-8 rounded-sm shadow-sm">
                <h2 className="font-serif text-xl font-bold mb-6 text-gray-900 border-b pb-4">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input type="text" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#C9A227] rounded-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <input type="text" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#C9A227] rounded-sm" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                    <input type="text" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#C9A227] rounded-sm" placeholder="Street address, P.O. box, company name, c/o" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Apartment, suite, etc. (optional)</label>
                    <input type="text" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#C9A227] rounded-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                    <input type="text" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#C9A227] rounded-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State / Province *</label>
                    <input type="text" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#C9A227] rounded-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ZIP / Postal Code *</label>
                    <input type="text" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#C9A227] rounded-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input type="tel" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#C9A227] rounded-sm" />
                  </div>
                </div>
              </div>

              {/* Payment Section */}
              <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-[#2E7D32]">
                <h2 className="font-serif text-xl font-bold mb-6 text-gray-900 border-b pb-4 flex items-center justify-between">
                  Payment
                  <div className="flex space-x-2 text-gray-400">
                    <CreditCard size={24} />
                    <Lock size={20} className="text-[#2E7D32]" />
                  </div>
                </h2>
                <div className="bg-gray-50 p-4 border border-gray-200 rounded-sm text-center mb-6 text-sm text-gray-600">
                  <p>This is a simulated demo environment. No real payment will be processed.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="border border-[#2E7D32] rounded-sm p-4 bg-[#e8f5e9] flex items-center">
                    <input type="radio" id="credit_card" name="payment" className="h-4 w-4 text-[#2E7D32] focus:ring-[#2E7D32] border-gray-300" defaultChecked />
                    <label htmlFor="credit_card" className="ml-3 block text-sm font-medium text-gray-900">
                      Credit / Debit Card
                    </label>
                  </div>
                  <div className="border border-gray-300 rounded-sm p-4 flex items-center hover:bg-gray-50 transition-colors">
                    <input type="radio" id="upi" name="payment" className="h-4 w-4 text-[#2E7D32] focus:ring-[#2E7D32] border-gray-300" />
                    <label htmlFor="upi" className="ml-3 block text-sm font-medium text-gray-900">
                      UPI / Wallet
                    </label>
                  </div>
                  <div className="border border-gray-300 rounded-sm p-4 flex items-center hover:bg-gray-50 transition-colors">
                    <input type="radio" id="cod" name="payment" className="h-4 w-4 text-[#2E7D32] focus:ring-[#2E7D32] border-gray-300" />
                    <label htmlFor="cod" className="ml-3 block text-sm font-medium text-gray-900">
                      Cash on Delivery
                    </label>
                  </div>
                </div>

                <div className="mt-8">
                  <Button type="button" onClick={() => setIsCompleted(true)} className="w-full py-4 text-lg font-bold shadow-lg">
                    Complete Order
                  </Button>
                </div>
              </div>

            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-sm shadow-sm p-6 sticky top-24">
              <h2 className="font-serif text-xl font-bold mb-6 text-gray-900 border-b pb-4">In Your Bag</h2>
              
              <div className="space-y-6 mb-8 max-h-96 overflow-y-auto pr-2">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-start">
                    <div className="relative">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-sm border border-gray-100" />
                      <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-[#2E7D32] transition-colors">{item.name}</h4>
                      <p className="text-gray-500 text-sm mt-1">₹{item.price}</p>
                    </div>
                    <div className="text-sm font-bold ml-2">
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3 text-sm text-gray-600 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium text-gray-900">Free</span>
                </div>
                <div className="pt-4 flex justify-between border-t border-gray-200 mt-2">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-[#2E7D32]">₹{total}</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-sm border border-gray-200 flex items-center text-sm text-gray-600">
                 <ShieldCheck size={20} className="text-[#C9A227] mr-3 shrink-0" />
                 <p>Your payment information is encrypted and secure.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
