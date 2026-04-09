import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { Mail, MapPin, Phone, HelpCircle } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully! Our botanical team will be in touch shortly.');
    e.target.reset(); // Reset form
  };

  return (
    <div className="bg-[#F5F5DC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-6"></div>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            Whether you have a question about our Ayurvedic ingredients, your order, or just want to share your ritual experience, our team is here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details & FAQ */}
          <div>
            <div className="bg-white p-8 rounded-sm shadow-sm mb-8 border-l-4 border-[#2E7D32]">
              <h3 className="font-serif text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
              <ul className="space-y-6 text-gray-600">
                <li className="flex items-start">
                  <MapPin size={24} className="text-[#C9A227] mr-4 flex-shrink-0" />
                  <span>108 Botanical Lane, Ayurvedic District,<br/>Kerala, India 682001</span>
                </li>
                <li className="flex items-center">
                  <Phone size={24} className="text-[#C9A227] mr-4 flex-shrink-0" />
                  <span>+91 1800-AYUNIK-CARE</span>
                </li>
                <li className="flex items-center">
                  <Mail size={24} className="text-[#C9A227] mr-4 flex-shrink-0" />
                  <span>namaste@ayunik.com</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1b5e20] text-white p-8 rounded-sm shadow-sm">
               <h3 className="font-serif text-2xl font-bold mb-6 flex items-center">
                 <HelpCircle size={24} className="mr-3 text-[#C9A227]" /> Need Quick Help?
               </h3>
               <p className="font-light text-white/80 mb-6">
                 Most answers regarding shipping timelines, return policies, and ingredient sourcing can be found directly in our Help Center.
               </p>
               <Button variant="outlineGold" className="w-full text-white border-white hover:bg-white hover:text-[#1b5e20]">
                 Visit Help Center
               </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm">
            <h2 className="font-serif text-2xl font-bold mb-6 text-gray-900">Send a Message</h2>
            
            {status && (
              <div className="bg-[#e8f5e9] text-[#2E7D32] p-4 rounded-sm mb-6 font-medium text-sm border border-[#2E7D32]/20">
                {status}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input required type="text" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#2E7D32] rounded-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input required type="text" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#2E7D32] rounded-sm" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input required type="email" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#2E7D32] rounded-sm" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#2E7D32] rounded-sm bg-white">
                  <option>Order Inquiry</option>
                  <option>Product Recommendation</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea required rows="4" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#2E7D32] rounded-sm resize-none"></textarea>
              </div>

              <Button type="submit" className="w-full py-4 shadow-md">
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
