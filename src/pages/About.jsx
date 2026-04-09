import React from 'react';
import Button from '../components/ui/Button';

const About = () => {
  return (
    <div className="bg-[#F5F5DC] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=2000" 
          alt="Ayurvedic Herbs" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mb-4 drop-shadow-md">Our Heritage</h1>
          <div className="w-24 h-1 bg-[#C9A227] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-800">
          <h2 className="font-serif text-3xl font-bold mb-8 text-[#2E7D32]">Rooted in 5,000 Years of Wisdom</h2>
          <p className="text-lg font-light leading-relaxed mb-6">
            AYUNIK was born out of a profound reverence for ancient Ayurvedic principles and a modern desire for pure, uncompromising skincare. Our journey began in the lush botanical gardens of Kerala, where traditional Vaidyas continue to harness the earth's most potent herbs.
          </p>
          <p className="text-lg font-light leading-relaxed mb-12">
            Every bottle we craft is a testament to the belief that nature provides the ultimate blueprint for beauty. We don't just extract ingredients; we preserve their vital energy. By carefully balancing modern botanical science with time-honored recipes, AYUNIK delivers a luxurious, holistic healing experience for your skin.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 scale-95 border-t border-[#2E7D32]/20 pt-16">
            <div className="text-left">
              <h3 className="font-serif text-2xl font-bold mb-4 text-gray-900">The Founder's Promise</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                "I envisioned a brand where luxury doesn't cost the earth, where efficacy is driven purely by nature. We stand fiercely against synthetic shortcuts. Our promise is simple: 100% natural, incredibly potent, and completely transparent skincare."
              </p>
              <p className="mt-4 font-serif italic font-bold text-[#C9A227]">- Founder, Ayunik</p>
            </div>
            <div className="h-64 bg-gray-200 rounded-sm overflow-hidden">
               <img src="https://images.unsplash.com/photo-1596755389378-c11dde6df070?auto=format&fit=crop&q=80&w=800" alt="Botanical processing" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-[#1b5e20] py-20 text-center border-t-[4px] border-[#C9A227]">
         <h2 className="font-serif text-4xl font-bold text-white mb-6">Experience the Ritual</h2>
         <p className="text-[#F5F5DC] max-w-2xl mx-auto font-light mb-8 px-4">
            Transform your daily routine into a sacred act of self-care.
         </p>
         <Button to="/shop" variant="gold" size="lg">Explore Products</Button>
      </section>
    </div>
  );
};

export default About;
