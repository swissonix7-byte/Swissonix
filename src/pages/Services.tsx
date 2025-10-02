import { Brain, Users, Zap, MessageCircle, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const services = [
  {
    icon: Brain,
    title: 'AI Development',
    description: 'Custom AI solutions to automate tasks, analyze data, and give you insights in real-time.',
    features: [
      'Machine Learning Models',
      'Predictive Analytics',
      'Data Processing Automation',
      'Real-time Insights Dashboard'
    ]
  },
  {
    icon: Users,
    title: 'Smart Tools for Teams',
    description: 'We build tools that help your team work faster, smarter, and with less stress.',
    features: [
      'Workflow Optimization',
      'Team Collaboration Tools',
      'Task Management Systems',
      'Performance Analytics'
    ]
  },
  {
    icon: Zap,
    title: 'Automation & Efficiency',
    description: 'Streamline your processes so your business runs smoother—without extra effort.',
    features: [
      'Process Automation',
      'Integration Solutions',
      'Workflow Optimization',
      'System Monitoring'
    ]
  },
  {
    icon: MessageCircle,
    title: 'Chatbots & Conversational AI',
    description: 'From customer support to lead generation, our AI assistants help your business talk to customers 24/7.',
    features: [
      '24/7 Customer Support',
      'Lead Generation Bots',
      'Multi-platform Integration',
      'Natural Language Processing'
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-light max-w-3xl mx-auto">
            We specialize in building AI and tech solutions that solve real business problems
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-emerald-200 transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-blue-700" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 font-light leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      {/* Features List */}
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mr-3 flex-shrink-0"></div>
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-10 font-light">
            Let's discuss how our AI and tech solutions can transform your business
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
              Talk to Our Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105">
              Explore Our Work
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}