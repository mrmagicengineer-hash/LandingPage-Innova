export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-[#0F0F0F]/10 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            <span className="text-[#0F0F0F]">TechFlow</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#services" className="text-[#0F0F0F] hover:text-[#3563E9] transition-colors">
              Services
            </a>
            <a href="#how-it-works" className="text-[#0F0F0F] hover:text-[#3563E9] transition-colors">
              How it works
            </a>
            <a href="#case-studies" className="text-[#0F0F0F] hover:text-[#3563E9] transition-colors">
              Case studies
            </a>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => document.getElementById('lead-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#0F0F0F] text-white px-6 py-3 rounded-full hover:bg-[#0F0F0F]/90 transition-colors"
          >
            Talk to an expert
          </button>
        </div>
      </div>
    </nav>
  );
}
