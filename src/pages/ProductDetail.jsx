import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/mockData';
import Button from '../components/ui/Button';
import { Check, Star, Truck, RefreshCw, ShieldCheck, Rabbit, FlaskConicalOff } from 'lucide-react';
import toast from 'react-hot-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="text-center py-40">Product not found. <Link to="/shop" className="text-[#2E7D32]">Back to shop</Link></div>;
  }

  return (
    <div className="bg-[#F5F5DC] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8 flex space-x-2">
          <Link to="/" className="hover:text-[#2E7D32]">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[#2E7D32]">Shop</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="bg-white rounded-sm shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            
            {/* Image Gallery */}
            <div className="bg-gray-50 aspect-square md:aspect-auto h-full flex items-center justify-center p-8 md:p-12 relative overflow-hidden group">
               {product.badge && (
                  <div className="absolute top-6 left-6 z-10 bg-[#C9A227] text-white text-xs font-bold px-3 py-1 tracking-wider uppercase">
                    {product.badge}
                  </div>
                )}
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Product Info */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="mb-2 flex items-center text-[#C9A227]">
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                <span className="text-gray-500 text-sm ml-2 font-sans">(124 Reviews)</span>
              </div>
              
              <h1 className="font-serif text-3xl md:text-4xl text-gray-900 font-bold mb-4">
                {product.name}
              </h1>
              
              <p className="text-2xl font-semibold text-[#2E7D32] mb-6 tracking-wide">
                ₹{product.price}
              </p>
              
              <div className="w-16 h-1 bg-[#C9A227] mb-6"></div>
              
              <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">
                {product.description}
              </p>

              {/* Ingredients & Benefits */}
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4">Key Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing, idx) => (
                    <span key={idx} className="bg-[#e8f5e9] text-[#2E7D32] px-3 py-1 rounded-full text-sm">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Add to Cart Actions */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center border border-gray-300 w-32 rounded-sm overflow-hidden">
                  <button 
                    className="w-10 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >-</button>
                  <span className="flex-1 text-center font-medium">{quantity}</span>
                  <button 
                    className="w-10 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >+</button>
                </div>
                
                <Button onClick={() => toast.success(`${quantity}x ${product.name} added to cart!`)} className="flex-1 h-12 py-0 text-lg shadow-md hover:shadow-lg">
                  Add to Cart
                </Button>
              </div>

              <Button to="/checkout" variant="outlineGold" className="w-full mb-8 border-2">
                Buy It Now
              </Button>

              {/* Trust badges */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-2 pt-8 border-t border-gray-100 text-sm text-gray-600">
                <div className="flex items-center"><ShieldCheck size={18} className="text-[#2E7D32] mr-2" /> 100% Authentic</div>
                <div className="flex items-center"><Truck size={18} className="text-[#2E7D32] mr-2" /> Free Shipping</div>
                <div className="flex items-center"><RefreshCw size={18} className="text-[#2E7D32] mr-2" /> Easy Returns</div>
                <div className="flex items-center"><Check size={18} className="text-[#2E7D32] mr-2" /> Secure Checkout</div>
                <div className="flex items-center"><Rabbit size={18} className="text-[#2E7D32] mr-2" /> Cruelty-Free</div>
                <div className="flex items-center"><FlaskConicalOff size={18} className="text-[#2E7D32] mr-2" /> Toxin-Free</div>
              </div>

            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-white p-10 text-center border-t-4 border-[#2E7D32]">
            <h3 className="font-serif text-3xl font-bold mb-8">Why You'll Love It</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
               {product.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border-2 border-[#C9A227] flex items-center justify-center text-[#2E7D32] mb-4">
                      <Check size={20} />
                    </div>
                    <span className="font-medium text-gray-800">{benefit}</span>
                  </div>
               ))}
            </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="flex justify-between items-end border-b pb-4 mb-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">Customer Reviews</h2>
              <div className="flex items-center text-[#C9A227]">
                {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="currentColor" />)}
                <span className="text-gray-700 font-semibold ml-3">4.9 / 5.0</span>
                <span className="text-gray-500 font-normal ml-2">(124 reviews)</span>
              </div>
            </div>
            <Button variant="secondary">Write a Review</Button>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-sm shadow-sm">
              <div className="flex justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-[#e8f5e9] rounded-full flex items-center justify-center text-[#2E7D32] font-bold">AS</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Ananya S. <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded-full text-xs font-normal ml-2">Verified Buyer</span></h4>
                    <span className="text-xs text-gray-500">October 12, 2024</span>
                  </div>
                </div>
                <div className="flex text-[#C9A227]">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                </div>
              </div>
              <h5 className="font-bold mb-2">Life-changing addition to my routine</h5>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                "I've been struggling to find a product that respects sensitive skin while actually delivering results. The texture is divine and the natural scent is incredibly calming. Highly recommend to anyone seeking authentic Ayurveda."
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm shadow-sm">
              <div className="flex justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-[#e8f5e9] rounded-full flex items-center justify-center text-[#2E7D32] font-bold">PM</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Priya M. <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded-full text-xs font-normal ml-2">Verified Buyer</span></h4>
                    <span className="text-xs text-gray-500">September 29, 2024</span>
                  </div>
                </div>
                <div className="flex text-[#C9A227]">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                </div>
              </div>
              <h5 className="font-bold mb-2">Noticeable glow within a week</h5>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                "You can tell immediately that high quality ingredients were used. It doesn't break me out and leaves a beautiful dewy finish. I've already ordered a backup bottle."
              </p>
            </div>
            
            <div className="text-center pt-4">
              <button className="text-[#2E7D32] font-medium hover:underline text-sm uppercase tracking-wider">Load More Reviews</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
