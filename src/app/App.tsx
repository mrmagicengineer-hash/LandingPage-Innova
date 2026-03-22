import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientLogos } from './components/ClientLogos';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { LeadSection } from './components/LeadSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <Hero />
      <ClientLogos />
      <Services />
      <HowItWorks />
      <LeadSection />
      <Footer />
    </div>
  );
}
