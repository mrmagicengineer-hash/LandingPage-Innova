import WaterDropGridVideo from './anim/WaterDropGridVideo';

export default function Hero() {
  return (
    <section id="hero">
      <WaterDropGridVideo />
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
  );
}
