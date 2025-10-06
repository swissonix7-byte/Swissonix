export default function Testimonial() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            
            
            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <blockquote className="text-xl md:text-2xl text-gray-700 font-light mb-6 leading-relaxed">
                "Had a great experience working with this agency! They perfectly captured my vision and built a website that looks amazing and works flawlessly. Super professional, creative, and easy to work with."
              </blockquote>
              
              <div className="mb-4">
                <div className="font-semibold text-gray-900 text-lg">Adeel Mohammad Khan</div>
                <div className="font-semibold text-gray-400 text-lg">Founder, Jasinnova, Dubai</div>
              </div>
              
              {/* ROI Highlight */}
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-full px-6 py-3">
                <div className="text-sm font-semibold text-emerald-700">
                  30+ hours saved weekly • 80% faster response times
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
