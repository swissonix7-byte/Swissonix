import { Brain, Users, Zap, MessageCircle } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Development',
    description: 'Custom AI solutions to automate tasks, analyze data, and give you insights in real-time.'
  },
  {
    icon: Users,
    title: 'Smart Tools for Teams',
    description: 'We build tools that help your team work faster, smarter, and with less stress.'
  },
  {
    icon: Zap,
    title: 'Automation & Efficiency',
    description: 'Streamline your processes so your business runs smoother—without extra effort.'
  },
  {
    icon: MessageCircle,
    title: 'Chatbots & Conversational AI',
    description: 'From customer support to lead generation, our AI assistants help your business talk to customers 24/7.'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            We specialize in building AI and tech solutions that solve real business problems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-emerald-200 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}