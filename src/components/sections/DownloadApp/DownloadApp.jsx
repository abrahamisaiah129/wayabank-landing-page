import React from 'react';
import phoneinhand from '../../../assets/images/phoneinhand.png';
import googleplay from '../../../assets/images/googleplay.png';
import appstore from '../../../assets/images/appstore.png';
import './DownloadApp.css';

export default function DownloadApp() {
  return (
    <section className="download-cta py-24 px-6">
      <div className="max-w-6xl mx-auto rounded-[3rem] bg-gray-900 overflow-hidden shadow-3xl text-white relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 bg-gradient-to-l from-primary-theme to-transparent pointer-events-none"></div>
        
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 p-12 md:p-20 z-10 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Ready to transform your <span className="text-black">banking?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Download the WayaBank app today and join thousands of users enjoying seamless financial freedom.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="block transform hover:-translate-y-1 transition-transform">
                <img src={googleplay} alt="Download on Play Store" className="h-14" />
              </a>
              <a href="https://apple.co/appstore" target="_blank" rel="noreferrer" className="block transform hover:-translate-y-1 transition-transform">
                <img src={appstore} alt="Download on App Store" className="h-14" />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative flex justify-end items-end h-[400px] lg:h-auto">
            <img 
              src={phoneinhand} 
              alt="WayaBank app in hand" 
              className="w-full max-w-md object-contain lg:object-right-bottom drop-shadow-2xl translate-y-20 lg:translate-y-0" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
