export default function Testimonial() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                alt="Customer"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <blockquote className="text-xl md:text-2xl text-gray-700 font-light mb-6 leading-relaxed">
                "ConvertAI transformed our customer engagement completely. We went from struggling to reach prospects to having meaningful conversations at scale."
              </blockquote>
              
              <div className="mb-4">
                <div className="font-semibold text-gray-900 text-lg">Sarah Chen</div>
                <div className="text-gray-600">Head of Growth, TechFlow</div>
              </div>
              
              {/* ROI Highlight */}
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-full px-6 py-3">
                <div className="text-sm font-semibold text-emerald-700">
                  100% leads contacted • ROI 5X+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}