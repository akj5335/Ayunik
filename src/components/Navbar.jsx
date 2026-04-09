import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#F5F5DC]/90 backdrop-blur-md border-b border-[#2E7D32]/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-serif text-3xl font-bold tracking-widest text-[#2E7D32]">
              AYUNIK
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-800 hover:text-[#2E7D32] px-3 py-2 text-sm font-medium transition-colors">Home</Link>
            <Link to="/shop" className="text-gray-800 hover:text-[#2E7D32] px-3 py-2 text-sm font-medium transition-colors">Shop</Link>
            <Link to="/about" className="text-gray-800 hover:text-[#2E7D32] px-3 py-2 text-sm font-medium transition-colors">About</Link>
            <Link to="/contact" className="text-gray-800 hover:text-[#2E7D32] px-3 py-2 text-sm font-medium transition-colors">Contact</Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-800 hover:text-[#2E7D32] transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <Link to="#" className="text-gray-800 hover:text-[#2E7D32] transition-colors">
              <User size={20} strokeWidth={1.5} />
            </Link>
            <Link to="/cart" className="text-gray-800 hover:text-[#2E7D32] transition-colors relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute -top-2 -right-2 bg-[#C9A227] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                2
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-4">
            <Link to="/cart" className="text-gray-800 hover:text-[#2E7D32] relative">
              <ShoppingBag size={24} strokeWidth={1.5} />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-[#2E7D32] focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F5F5DC] border-t border-[#2E7D32]/10 absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-800 hover:bg-[#e8f5e9] hover:text-[#2E7D32]">Home</Link>
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-800 hover:bg-[#e8f5e9] hover:text-[#2E7D32]">Shop</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-800 hover:bg-[#e8f5e9] hover:text-[#2E7D32]">About</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-800 hover:bg-[#e8f5e9] hover:text-[#2E7D32]">Contact</Link>
            <hr className="my-2 border-[#2E7D32]/10" />
            <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-800 flex items-center space-x-2">
              <User size={18} /> <span>Account</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
