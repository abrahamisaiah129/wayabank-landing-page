import React from "react";
import "./HowItWorks.scss";
import step1Img from "../../../assets/how-it-works-step1-new.png";
import step2Img from "../../../assets/how-it-works-step2-new.png";
import step3Img from "../../../assets/how-it-works-step3-new.png";

const steps = [
  {
    number: "01",
    title: "Download WayaBank App",
    description:
      "It only takes a few minutes to start enjoying free benefits. Download WayaBank on Google Play or the App Store.",
    align: "left",
    imgSrc: step1Img,
  },
  {
    number: "02",
    title: "Verify Your Account",
    description:
      "Verify your email address, phone number, and BVN to ensure your account security.",
    align: "right",
    imgSrc: step2Img,
  },
  {
    number: "03",
    title: "Start Transacting",
    description:
      "Start enjoying WayaBank. Make savings, withdrawals, transfers, bill payments, and more.",
    align: "left",
    imgSrc: step3Img,
  },
];

const HowItWorks = ({ id }) => {
  return (
    <section id={id} className="how-it-works-v3 py-32 bg-black overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>

      <div className="container px-6 md:px-12 mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-24">
            <h2 className="section-title !text-white uppercase tracking-tighter">
              Getting started is <span className="text-orange-500">seamless</span>
            </h2>
            <div className="mx-auto mb-8 h-[4px] w-16 rounded-full bg-orange-500" />
            <p className="text-lg !text-gray-300 font-medium leading-relaxed">
              We've engineered WayaBank to be as intuitive as possible. Follow these three steps to unlock your financial freedom.
            </p>
        </div>

        <div className="relative">
          {/* Central Timeline Line (Desktop Only) */}
          <div className="hidden lg:block absolute left-1/2 top-20 bottom-20 w-px bg-gradient-to-b from-orange-500/0 via-orange-500/20 to-orange-500/0 -translate-x-1/2"></div>

          <div className="flex flex-col gap-32 lg:gap-48">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Icon Section */}
                <div className="lg:w-[45%] flex justify-center relative">
                    <div className="relative group">
                      {/* Decorative elements behind icon */}
                      <div className="absolute inset-0 bg-white/5 rounded-[3rem] -rotate-6 scale-105 group-hover:rotate-0 transition-transform duration-700"></div>
                      <div className="absolute inset-0 bg-[#0a0a0a] shadow-2xl border border-white/10 rounded-[3rem] rotate-3 scale-100 group-hover:rotate-0 transition-transform duration-700"></div>
                      
                      {/* Icon Container */}
                      <div className="relative w-full max-w-[420px] aspect-square flex overflow-hidden rounded-[3.5rem] shadow-2xl border border-white/10 bg-[#0a0a0a]">
                        <img 
                          src={step.imgSrc} 
                          alt={step.title} 
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                          style={{ height: '100%', width: '100%', objectFit: 'cover', display: 'block' }}
                        />
                      </div>

                      {/* Floating Step Badge */}
                      <div className={`absolute -top-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-16 h-16 bg-orange-500 text-white rounded-[1.25rem] shadow-2xl flex items-center justify-center font-black text-2xl z-10 border-4 border-black transform hover:rotate-12 transition-transform`}>
                        {step.number}
                      </div>
                    </div>
                </div>

                {/* Vertical Connector Dot (Desktop) */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-orange-500 rounded-full z-10 shadow-sm shadow-orange-500/20">
                    <div className="m-auto w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
                </div>

                {/* Content Section */}
                <div className="lg:w-[45%] text-center lg:text-left">
                    <div className="space-y-6">
                      <span className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 text-orange-500 font-black rounded-xl text-[10px] uppercase tracking-[0.15em]">
                        Process {step.number}
                      </span>
                      <h3 className="text-4xl md:text-5xl font-black !text-white leading-tight uppercase tracking-tighter">
                        {step.title}
                      </h3>
                      <p className="text-lg !text-gray-300 leading-relaxed font-medium">
                        {step.description}
                      </p>

                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;