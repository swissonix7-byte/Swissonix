import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ValuePropositions from './components/ValuePropositions';
import Testimonial from './components/Testimonial';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <Services />
      <ValuePropositions />
      <Testimonial />
      <CTA />
    </div>
  );
}

export default App;