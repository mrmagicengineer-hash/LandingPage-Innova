import { ArrowRight, TrendingUp } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="text-sm px-4 py-2 rounded-full border border-[#3563E9] text-[#3563E9] font-medium">
                Enterprise software platform
              </span>
            </div>

            {/* Title */}
            <h1 
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Scale your business with{' '}
              <span className="text-[#3563E9]">intelligent</span> software solutions
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-[#0F0F0F]/60 mb-8 leading-relaxed">
              Transform your operations with custom-built enterprise software designed to accelerate growth, reduce costs, and drive innovation across your organization.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('lead-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#0F0F0F] text-white px-8 py-4 rounded-full hover:bg-[#0F0F0F]/90 transition-colors flex items-center gap-2"
              >
                Request free demo
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-[#0F0F0F] text-[#0F0F0F] px-8 py-4 rounded-full hover:bg-[#0F0F0F]/5 transition-colors">
                Explore services
              </button>
            </div>
          </div>

          {/* Right Column - Dashboard Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl border border-[#0F0F0F]/10 p-8 shadow-sm">
              {/* Live Badge */}
              <div className="absolute top-6 right-6">
                <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Live
                </span>
              </div>

              {/* Dashboard Content */}
              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="text-sm font-semibold mb-3 text-[#0F0F0F]/60">PERFORMANCE METRICS</h3>
                  
                  {/* Metric 1 */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#0F0F0F]/60">Processing Speed</span>
                      <span className="text-2xl font-bold text-[#3563E9]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        3.2x faster
                      </span>
                    </div>
                    <div className="w-full bg-[#F7F6F3] rounded-full h-2">
                      <div className="bg-[#3563E9] h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#0F0F0F]/60">System Uptime</span>
                      <span className="text-2xl font-bold text-[#3563E9]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        99% uptime
                      </span>
                    </div>
                    <div className="w-full bg-[#F7F6F3] rounded-full h-2">
                      <div className="bg-[#3563E9] h-2 rounded-full" style={{ width: '99%' }}></div>
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#0F0F0F]/60">Cost Reduction</span>
                      <span className="text-2xl font-bold text-green-500 flex items-center gap-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        <TrendingUp className="w-5 h-5" />
                        -40% costs
                      </span>
                    </div>
                    <div className="w-full bg-[#F7F6F3] rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Additional Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#0F0F0F]/10">
                  <div>
                    <div className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>850+</div>
                    <div className="text-xs text-[#0F0F0F]/60">Active Users</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>24/7</div>
                    <div className="text-xs text-[#0F0F0F]/60">Support</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>150+</div>
                    <div className="text-xs text-[#0F0F0F]/60">Integrations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
