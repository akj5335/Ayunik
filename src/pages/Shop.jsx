import React, { useState } from 'react';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/mockData';
import { SlidersHorizontal } from 'lucide-react';

const Shop = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Serums', 'Cleansers', 'Toners', 'Moisturizers'];
  
  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="bg-[#F5F5DC] min-h-screen pb-24">
      {/* Header Banner */}
      <div className="bg-[#1b5e20] py-20 text-center border-b-[4px] border-[#C9A227]">
        <h1 className="font-serif text-5xl font-bold text-white mb-4">Our Collection</h1>
        <p className="text-[#F5F5DC]/80 max-w-2xl mx-auto font-light px-4">
          Pure, potent, and proven. Browse our complete range of Ayurvedic skincare rituals.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-6 border-b border-[#2E7D32]/20 gap-6">
          <div className="flex items-center w-full overflow-x-auto pb-2 md:pb-0 hide-scrollbar space-x-2 md:space-x-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-[#2E7D32] text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-[#e8f5e9] border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-3 self-end md:self-auto min-w-max">
            <SlidersHorizontal size={18} className="text-gray-500" />
            <select className="bg-transparent border-none text-gray-700 text-sm font-medium focus:ring-0 cursor-pointer">
              <option>Sort by: Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No products found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
