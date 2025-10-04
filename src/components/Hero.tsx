import { Mic, MessageCircle, Linkedin, Facebook, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Social Proof Badge */}
        <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <div className="w-2 h-2 bg-blue-600 rounded-full mt-6"></div>
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
          <a 
            href="https://cal.com/kumar-mayank"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Talk to Our Team
          </a>
        </div>
      </div>
      
      {/* Moving Logo Strip - Now positioned lower */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div className="flex items-center justify-center space-x-8">
            <span className="text-sm font-medium text-gray-500 mb-4">Trusted by companies like:</span>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12 opacity-60">
              <div className="flex items-center space-x-2 text-gray-400 whitespace-nowrap">
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img src="https://res.cloudinary.com/dvgoquoqv/image/upload/v1759558546/Screenshot_2025-10-04_114525_s7pk6v.png" alt="" />
                </div>
                <span className="font-medium">SayF</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 whitespace-nowrap">
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img src="https://res.cloudinary.com/dvgoquoqv/image/upload/v1759518191/images_nrwjqm.png" alt="" />
                </div>
                <span className="font-medium">MTV</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 whitespace-nowrap">
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img src="https://media.licdn.com/dms/image/v2/D4E0BAQEieRREr7JctQ/company-logo_200_200/company-logo_200_200/0/1730104690449/111pg_logo?e=1762387200&v=beta&t=WQUa9cDUdPV829jTIWrrZe-l80BG141Szye3RHuSdPU" alt="" />
                </div>
                <span className="font-medium">111PG</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 whitespace-nowrap">
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img src="https://res.cloudinary.com/dvgoquoqv/image/upload/v1759558754/Screenshot_2025-10-04_114856_xpa0d3.png" alt="" />
                </div>
                <span className="font-medium">Suvichaar</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 whitespace-nowrap">
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img src="https://images.seeklogo.com/logo-png/22/1/intel-logo-png_seeklogo-226413.png" alt="" />

                </div>
                <span className="font-medium">Intel</span>
              </div>
              
              {/* Duplicate for seamless loop */}
              <div className="flex items-center space-x-2 text-gray-400 whitespace-nowrap">
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img src="https://res.cloudinary.com/dvgoquoqv/image/upload/v1759558546/Screenshot_2025-10-04_114525_s7pk6v.png" alt="" />
                </div>
                <span className="font-medium">SayF</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 whitespace-nowrap">
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img src="https://res.cloudinary.com/dvgoquoqv/image/upload/v1759518191/images_nrwjqm.png" alt="" />
                </div>
                <span className="font-medium">MTV</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 whitespace-nowrap">
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img src="https://media.licdn.com/dms/image/v2/D4E0BAQEieRREr7JctQ/company-logo_200_200/company-logo_200_200/0/1730104690449/111pg_logo?e=1762387200&v=beta&t=WQUa9cDUdPV829jTIWrrZe-l80BG141Szye3RHuSdPU" alt="" />
                </div>
                <span className="font-medium">111PG</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 whitespace-nowrap">
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img src="https://images.seeklogo.com/logo-png/22/1/intel-logo-png_seeklogo-226413.png" alt="" />
                </div>
                <span className="font-medium">Intel</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 whitespace-nowrap">
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img src="https://res.cloudinary.com/dvgoquoqv/image/upload/v1759558754/Screenshot_2025-10-04_114856_xpa0d3.png" alt="" />
                </div>
                <span className="font-medium">Suvichaar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}