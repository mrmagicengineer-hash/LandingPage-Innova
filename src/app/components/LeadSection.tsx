import { Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function LeadSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const benefits = [
    'Free 30-minute consultation with our experts',
    'Custom solution proposal tailored to your needs',
    'ROI analysis and implementation timeline',
    'No obligation, no credit card required'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic would go here
    alert('Thank you! We\'ll be in touch soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="lead-section" className="py-20 px-6 lg:px-8 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Copy & Benefits */}
          <div className="lg:pr-12">
            <h2 
              className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Ready to transform your business?
            </h2>
            
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              Book a free demo and discover how our enterprise software solutions can accelerate your growth, reduce operational costs, and give you a competitive edge.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3563E9] flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#0F0F0F] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#0F0F0F]/20 focus:border-[#3563E9] focus:outline-none focus:ring-2 focus:ring-[#3563E9]/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-[#0F0F0F] mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#0F0F0F]/20 focus:border-[#3563E9] focus:outline-none focus:ring-2 focus:ring-[#3563E9]/20 transition-all"
                  placeholder="Your Company Inc."
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#0F0F0F] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#0F0F0F]/20 focus:border-[#3563E9] focus:outline-none focus:ring-2 focus:ring-[#3563E9]/20 transition-all"
                  placeholder="john@company.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#0F0F0F] mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#0F0F0F]/20 focus:border-[#3563E9] focus:outline-none focus:ring-2 focus:ring-[#3563E9]/20 transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Service Dropdown */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-[#0F0F0F] mb-2">
                  Service of interest *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#0F0F0F]/20 focus:border-[#3563E9] focus:outline-none focus:ring-2 focus:ring-[#3563E9]/20 transition-all bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="custom-development">Custom development</option>
                  <option value="integrations">Integrations & APIs</option>
                  <option value="cloud">Cloud & infrastructure</option>
                  <option value="ai">AI automation</option>
                  <option value="mobile">Mobile apps</option>
                  <option value="security">Security & compliance</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#0F0F0F] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#0F0F0F]/20 focus:border-[#3563E9] focus:outline-none focus:ring-2 focus:ring-[#3563E9]/20 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#3563E9] text-white px-8 py-4 rounded-full hover:bg-[#3563E9]/90 transition-colors flex items-center justify-center gap-2 font-semibold"
              >
                Request free demo
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Privacy Note */}
              <p className="text-xs text-[#0F0F0F]/50 text-center">
                By submitting this form, you agree to our Privacy Policy and Terms of Service. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
