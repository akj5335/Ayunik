import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Button from './ui/Button';

const NewsletterModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 3 seconds, but only if they haven't seen it in this session.
    // Simulating session storage logic using basic state for UI demo purposes.
    const timer = setTimeout(() => {
      const hasSeenModal = sessionStorage.getItem('ayunik_newsletter_seen');
      if (!hasSeenModal) {
        setIsOpen(true);
        sessionStorage.setItem('ayunik_newsletter_seen', 'true');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Modal Content */}
      <div className="bg-[#F5F5DC] w-full max-w-4xl relative z-10 flex flex-col md:flex-row rounded-sm overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-20 text-gray-400 hover:text-gray-900 transition-colors bg-white/50 backdrop-blur-sm rounded-full p-2"
        >
          <X size={20} />
        </button>

        {/* Image Side */}
        <div className="hidden md:block w-1/2 relative bg-gray-100">
          <img 
            src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800" 
            alt="Ayurvedic glow" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Side */}
        <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-white">
          <p className="text-[#C9A227] font-semibold tracking-[0.2em] uppercase text-xs mb-4">Welcome to Ayunik</p>
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
            Take 10% Off Your First Ritual
          </h2>
          <p className="text-gray-600 font-light mb-8">
            Join our conscious community and unlock exclusive offers, authentic Ayurvedic insights, and early access to new launches.
          </p>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
            <input 
              type="email" 
              required
              placeholder="Your email address" 
              className="w-full border-b-2 border-gray-200 px-2 py-3 focus:outline-none focus:border-[#2E7D32] transition-colors bg-transparent"
            />
            <Button type="submit" className="w-full py-4 relative top-2">
              Unlock My 10% Off
            </Button>
          </form>

          <p className="text-xs text-gray-400 mt-6 text-center">
            By signing up, you agree to receive marketing emails. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;
