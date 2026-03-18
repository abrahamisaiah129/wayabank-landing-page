import React from "react";
import "./WayaEcosystem.scss";
import FeatureCard from "../../parts/FeatureCard";

const products = [
  {
    title: "WayaGram",
    description: "Discover beautiful places, people, conversations, vendors and clients. Chat and call clients, friends and family",
    buttonText: "Explore WayaGram",
    link: "https://wayagram.ng",
    color: "#E25822",
    icon: <img src="https://wayabank.ng/static/media/wayagram.41f374a0.png" alt="WayaGram" className="w-full h-auto object-contain" />
  },
  {
    title: "WayaQuick",
    description: "Accept payment on your website or mobile application via card, USSD, bank, wallet, PayAttitude.",
    buttonText: "Explore WayaQuick",
    link: "https://wayapay.ng",
    color: "#007BFF",
    icon: <img src="/src/assets/waya-quick-logo.png" alt="WayaQuick" className="w-full h-auto object-contain" />
  },
  {
    title: "WayaPOS",
    description: "Accepts MasterCard, VISA and Verve cards payment and perform other mobile banking services at your physical store with Wayapos Terminal POS device.",
    buttonText: "Get WayaPOS",
    link: "https://wayabank.ng",
    color: "#28A745",
    icon: <img src="https://wayabank.ng/static/media/wayaPos.1f7c27b1.png" alt="WayaPOS" className="w-full h-auto object-contain" />
  }
];

const WayaEcosystem = () => {
  return (
    <section id="ecosystem" className="waya-ecosystem py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 md:px-12 max-w-[1300px]">
        <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="section-title text-[#0a0b10] font-black">
              More from <span className="section-title-accent">Waya</span>
            </h2>
            <div className="section-divider" />
            <p className="section-subtitle text-gray-700 font-bold">
              Explore our range of integrated solutions designed to power your financial lifestyle and business growth.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <FeatureCard 
              key={index}
              description={product.description}
              icon={product.icon}
              variant="logo"
              footer={(
                <a 
                  href={product.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#FF6B00] text-white rounded-xl font-bold hover:bg-[#E65A00] transition-all duration-300 no-underline shadow-lg hover:shadow-orange-500/25"
                  style={{ textDecoration: 'none' }}
                >
                  {product.buttonText}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WayaEcosystem;
