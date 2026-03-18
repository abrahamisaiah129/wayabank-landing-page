import React from "react";
import ServiceCard from "./ServiceCard";
import Button from "../../parts/Button";

/* ─── SVG Icons ─── */
const IconPersonal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-orange-500">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconBusiness = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-orange-500">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const IconPOS = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-orange-500">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M7 15h0M2 9.5h20" />
  </svg>
);

const IconLoan = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-orange-500">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const IconTravel = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-orange-500">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>
);

/* ─── Card Data ─── */
const servicesData = [
  {
    Icon: IconPersonal,
    title: "Digital Personal Banking",
    desc: "Fully digital banking via web, mobile app and USSD. Available on Android and iOS — make savings and carry out payments seamlessly.",
  },
  {
    Icon: IconBusiness,
    title: "Digital Business Banking",
    desc: "Tailor-made for businesses. Make savings, carry out payments, earn commission as an agent or aggregator, and access Wayabank open APIs.",
  },
  {
    Icon: IconPOS,
    title: "Request a POS Terminal",
    desc: "Accepts MasterCard, VISA, Verve cards and more. Process payments and manage business transactions with a reliable Wayabank POS device.",
  },
  {
    Icon: IconLoan,
    title: "Loan Request",
    desc: "Quick access to funds for individuals and businesses. Fill out the application and our team reviews it promptly — transparent and efficient.",
  },
  {
    Icon: IconTravel,
    title: "Travel Loan",
    desc: "Get the financial documentation you need for travel, quickly and without hassle. Secure your travel loan and take the next step in your journey.",
  },
];

/* ─── Main Component ─── */
export default function Services({ id, onDownloadClick }) {
  return (
    <section id={id} className="w-full px-[5%] py-24 font-body bg-white relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] -ml-32 -mb-32"></div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="section-title text-[#0a0b10] uppercase tracking-tighter font-black">
          Waya<span className="section-title-accent">Bank</span> Services
        </h2>
        <div className="mx-auto mb-6 h-[4px] w-16 rounded-full bg-orange-500" />
        <p className="section-subtitle text-gray-900 font-black text-xl leading-relaxed">
          Thoughtfully designed for you.
        </p>
      </div>

      {/* Bento-style grid */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        <div className="lg:col-span-2">
          <ServiceCard Icon={servicesData[0].Icon} title={servicesData[0].title} desc={servicesData[0].desc} index={0} />
        </div>
        <div>
          <ServiceCard Icon={servicesData[1].Icon} title={servicesData[1].title} desc={servicesData[1].desc} index={1} />
        </div>
        <div>
          <ServiceCard Icon={servicesData[2].Icon} title={servicesData[2].title} desc={servicesData[2].desc} index={2} />
        </div>
        <div className="lg:col-span-2">
          <ServiceCard Icon={servicesData[3].Icon} title={servicesData[3].title} desc={servicesData[3].desc} index={3} />
        </div>
        <div className="lg:col-span-3">
          <ServiceCard Icon={servicesData[4].Icon} title={servicesData[4].title} desc={servicesData[4].desc} index={4} />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 flex justify-center relative z-10">
        <Button
          size="lg"
          onClick={onDownloadClick}
          className="min-w-[260px]"
        >
          Download Waya App
        </Button>
      </div>
    </section>
  );
}
