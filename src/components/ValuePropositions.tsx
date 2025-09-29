import { TrendingUp, Heart, Zap, Clock, DollarSign, Cpu } from 'lucide-react';

const propositions = [
  {
    icon: Clock,
    title: 'Save 1,000+ Hours',
    description: 'Automate repetitive tasks and streamline workflows with custom AI solutions built for your business',
    metric: 'Average 1,200 hours saved annually'
  },
  {
    icon: DollarSign,
    title: 'Cut Costs by 40%',
    description: 'Reduce operational expenses through intelligent automation and optimized tech infrastructure',
    metric: 'Up to 40% cost reduction'
  },
  {
    icon: Cpu,
    title: 'Custom AI Solutions',
    description: 'Get tailored AI and tech solutions designed specifically for your industry and business needs',
    metric: '100% custom-built for you'
  }
];

export default function ValuePropositions() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Businesses Choose Our AI & Tech Solutions
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            We build practical AI and tech solutions that deliver real results for your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {propositions.map((prop, index) => {
            const IconComponent = prop.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:from-blue-200 group-hover:to-emerald-200 transition-all duration-300 group-hover:scale-110">
                  <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {prop.title}
                </h3>
                <p className="text-gray-600 font-light mb-4 leading-relaxed">
                  {prop.description}
                </p>
                <div className="inline-flex items-center bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-full px-4 py-2">
                  <div className="text-sm font-semibold text-emerald-700">
                    {prop.metric}
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