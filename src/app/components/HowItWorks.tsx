export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Free consultation',
      description: 'Schedule a no-obligation call to discuss your business needs and challenges.'
    },
    {
      number: '02',
      title: 'Diagnosis',
      description: 'Our experts analyze your current systems and identify optimization opportunities.'
    },
    {
      number: '03',
      title: 'Proposal',
      description: 'Receive a detailed roadmap with timeline, costs, and expected ROI metrics.'
    },
    {
      number: '04',
      title: 'Implementation',
      description: 'We build, test, and deploy your solution with ongoing support and training.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 lg:px-8 bg-[#F7F6F3]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#3563E9] font-semibold mb-3 block">HOW IT WORKS</span>
          <h2 
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Your path to transformation
          </h2>
          <p className="text-lg text-[#0F0F0F]/60 max-w-2xl mx-auto">
            A proven process that takes you from initial consultation to successful deployment in four strategic steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-[#0F0F0F]/10"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                {/* Circle Number */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-[#3563E9] mb-6">
                  <span 
                    className="text-2xl font-bold text-[#3563E9]"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {step.number}
                  </span>
                </div>
                
                {/* Title */}
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#0F0F0F]/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
