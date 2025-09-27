import { Mic, MessageCircle, Linkedin, Facebook, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-16 pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Social Proof Badge */}
        <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
          Official Meta Tech Partner
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Make{' '}
          <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            60% More Revenue
          </span>
          {' '}without lifting a finger!
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-light max-w-3xl mx-auto">
          AI Growth Engine for WhatsApp & other channels
        </p>

        {/* Integration Icons */}
        <div className="flex justify-center items-center space-x-6 mb-12">
          <div className="flex items-center space-x-4 text-gray-500">
            <span className="text-sm font-medium">Integrates with:</span>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar Widget */}
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-2 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="What will ConvertAI do for your business?"
                className="flex-1 px-6 py-4 text-lg bg-transparent border-none outline-none placeholder-gray-500"
                disabled
              />
              <button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white p-3 rounded-xl transition-all duration-200 hover:scale-105">
                <Mic className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}