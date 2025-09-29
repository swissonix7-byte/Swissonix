import { Mic, MessageCircle, Linkedin, Facebook, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Social Proof Badge */}
        <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
          Trusted by growing startups and established businesses
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          We Build AI and Tech That Actually Works
        </h1>
        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-light max-w-3xl mx-auto">
          We help brands and traditional businesses use AI and custom tech to cut costs, automate tasks, and work smarter.
        </p>

        {/* CTA Button */}
        <div className="mb-12">
          <button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Book a Demo
          </button>
        </div>

        {/* Moving Logo Strip */}
        <div className="overflow-hidden">
          <div className="flex items-center justify-center space-x-8 animate-pulse">
            <span className="text-sm font-medium text-gray-500 mb-4">Trusted by companies like:</span>
          </div>
          <div className="flex items-center justify-center space-x-12 opacity-60">
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold">TC</span>
              </div>
              <span className="font-medium">TechCorp</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold">IS</span>
              </div>
              <span className="font-medium">InnovateSoft</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold">DS</span>
              </div>
              <span className="font-medium">DataSolutions</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold">AG</span>
              </div>
              <span className="font-medium">AutoGrow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}