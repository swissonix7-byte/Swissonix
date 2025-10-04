import { ExternalLink, Code, Users, Zap, Brain, Globe, ArrowRight, Calendar, Target, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const caseStudies = [
  {
    id: 1,
    name: 'Suvichaar.org',
    subtitle: 'AI-Powered Content Platform',
    category: 'Content AI & Automation',
    overview: 'AI-driven storytelling platform that curates trending topics and auto-generates web stories in AMP format, quizzes, and videos. Serves thousands of daily readers with personalized, engaging content.',
    problem: 'Traditional content creation is time-consuming and doesn\'t scale. Manual curation and story creation limits reach and engagement.',
    solution: 'Built an intelligent content platform using GPT for Hindi/English content generation, automated image/text/audio (TTS) workflows, and scalable AWS infrastructure.',
    highlights: [
      'GPT integration for bilingual content (Hindi/English)',
      'Automated AMP story generation with SEO optimization',
      'Text-to-Speech (TTS) for audio content creation',
      'AWS S3/CloudFront for scalable content delivery',
      'Real-time trending topic analysis and curation',
      'Automated image generation and optimization'
    ],
    results: [
      'Thousands of daily active readers',
      '90% reduction in content creation time',
      'Automated generation of 100+ stories daily',
      'Multi-language content support'
    ],
    technologies: ['GPT API', 'AWS S3', 'CloudFront', 'AMP', 'TTS', 'Node.js'],
    link: 'https://suvichaar.org',
    image: 'https://res.cloudinary.com/dvgoquoqv/image/upload/v1759587318/Screenshot_2025-10-04_194456_ucjarg.png',
    year: '2024'
  },
  {
    id: 2,
    name: 'Listerr',
    subtitle: 'Social eCommerce Network',
    category: 'Social Commerce & Real-time Systems',
    overview: 'Social commerce network combining user profiles, product listings, and seamless payment flows. Creates a community-driven marketplace with real-time interactions and social features.',
    problem: 'Traditional eCommerce lacks social engagement. Users want to discover products through social interactions and trusted recommendations.',
    solution: 'Developed a full-stack social commerce platform with integrated social feeds, real-time messaging, and streamlined payment processing using modern web technologies.',
    highlights: [
      'Scalable MERN stack architecture',
      'Real-time social feeds and product sharing',
      'WebSockets for instant messaging and notifications',
      'Integrated payment gateway with secure transactions',
      'Advanced user profiling and recommendation engine',
      'Mobile-responsive design with PWA capabilities'
    ],
    results: [
      'Seamless social shopping experience',
      'Real-time user engagement features',
      'Secure payment processing integration',
      'Scalable architecture for growth'
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'WebSockets', 'Payment APIs'],
    link: 'https://www.listerr.in',
    image: 'https://res.cloudinary.com/dvgoquoqv/image/upload/v1759587462/Screenshot_2025-10-04_194726_dwi264.png',
    year: '2024'
  },
  {
    id: 3,
    name: 'Content Labs',
    subtitle: 'AI Content Experiments',
    category: 'AI Research & Development',
    overview: 'Experimental sandbox for piloting cutting-edge AI workflows including generative quizzes, AMP story templates, and automated video creation. Serves as our innovation lab for testing new AI capabilities.',
    problem: 'Need a safe environment to test and validate new AI technologies before deploying them to production systems.',
    solution: 'Created a flexible experimentation platform using latest AI models like GPT-Vision and DALL·E, with automated workflows and comprehensive testing capabilities.',
    highlights: [
      'GPT-Vision integration for image analysis and content',
      'DALL·E for automated image generation',
      'Automated SEO optimization workflows',
      'A/B testing framework for AI experiments',
      'Template generation for various content types',
      'Performance monitoring and analytics'
    ],
    results: [
      'Successful validation of 15+ AI workflows',
      'Reduced time-to-market for new features',
      'Improved AI model performance through testing',
      'Foundation for production AI deployments'
    ],
    technologies: ['GPT-Vision', 'DALL·E', 'Python', 'FastAPI', 'Docker', 'Analytics APIs'],
    link: 'https://labs.suvichaar.org',
    image: 'https://res.cloudinary.com/dvgoquoqv/image/upload/v1759587388/Screenshot_2025-10-04_194614_zljlrm.png',
    year: '2024'
  }
];

const stats = [
  { number: '10+', label: 'Major Projects Delivered' },
  { number: '50+', label: 'AI Models Deployed' },
  { number: '100K+', label: 'Users Impacted' },
  { number: '90%', label: 'Average Efficiency Gain' }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
              Real Projects, Real Results
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Case Studies
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-light max-w-3xl mx-auto">
              Discover how we've helped businesses transform with custom AI solutions, automation, and cutting-edge technology
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {study.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {study.year}
                      </div>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                      {study.name}
                    </h2>
                    <p className="text-xl text-blue-600 font-semibold mb-6">
                      {study.subtitle}
                    </p>
                    
                    <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                      {study.overview}
                    </p>
                  </div>

                  {/* Problem & Solution */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center mb-3">
                        <Target className="w-5 h-5 text-red-500 mr-2" />
                        <h3 className="font-bold text-gray-900">Challenge</h3>
                      </div>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {study.problem}
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-3">
                        <Brain className="w-5 h-5 text-blue-500 mr-2" />
                        <h3 className="font-bold text-gray-900">Our Solution</h3>
                      </div>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <div className="flex items-center mb-4">
                      <Zap className="w-5 h-5 text-emerald-500 mr-2" />
                      <h3 className="font-bold text-gray-900">Key Highlights</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {study.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <div className="flex items-center mb-4">
                      <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                      <h3 className="font-bold text-gray-900">Results</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-3">
                          <span className="text-green-700 font-semibold text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="flex items-center mb-4">
                      <Code className="w-5 h-5 text-purple-500 mr-2" />
                      <h3 className="font-bold text-gray-900">Technologies Used</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <Globe className="w-5 h-5 mr-2" />
                      View Live Project
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    <img
                      src={study.image}
                      alt={study.name}
                      className="relative w-full h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Build Your Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-10 font-light">
            Let's discuss how we can create custom AI solutions for your business
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center w-full sm:w-auto bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center w-full sm:w-auto border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}