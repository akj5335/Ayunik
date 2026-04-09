import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/mockData';
import Button from '../components/ui/Button';
import { Trash2, ArrowRight } from 'lucide-react';

const Cart = () => {
  // Using mock data to simulate a cart for UI purposes
  const cartItems = [
    { ...products[0], quantity: 1 },
    { ...products[1], quantity: 2 }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="bg-[#F5F5DC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">Your Cart</h1>
          <div className="w-16 h-1 bg-[#C9A227] mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Cart Items List */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
              <div className="hidden sm:grid grid-cols-12 gap-4 p-6 border-b border-gray-100 text-sm font-semibold uppercase tracking-wider text-gray-500">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>
              
              <div className="divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <div key={item.id} className="grid grid-cols-1 sm:grid-cols-12 gap-0 sm:gap-4 items-center p-6 transition-colors hover:bg-gray-50">
                    <div className="col-span-1 border-b sm:border-0 pb-4 sm:pb-0 mb-4 sm:mb-0 sm:col-span-6 flex items-center">
                      <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded-sm border border-gray-100 flex-shrink-0" />
                      <div className="ml-4 flex-grow text-left">
                        <h3 className="font-serif font-medium text-lg text-gray-900 leading-tight mb-2 hover:text-[#2E7D32]">
                          <Link to={`/product/${item.id}`}>{item.name}</Link>
                        </h3>
                        <button className="text-sm text-red-500 flex items-center hover:text-red-700 transition-colors">
                          <Trash2 size={14} className="mr-1" /> Remove
                        </button>
                      </div>
                    </div>
                    
                    <div className="hidden sm:block col-span-2 text-center text-gray-600 font-medium">
                      ₹{item.price}
                    </div>
                    
                    <div className="col-span-1 flex justify-between sm:justify-center items-center sm:col-span-2">
                      <span className="sm:hidden text-gray-500 font-medium mr-4">Quantity:</span>
                      <div className="flex items-center border border-gray-300 w-24 rounded-sm overflow-hidden bg-white">
                        <button className="w-8 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100">-</button>
                        <span className="flex-1 text-center font-medium">{item.quantity}</span>
                        <button className="w-8 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100">+</button>
                      </div>
                    </div>
                    
                    <div className="col-span-1 flex justify-between sm:justify-end sm:col-span-2 mt-4 sm:mt-0 font-semibold text-lg text-[#2E7D32]">
                      <span className="sm:hidden text-gray-500 font-medium">Total:</span>
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6">
               <Link to="/shop" className="text-[#2E7D32] text-sm font-medium hover:underline flex items-center">
                  ← Continue Shopping
               </Link>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-sm shadow-sm p-8 sticky top-24 border-t-4 border-[#2E7D32]">
              <h2 className="font-serif text-2xl font-bold mb-6 text-gray-900">Order Summary</h2>
              
              <div className="space-y-4 text-gray-600 font-medium mb-8">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-gray-900">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-gray-900">Free</span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-[#2E7D32]">₹{total}</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">Tax included. Shipping calculated at checkout.</p>
              </div>

              <Button to="/checkout" className="w-full flex items-center justify-center py-4 text-lg">
                Proceed to Checkout <ArrowRight size={18} className="ml-2" />
              </Button>
              
              <div className="mt-6 text-center text-sm text-gray-500 flex items-center justify-center">
                 <ShieldCheck size={16} className="text-[#2E7D32] mr-2"/>
                 Secure Checkout Guarantee
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
