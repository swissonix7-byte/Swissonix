import { TrendingUp, DollarSign, Users, CheckCircle } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    value: '30%',
    title: 'Faster Workflows',
    description: 'Our automation tools save your team hours every week.'
  },
  {
    icon: DollarSign,
    value: '25%',
    title: 'Cost Reduction',
    description: 'Smart AI optimizations help cut unnecessary expenses.'
  },
  {
    icon: Users,
    value: '40%',
    title: 'More Customer Engagement',
    description: 'Intelligent chatbots and personalized experiences keep customers coming back.'
  },
  {
    icon: CheckCircle,
    value: '50+',
    title: 'Successful Projects',
    description: 'From startups to enterprise, we deliver solutions that scale.'
  }
];

export default function ImpactResults() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Real Results for Real Businesses
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            See the measurable impact our AI and tech solutions deliver
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:from-blue-200 group-hover:to-emerald-200 transition-all duration-300 group-hover:scale-110">
                  <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
                </div>
                
                <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {metric.title}
                </h3>
                
                <p className="text-gray-600 font-light leading-relaxed">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}