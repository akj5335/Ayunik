import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import Button from './Button';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success(`${product.name} added to bag.`);
    // Optionally redirect: navigate('/cart');
  };
  return (
    <div className="group flex flex-col bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 relative">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10 bg-[#C9A227] text-white text-xs font-bold px-2 py-1 tracking-wider uppercase">
          {product.badge}
        </div>
      )}

      {/* Image container */}
      <Link to={`/product/${product.id}`} className="relative h-72 overflow-hidden bg-gray-50 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-[#2E7D32]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <Button onClick={handleAddToCart} variant="primary" size="sm" className="w-[80%] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
            <ShoppingBag size={16} className="mr-2" /> Add to Cart
          </Button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-5 flex flex-col flex-grow text-center">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg font-medium text-gray-900 mb-1 hover:text-[#2E7D32] transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <div className="mt-auto pt-3">
          <span className="text-md font-semibold text-[#2E7D32]">₹{product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
