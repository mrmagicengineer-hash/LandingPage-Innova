import React, { useEffect, useRef } from 'react';
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
import FilosofiaEmpresarial from './MisionyVision';

export default function Landing() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const onEnter = () => {
      cursor.style.width = '40px';
      cursor.style.height = '40px';
    };
    const onLeave = () => {
      cursor.style.width = '12px';
      cursor.style.height = '12px';
    };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

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
      document.removeEventListener('mousemove', onMove);
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <Navbar />
      <Hero />
      <TechMarquee />
      <Services />
      <HowItWorks />
      <ClientLogos />
      <FilosofiaEmpresarial/>
      <LeadSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
