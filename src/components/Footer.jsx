import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1b5e20] text-[#F5F5DC] pt-0 pb-8 border-t-[6px] border-[#C9A227]">
      {/* USP Marquee */}
      <div className="bg-[#164a18] text-[#C9A227] py-4 overflow-hidden flex whitespace-nowrap mb-16 border-b border-[#2E7D32]/30">
        <div className="animate-marquee inline-flex tracking-widest text-sm font-sans uppercase font-bold items-center space-x-12 px-6">
          <span>🌿 100% Natural</span>
          <span>🐰 Cruelty-Free & Vegan</span>
          <span>🧪 Toxin-Free Guarantee</span>
          <span>🏺 Ayurvedic Wisdom</span>
          <span>✋ Handcrafted Potency</span>
          <span>✨ Certified Quality</span>
          
          {/* Duplicate set for seamless continuous marquee */}
          <span aria-hidden="true">🌿 100% Natural</span>
          <span aria-hidden="true">🐰 Cruelty-Free & Vegan</span>
          <span aria-hidden="true">🧪 Toxin-Free Guarantee</span>
          <span aria-hidden="true">🏺 Ayurvedic Wisdom</span>
          <span aria-hidden="true">✋ Handcrafted Potency</span>
          <span aria-hidden="true">✨ Certified Quality</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-serif text-3xl font-bold tracking-widest text-[#C9A227] mb-4">AYUNIK</h2>
            <p className="text-sm text-[#F5F5DC]/80 leading-relaxed mb-6">
              Herbal luxury skincare inspired by Ayurveda. Discover the power of natural ingredients for healthy, glowing skin.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#F5F5DC] hover:text-[#C9A227] transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
              <a href="#" className="text-[#F5F5DC] hover:text-[#C9A227] transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
              <a href="#" className="text-[#F5F5DC] hover:text-[#C9A227] transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-semibold text-lg tracking-wider mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-[#F5F5DC]/80 hover:text-white transition-colors text-sm">Shop All</Link></li>
              <li><Link to="#" className="text-[#F5F5DC]/80 hover:text-white transition-colors text-sm">Best Sellers</Link></li>
              <li><Link to="#" className="text-[#F5F5DC]/80 hover:text-white transition-colors text-sm">Our Story</Link></li>
              <li><Link to="#" className="text-[#F5F5DC]/80 hover:text-white transition-colors text-sm">Journal / Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-sans font-semibold text-lg tracking-wider mb-4 uppercase">Support</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-[#F5F5DC]/80 hover:text-white transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="#" className="text-[#F5F5DC]/80 hover:text-white transition-colors text-sm">Shipping & Returns</Link></li>
              <li><Link to="#" className="text-[#F5F5DC]/80 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="#" className="text-[#F5F5DC]/80 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-sans font-semibold text-lg tracking-wider mb-4 uppercase">Join The Club</h3>
            <p className="text-sm text-[#F5F5DC]/80 mb-4">Subscribe for exclusive offers, authentic Ayurvedic tips, and 10% off your first order.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent border-b border-[#F5F5DC]/30 py-2 px-1 text-sm text-[#F5F5DC] focus:outline-none focus:border-[#C9A227] w-full"
              />
              <button type="submit" className="text-[#C9A227] hover:text-white ml-2 transition-colors">
                <Mail size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-[#F5F5DC]/10 text-center text-xs text-[#F5F5DC]/60">
          <p>&copy; {new Date().getFullYear()} Ayunik Skincare. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
