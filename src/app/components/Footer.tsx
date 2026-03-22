import { Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0F0F0F] py-8 px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            TechFlow
          </div>

          {/* Copyright */}
          <div className="text-white/50 text-sm">
            © 2026 TechFlow. All rights reserved.
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-white/50 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-white/50 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#linkedin" className="text-white/50 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
