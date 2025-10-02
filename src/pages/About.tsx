import { Brain, Users, Zap, MessageCircle, Target, Heart, Shield, Star, ArrowRight, Mail, Linkedin, Github } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const values = [
  {
    icon: Brain,
    title: 'Innovation',
    description: 'We stay at the forefront of AI technology, constantly exploring new possibilities and implementing cutting-edge solutions.'
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Our solutions are built to last, with robust architecture and comprehensive testing to ensure consistent performance.'
  },
  {
    icon: Heart,
    title: 'Client-Centric',
    description: 'Every project is tailored to your specific needs. We listen, understand, and deliver solutions that truly make a difference.'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from code quality to client communication and project delivery.'
  }
];

const expertise = [
  {
    icon: Brain,
    title: 'AI Development',
    description: 'Custom machine learning models, predictive analytics, and intelligent automation systems.'
  },
  {
    icon: Zap,
    title: 'Custom Automation',
    description: 'Streamlined workflows and process automation that saves time and reduces manual effort.'
  },
  {
    icon: Target,
    title: 'Data Analytics & Insights',
    description: 'Real-time dashboards, data processing, and actionable insights from your business data.'
  },
  {
    icon: MessageCircle,
    title: 'Conversational AI',
    description: '24/7 chatbots, customer support automation, and intelligent virtual assistants.'
  },
  {
    icon: Users,
    title: 'Smart Tools for Teams',
    description: 'Productivity tools, collaboration platforms, and team optimization solutions.'
  }
];

const teamMembers = [
  {
    name: 'Kumar Mayank',
    role: 'Founder & Lead AI Developer',
    bio: 'Passionate about building AI solutions that solve real-world problems. Expert in machine learning, full-stack development, and system architecture.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Sarah Chen',
    role: 'AI Research Specialist',
    bio: 'PhD in Computer Science with focus on natural language processing and computer vision. Leads our research initiatives and model development.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Alex Rodriguez',
    role: 'Full-Stack Developer',
    bio: 'Expert in modern web technologies and cloud infrastructure. Specializes in building scalable applications and seamless user experiences.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: '#',
    github: '#'
  }
];

const stats = [
  { number: '3+', label: 'Years of Experience' },
  { number: '10+', label: 'Completed Projects' },
  { number: '100K+', label: 'Users Impacted' },
  { number: '40%', label: 'Average Cost Reduction' }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
            Building the Future with AI
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            About StackFive
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-light max-w-3xl mx-auto">
            We're a passionate team of AI developers and engineers dedicated to transforming businesses through intelligent automation and custom technology solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                We believe that AI should be accessible, practical, and transformative. Our mission is to deliver cutting-edge custom AI solutions that automate complex processes, provide deep data insights, and empower teams to achieve more than they ever thought possible.
              </p>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                From intelligent chatbots that enhance customer experiences to sophisticated automation systems that streamline operations, we're passionate about solving real-world problems using the power of artificial intelligence.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="AI Development Team"
                className="relative w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              The principles that guide everything we do and every solution we create
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-emerald-200 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Areas of Expertise
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Comprehensive AI and technology solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={index}
                  className="group text-center bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:from-blue-200 group-hover:to-emerald-200 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Passionate experts dedicated to delivering exceptional AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.github}
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-800 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 font-light">
            Let's discuss how our AI solutions can help you automate processes, gain insights, and achieve your goals
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a 
              href="https://cal.com/kumar-mayank"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Talk to Our Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="/case-studies"
              className="inline-block w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 text-center"
            >
              View Our Work
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-blue-500">
            <div className="flex justify-center items-center space-x-6">
              <div className="flex items-center text-blue-100">
                <Mail className="w-5 h-5 mr-2" />
                <span>krmayank2002@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}