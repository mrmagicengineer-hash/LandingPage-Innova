import { Code, Workflow, Cloud, Brain, Smartphone, Shield } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Code,
      title: 'Custom development',
      description: 'Bespoke software solutions tailored to your unique business requirements and workflows.'
    },
    {
      icon: Workflow,
      title: 'Integrations & APIs',
      description: 'Seamlessly connect your systems and third-party services for unified operations.'
    },
    {
      icon: Cloud,
      title: 'Cloud & infrastructure',
      description: 'Scalable cloud architecture designed for performance, reliability, and growth.'
    },
    {
      icon: Brain,
      title: 'AI automation',
      description: 'Intelligent automation powered by machine learning to optimize your processes.'
    },
    {
      icon: Smartphone,
      title: 'Mobile apps',
      description: 'Native and cross-platform mobile solutions that engage your users anywhere.'
    },
    {
      icon: Shield,
      title: 'Security & compliance',
      description: 'Enterprise-grade security measures ensuring data protection and regulatory compliance.'
    }
  ];

  return (
    <section id="services" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#3563E9] font-semibold mb-3 block">OUR SERVICES</span>
          <h2 
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Everything you need to scale
          </h2>
          <p className="text-lg text-[#0F0F0F]/60 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to transform your business operations and drive measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="p-8 rounded-2xl border border-[#0F0F0F]/10 hover:border-[#3563E9]/30 hover:shadow-sm transition-all"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#3563E9]/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#3563E9]" strokeWidth={1.5} />
                </div>
                
                {/* Title */}
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#0F0F0F]/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
