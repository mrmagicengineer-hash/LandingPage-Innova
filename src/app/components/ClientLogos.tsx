export function ClientLogos() {
  const companies = [
    'INNOVATE CORP',
    'NEXUS TECH',
    'QUANTUM SOLUTIONS',
    'APEX SYSTEMS',
    'VELOCITY GROUP',
    'ZENITH DIGITAL'
  ];

  return (
    <section className="py-16 px-6 lg:px-8 bg-white border-t border-[#0F0F0F]/10">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-[#0F0F0F]/40 mb-8 uppercase tracking-wide">
          Companies that trust us
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <div key={index} className="text-center">
              <span 
                className="text-[#0F0F0F]/30 font-bold text-sm"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
