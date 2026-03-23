import React, { useEffect, useRef, useState } from 'react';

const LANG_KEY = 'site_lang';

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<'es'|'en'>(() => (localStorage.getItem(LANG_KEY) as 'es'|'en') || 'es');
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.documentElement.lang = lang === 'es' ? 'es' : 'en';
    localStorage.setItem(LANG_KEY, lang);
  }, [lang]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 bg-transparent px-3 py-2 rounded-full hover:bg-gray-100/10 transition"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM4 12h16M12 4c2.5 3.5 2.5 8.5 0 12M12 4c-2.5 3.5-2.5 8.5 0 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="hidden sm:inline-block font-medium">{lang === 'es' ? 'ES' : 'US'}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white/5 backdrop-blur-sm border border-white/8 rounded shadow-lg overflow-hidden z-50">
          <button
            className={`w-full text-left px-4 py-3 hover:bg-white/6 ${lang === 'es' ? 'bg-white/6' : ''}`}
            onClick={() => { setLang('es'); setOpen(false); }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0B4F2B] flex items-center justify-center text-xs font-semibold">ES</span>
                <div>
                  <div className="text-sm">Español</div>
                </div>
              </div>
              <div className="text-xs text-white/70">{lang === 'es' ? '✓' : ''}</div>
            </div>
          </button>

          <button
            className={`w-full text-left px-4 py-3 hover:bg-white/6 ${lang === 'en' ? 'bg-white/6' : ''}`}
            onClick={() => { setLang('en'); setOpen(false); }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#08325F] flex items-center justify-center text-xs font-semibold">US</span>
                <div>
                  <div className="text-sm">English</div>
                </div>
              </div>
              <div className="text-xs text-white/70">{lang === 'en' ? '✓' : ''}</div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
