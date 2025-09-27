import { useState } from 'react';
import DemoModal from './DemoModal';

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-blue-600 to-emerald-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to 5X Your Revenue?
        </h2>
        <p className="text-xl text-blue-100 mb-10 font-light">
          Join 500+ companies already growing with ConvertAI
        </p>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Book a Demo
          </button>
          <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105">
            View Pricing
          </button>
        </div>
        
        <p className="text-blue-200 text-sm mt-6">
          No credit card required • 14-day free trial
        </p>
      </div>
      </section>
      
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}