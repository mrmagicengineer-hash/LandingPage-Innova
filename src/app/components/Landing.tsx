import React, { useEffect, useRef } from 'react';
import '../../styles/innova.css';

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
        nav.style.background = 'rgba(6,6,10,0.9)';
      } else {
        nav.style.background = 'rgba(6,6,10,0.6)';
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

      <nav>
        <div className="nav-logo">
          <span />
          INNOVA
        </div>
        <ul className="nav-links">
          <li><a href="#services">Servicios</a></li>
          <li><a href="#how">Proceso</a></li>
          <li><a href="#clients">Clientes</a></li>
          <li><a href="#lead">Contacto</a></li>
        </ul>
        <button className="nav-cta">Hablar con un experto</button>
      </nav>

      <section id="hero">
        <div className="grid-bg" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />

        <div className="hero-content">
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            <span>Disponible para nuevos proyectos</span>
          </div>
          <p className="hero-eyebrow">Estudio de desarrollo web · Ecuador</p>
          <h1>
            Construimos<br />experiencias<br /><em>digitales</em><br />que escalan.
          </h1>
          <p className="hero-sub">
            Diseñamos y desarrollamos plataformas web de alto rendimiento para empresas que no aceptan la mediocridad.
          </p>
          <div className="hero-actions">
            <a href="#lead" className="btn-primary">Iniciar proyecto →</a>
            <a href="#how" className="btn-secondary">Ver nuestro proceso</a>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">47<span>+</span></div>
            <div className="stat-label">Proyectos entregados</div>
          </div>
          <div className="stat">
            <div className="stat-num">98<span>%</span></div>
            <div className="stat-label">Clientes satisfechos</div>
          </div>
          <div className="stat">
            <div className="stat-num">3<span>x</span></div>
            <div className="stat-label">Velocidad de carga</div>
          </div>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee-track">
          {['React','Next.js','TypeScript','Node.js','PostgreSQL','AWS','Tailwind CSS','Figma to Code'].concat(['React','Next.js','TypeScript','Node.js','PostgreSQL','AWS','Tailwind CSS','Figma to Code']).map((m, i) => (
            <div key={i} className="marquee-item">{m}</div>
          ))}
        </div>
      </div>

      <section id="services">
        <div className="section-header reveal">
          <div>
            <div className="section-tag">Servicios</div>
            <h2>Todo lo que<br/>tu negocio <em>necesita</em></h2>
          </div>
          <p className="section-desc">Desde la estrategia hasta el lanzamiento, cubrimos cada etapa del desarrollo digital con precisión técnica.</p>
        </div>

        <div className="services-grid">
          <div className="service-card reveal">
            <div className="service-num">01</div>
            <div className="service-icon">🎨</div>
            <div className="service-title">Diseño UI/UX</div>
            <p className="service-desc">Interfaces pensadas para convertir visitantes en clientes. Figma, prototipado y sistemas de diseño escalables.</p>
            <a href="#" className="service-link">Conocer más</a>
          </div>
          <div className="service-card reveal reveal-delay-1">
            <div className="service-num">02</div>
            <div className="service-icon">⚡</div>
            <div className="service-title">Desarrollo Web</div>
            <p className="service-desc">Aplicaciones con React, Next.js y Node.js. Código limpio, testeable y listo para producción desde el día uno.</p>
            <a href="#" className="service-link">Conocer más</a>
          </div>
          <div className="service-card reveal reveal-delay-2">
            <div className="service-num">03</div>
            <div className="service-icon">🛒</div>
            <div className="service-title">E-Commerce</div>
            <p className="service-desc">Tiendas online que venden. Shopify, WooCommerce o solución personalizada con pagos y logística integrada.</p>
            <a href="#" className="service-link">Conocer más</a>
          </div>
          <div className="service-card reveal">
            <div className="service-num">04</div>
            <div className="service-icon">🔐</div>
            <div className="service-title">Plataformas SaaS</div>
            <p className="service-desc">Arquitectura backend robusta, autenticación, multi-tenancy y dashboards de administración a medida.</p>
            <a href="#" className="service-link">Conocer más</a>
          </div>
          <div className="service-card reveal reveal-delay-1">
            <div className="service-num">05</div>
            <div className="service-icon">🚀</div>
            <div className="service-title">Optimización & SEO</div>
            <p className="service-desc">Core Web Vitals en verde, tiempo de carga bajo 1 segundo y posicionamiento orgánico desde la arquitectura.</p>
            <a href="#" className="service-link">Conocer más</a>
          </div>
          <div className="service-card reveal reveal-delay-2">
            <div className="service-num">06</div>
            <div className="service-icon">🤖</div>
            <div className="service-title">Integración IA</div>
            <p className="service-desc">Chatbots, automatizaciones y flujos inteligentes con LLMs integrados directamente en tu producto web.</p>
            <a href="#" className="service-link">Conocer más</a>
          </div>
        </div>
      </section>

      <section id="how">
        <div className="section-header reveal">
          <div>
            <div className="section-tag">Proceso</div>
            <h2>Cómo <em>trabajamos</em><br/>contigo</h2>
          </div>
          <p className="section-desc">Un proceso claro y transparente. Sabes exactamente qué pasa en cada etapa de tu proyecto.</p>
        </div>

        <div className="how-grid">
          <div className="how-visual reveal">
            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <line x1="0" y1="160" x2="400" y2="160" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <line x1="0" y1="240" x2="400" y2="240" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <line x1="0" y1="320" x2="400" y2="320" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <line x1="80" y1="0" x2="80" y2="400" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <line x1="160" y1="0" x2="160" y2="400" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <line x1="240" y1="0" x2="240" y2="400" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <line x1="320" y1="0" x2="320" y2="400" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <path d="M 80 80 Q 200 80 200 200 Q 200 320 320 320" stroke="rgba(77,255,180,0.3)" strokeWidth="1.5" fill="none" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1s" repeatCount="indefinite" />
              </path>
              <circle cx="80" cy="80" r="12" fill="#4DFFB4" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="200" r="12" fill="#4DFFB4" opacity="0.7">
                <animate attributeName="opacity" values="0.7;0.4;0.7" dur="2s" begin="0.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="320" cy="320" r="12" fill="#4DFFB4" opacity="0.5">
                <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2s" begin="1s" repeatCount="indefinite" />
              </circle>
              <text x="100" y="85" fill="rgba(240,238,248,0.6)" fontSize="11" fontFamily="DM Mono, monospace">DISCOVERY</text>
              <text x="220" y="205" fill="rgba(240,238,248,0.6)" fontSize="11" fontFamily="DM Mono, monospace">BUILD</text>
              <text x="200" y="325" fill="rgba(240,238,248,0.6)" fontSize="11" fontFamily="DM Mono, monospace">LAUNCH →</text>
            </svg>
          </div>

          <div className="steps">
            <div className="step reveal">
              <div className="step-num-wrap">01</div>
              <div className="step-content">
                <h3>Descubrimiento y estrategia</h3>
                <p>Entendemos tu negocio, tu mercado y tus objetivos. Definimos el stack tecnológico, los KPIs y el roadmap de entrega.</p>
              </div>
            </div>
            <div className="step reveal reveal-delay-1">
              <div className="step-num-wrap">02</div>
              <div className="step-content">
                <h3>Diseño y prototipado</h3>
                <p>Wireframes de alta fidelidad en Figma con revisiones semanales. Apruebas cada pantalla antes de que se escriba una línea de código.</p>
              </div>
            </div>
            <div className="step reveal reveal-delay-2">
              <div className="step-num-wrap">03</div>
              <div className="step-content">
                <h3>Desarrollo iterativo</h3>
                <p>Sprints de 2 semanas con entregables reales. Acceso a staging para que puedas ver y probar el avance en tiempo real.</p>
              </div>
            </div>
            <div className="step reveal reveal-delay-3">
              <div className="step-num-wrap">04</div>
              <div className="step-content">
                <h3>Lanzamiento y soporte</h3>
                <p>Deploy en producción con monitoreo 24/7. Plan de soporte post-lanzamiento para que nada detenga tu crecimiento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="clients">
        <p className="clients-label reveal">Empresas que confían en nosotros</p>
        <div className="clients-logos">
          {['Innovate Corp','Nexus Tech','Quantum Solutions','Apex Systems','Velocity Group','Zenith Digital'].map((c,i)=> (
            <div key={i} className={`client-item reveal${i%3? ' reveal-delay-1':''}`}><span className="client-name">{c}</span></div>
          ))}
        </div>
      </section>

      <section id="lead">
        <div className="lead-orb" />
        <div className="lead-content">
          <div className="lead-badge">Proyectos desde $1,500 USD</div>
          <h2 className="reveal">Tu próxima plataforma<br/>comienza <em>hoy</em></h2>
          <p className="lead-sub reveal reveal-delay-1">Cuéntanos tu idea. En 24 horas tienes una propuesta técnica detallada y sin compromiso.</p>
          <div className="lead-form reveal reveal-delay-2">
            <input type="email" className="lead-input" placeholder="tu@empresa.com" />
            <button className="btn-primary">Solicitar propuesta →</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-name">INNOVA·</div>
            <p>Estudio de desarrollo web de alto impacto con sede en Ecuador. Construimos lo que otros no pueden.</p>
          </div>
          <div className="footer-col">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Desarrollo Web</a></li>
              <li><a href="#">E-Commerce</a></li>
              <li><a href="#">SaaS & Apps</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Compañía</h4>
            <ul>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Portafolio</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Carreras</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li><a href="#">hola@innova.ec</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Innova. Todos los derechos reservados.</span>
          <span>Hecho con ✦ en Ecuador · <a href="#">Política de privacidad</a></span>
        </div>
      </footer>
    </>
  );
}
