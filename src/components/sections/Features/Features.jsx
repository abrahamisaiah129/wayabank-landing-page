import React from 'react';
import FeatureCard from '../../parts/FeatureCard';
import AppStoreImg from '../../../assets/images/appstore.png';
import PlayStoreImg from '../../../assets/images/googleplay.png';
import phoneImage from '../../../assets/phone-clear-image-portrait.png';

export default function Features({ id }) {
  const featuresData = [
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-waya-primary">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      ), 
      title: "Bank-Grade Security", 
      desc: "Your assets are protected with multi-layer encryption and military-grade security protocols." 
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-waya-primary">
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="M7 8h10M7 12h10M7 16h6"/>
        </svg>
      ), 
      title: "Seamless Transfers", 
      desc: "Send and receive money instantly across all Nigerian banks with just a few taps." 
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-waya-primary">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
        </svg>
      ), 
      title: "Smart Savings", 
      desc: "Automate your savings and watch your wealth grow with high-yield interest rates." 
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-waya-primary">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ), 
      title: "Agent Network", 
      desc: "Access our vast network of agents nationwide for cash-in and cash-out operations." 
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-waya-primary">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
          <path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>
        </svg>
      ), 
      title: "Merchant Growth", 
      desc: "Scale your business with Waya Merchats. Accept payments and manage inventory seamlessly." 
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-waya-primary">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <path d="M12 7v3M12 13h.01"/>
        </svg>
      ), 
      title: "Expert Support", 
      desc: "Our dedicated support team is available 24/7 to assist you with any inquiries." 
    },
  ];

  return (
    <section id="features" className="features-v3 py-32 bg-black relative overflow-hidden">
      {/* Decorative background vectors */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <pattern id="grid-features" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#ff6700" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid-features)" />
        </svg>
      </div>

      <div className="container px-6 md:px-12 mx-auto relative max-w-[1440px]">
        <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="section-title !text-white uppercase tracking-tighter font-black text-5xl md:text-7xl lg:text-8xl">
              Everything you need to <br/>
              <span className="section-title-accent">manage</span> your money
            </h2>
            <div className="section-divider" />
            <p className="section-subtitle !text-white font-bold">
              Precision-engineered tools designed to give you total control over your financial ecosystem.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {featuresData.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.desc}
              className="!bg-[#0a0a0a] !border-white/10"
              titleClassName="!text-white font-black"
              descriptionClassName="!text-white font-bold"
            />
          ))}
        </div>

        {/* Bottom decorative section */}
          <div className="mt-28 p-12 bg-[#0c0d12] rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.4)] text-left overflow-hidden relative group border border-white/5">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <pattern id="grid-cta" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#ff6700" strokeWidth="0.5"/>
                </pattern>
                <rect width="100" height="100" fill="url(#grid-cta)" />
              </svg>
            </div>
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center lg:text-left">
                <h3 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter uppercase leading-[0.9]">
                  Ready to transform <br/> your <span className="text-orange-500">banking?</span>
                </h3>
                <p className="text-white text-lg md:text-xl font-bold mb-10 leading-relaxed">
                  Download the WayaBank app today and join thousands of users enjoying seamless financial freedom.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                  <a href="#" className="transition-all hover:scale-105 active:scale-95 shadow-2xl rounded-xl overflow-hidden grayscale hover:grayscale-0">
                    <img src={PlayStoreImg} alt="Play Store" className="h-12 w-auto" />
                  </a>
                  <a href="#" className="transition-all hover:scale-105 active:scale-95 shadow-2xl rounded-xl overflow-hidden grayscale hover:grayscale-0">
                    <img src={AppStoreImg} alt="App Store" className="h-12 w-auto" />
                  </a>
                </div>
              </div>

              {/* Contained Phone Image */}
              <div className="relative w-full max-w-[340px] lg:max-w-[400px] flex justify-center">
                <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full"></div>
                <img 
                  src={phoneImage} 
                  alt="Waya App" 
                  className="relative z-10 w-full h-auto max-h-[450px] object-contain drop-shadow-[0_20px_50px_rgba(255,107,0,0.3)] transform group-hover:scale-[1.02] group-hover:-rotate-1 transition-all duration-700" 
                />
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
