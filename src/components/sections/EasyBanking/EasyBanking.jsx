import React from 'react';
import { useSetRecoilState } from 'recoil';
import { downloadModalState } from '../../../states/home';
import './EasyBanking.scss';
import FeatureCard from '../../parts/FeatureCard';

export default function EasyBanking() {
  const setDownloadModal = useSetRecoilState(downloadModalState);

  return (
    <section className="easy-banking-v2 py-32 bg-white relative overflow-hidden">
      {/* Decorative background vectors */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <pattern id="grid-easy-banking" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#ff6700" strokeWidth="0.2"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid-easy-banking)" />
        </svg>
      </div>

      <div className="container px-6 md:px-12 mx-auto relative max-w-[1300px]">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="section-title text-[#0a0b10] uppercase tracking-tighter font-black text-5xl md:text-7xl lg:text-8xl">
            The <span className="section-title-accent">easy-to-use</span> Banking platform
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle text-gray-600">
            We re-engineered this app to proudly enable you do a lot + perform
            financial transactions with ease. All you need is the receiver’s
            email or phone and you pay absolutely nothing for sending money
            with these.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Business Expenses"
              description="Pay bills and buy airtime easily without switching platforms, keep yourself organised."
              titleClassName="font-black text-[#0a0b10]"
              descriptionClassName="font-bold text-gray-800"
              icon={(
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="12" x="2" y="6" rx="2"/>
                  <circle cx="12" cy="12" r="2"/>
                  <path d="M6 12h.01M18 12h.01"/>
                </svg>
              )}
            />

            <FeatureCard 
              title="Easy Mobile Transfers"
              description="Transfer or receive money with just your phone number. That’s all you need."
              titleClassName="font-black text-[#0a0b10]"
              descriptionClassName="font-bold text-gray-800"
              icon={(
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                  <path d="M12 18h.01"/>
                </svg>
              )}
            />

            <FeatureCard 
              title="Secure & Managed"
              description="Whatever you choose to do with your money, we’ll make sure it’s done better and free."
              titleClassName="font-black text-[#0a0b10]"
              descriptionClassName="font-bold text-gray-800"
              icon={(
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              )}
              containerClassName="md:col-span-2 lg:col-span-1"
            />
        </div>
      </div>
    </section>
  );
}
