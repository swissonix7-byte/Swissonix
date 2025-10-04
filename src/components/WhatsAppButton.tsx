import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const phoneNumber = "918446603369"; // Your WhatsApp number
  const message = "Hi! I'm interested in your AI and tech solutions. Can we discuss my project?";
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Card */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-80 mb-4 animate-slide-up">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Chat with us!</h3>
                <p className="text-sm text-gray-600">We're online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            Hi there! 👋 Have questions about our AI solutions? We're here to help you transform your business.
          </p>
          
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Start WhatsApp Chat
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
      </button>
      
      {/* Pulse Animation */}
      <div className="absolute inset-0 w-14 h-14 bg-green-500 rounded-full animate-ping opacity-20"></div>
    </div>
  );
}