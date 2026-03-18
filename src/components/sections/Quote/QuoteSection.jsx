import React from 'react';
import Fade from 'react-reveal/Fade';

const QuoteSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <Fade bottom>
            <div className="relative inline-block">
              {/* Large Branded Quote Mark */}
              <span className="absolute -top-12 -left-12 text-[120px] leading-none text-orange-500/20 font-serif select-none">
                &ldquo;
              </span>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tighter uppercase italic">
                At <span className="text-orange-500">WayaBank</span> we believe your money should be yours.
              </h2>
              
              <div className="mt-8 flex flex-col items-center">
                <div className="h-1 w-20 bg-orange-500 rounded-full mb-6" />
                <p className="text-2xl md:text-4xl font-bold text-gray-800 tracking-tight italic">
                  Wire your money <span className="text-orange-500">your way.</span>
                </p>
              </div>

              <span className="absolute -bottom-12 -right-12 text-[120px] leading-none text-orange-500/20 font-serif select-none">
                &rdquo;
              </span>
            </div>
          </Fade>
        </div>
      </div>

      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] -z-0"></div>
    </section>
  );
};

export default QuoteSection;
