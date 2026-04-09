import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Leaf, Sparkles, ArrowRight, Rabbit, Sprout, FlaskConicalOff } from 'lucide-react';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import { products, reviews } from '../data/mockData';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-[#F5F5DC]">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&q=80&w=2000" 
          alt="Natural Skincare Hero" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-[#1b5e20]/60 to-transparent"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <p className="text-[#F5F5DC] uppercase tracking-[0.3em] text-sm font-medium mb-4">Discover True Radiance</p>
          <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 drop-shadow-md">
            Herbal Luxury <br/> for Every Skin
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Experience the ancient wisdom of Ayurveda blended with modern botanical science for naturally glowing, healthy skin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button to="/shop" size="lg" className="w-full sm:w-auto">
              Shop Now <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button to="/story" variant="outlineGold" size="lg" className="w-full sm:w-auto bg-black/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[#2E7D32]">
              Our Ingredients
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Benefits */}
      <section className="py-20 bg-white border-b border-[#2E7D32]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Existing USPs */}
            <div className="flex flex-col items-center p-6 transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#e8f5e9] text-[#2E7D32] rounded-full flex items-center justify-center mb-6">
                <Leaf size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">100% Natural</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Formulated exclusively with pure, organic plant extracts and essential oils. No harmful chemicals.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#e8f5e9] text-[#2E7D32] rounded-full flex items-center justify-center mb-6">
                <Sparkles size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">Ayurvedic Wisdom</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Ancient recipes balanced with traditional methods to restore your skin's natural harmony.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#e8f5e9] text-[#2E7D32] rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">Certified Quality</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Cruelty-free, dermatologically tested, and packaged with sustainable, eco-friendly materials.
              </p>
            </div>

            {/* New Added USPs */}
            <div className="flex flex-col items-center p-6 transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#e8f5e9] text-[#2E7D32] rounded-full flex items-center justify-center mb-6">
                <Rabbit size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">100% Vegan</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Never tested on animals. Completely cruelty-free and heavily plant-based components.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#e8f5e9] text-[#2E7D32] rounded-full flex items-center justify-center mb-6">
                <Sprout size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">Handcrafted Potency</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Made in small batches to preserve the vital energy and efficacy of natural herbs.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#e8f5e9] text-[#2E7D32] rounded-full flex items-center justify-center mb-6">
                <FlaskConicalOff size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">Toxin-Free Guarantee</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Zero parabens, sulfates, silicones, or synthetic fragrances. Pure safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Curated Favorites</h2>
            <div className="w-24 h-1 bg-[#C9A227] mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto font-light">
              Explore our most loved Ayurvedic remedies, crafted to perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button to="/shop" variant="secondary" size="lg">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#1b5e20] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4 text-[#C9A227]">Ayunik Stories</h2>
            <p className="text-white/80 font-light">Hear what our conscious community has to say.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {reviews.map(review => (
              <div key={review.id} className="bg-white/5 border border-white/10 p-8 text-center backdrop-blur-sm rounded-sm">
                <div className="flex justify-center mb-4 text-[#C9A227]">
                  {[1,2,3,4,5].map(star => (
                    <span key={star}>★</span>
                  ))}
                </div>
                <p className="font-serif text-xl italic text-white/90 mb-6 leading-relaxed">"{review.text}"</p>
                <div className="text-sm tracking-wider uppercase font-medium">{review.user}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
