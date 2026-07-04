export default function Navbar() {
  return (
    <nav>
      {/* Logo + brand name */}
      <div className="nav-logo">
        <img src="/icons/logo_equinox_icon.png" alt="" className="nav-logo-icon" />
        Equinox
      </div>

      {/* Anchor links to page sections (ids defined in Landing.tsx) */}
      <ul className="nav-links">
        <li><a href="#services">Servicios</a></li>
        <li><a href="#how">Proceso</a></li>
        <li><a href="#clients">Clientes</a></li>
        <li><a href="#lead">Contacto</a></li>
      </ul>

      {/* Main call-to-action button, scrolls to contact/lead section */}
      <button className="nav-cta">Hablar con un experto</button>
    </nav>
  );
}
