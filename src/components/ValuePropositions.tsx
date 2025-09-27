import { TrendingUp, Heart, Zap } from 'lucide-react';

const propositions = [
  {
    icon: TrendingUp,
    title: 'Convert 3X More Leads',
    description: 'Turn cold prospects into paying customers with AI-powered conversations that never sleep',
    metric: '300% increase in conversion rates'
  },
  {
    icon: Heart,
    title: 'Scale Personal Touch',
    description: 'Deliver personalized experiences to thousands of customers simultaneously with human-like AI',
    metric: '95% customer satisfaction score'
  },
  {
    icon: Zap,
    title: 'Launch in Minutes',
    description: 'Deploy sophisticated AI campaigns instantly without technical expertise or lengthy setup',
    metric: '5-minute setup time'
  }
];

export default function ValuePropositions() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Leading Companies Choose ConvertAI
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Transform your business with AI that works around the clock to grow your revenue
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