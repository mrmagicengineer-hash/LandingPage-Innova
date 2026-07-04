import React, { useEffect } from 'react';
import '../../styles/innova.css';
import Navbar from './Navbar';
import Hero from './Hero';
import TechMarquee from './TechMarquee';
import Services from './Services';
import HowItWorks from './HowItWorks';
import ClientLogos from './ClientLogos';
import LeadSection from './LeadSection';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

export default function Landing() {
  useEffect(() => {
    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Sticky nav background
    const onScroll = () => {
      const nav = document.querySelector('nav') as HTMLElement | null;
      if (!nav) return;
      if (window.scrollY > 50) {
        nav.style.background = 'rgba(247,248,250,0.92)';
      } else {
        nav.style.background = 'rgba(247,248,250,0.8)';
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <TechMarquee />
      <Services />
      <HowItWorks />
      <ClientLogos />
      <LeadSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
