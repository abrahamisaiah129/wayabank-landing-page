import React from 'react';

const ServiceCard = ({ Icon, title, desc, index }) => {
  return (
    <div className="group relative h-full flex flex-col items-start text-left bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-orange-500/20 transition-all duration-500 overflow-hidden">
      <div className="p-6 md:p-10 flex flex-col items-start h-full relative z-10">
        {/* Subtle Gradient Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

        {/* Icon Wrapper */}
        <div className="mb-8 w-16 h-16 md:w-20 md:h-20 rounded-[1.25rem] bg-orange-500/5 flex items-center justify-center group-hover:bg-orange-500/10 transition-colors duration-500 shadow-inner">
          <div className="transition-transform duration-500 transform group-hover:scale-110">
            <Icon />
          </div>
        </div>

        {/* Content */}
        <div>
          <h4 className="text-2xl font-black text-orange-500 mb-4 tracking-tight group-hover:text-orange-600 transition-colors duration-300">
            {title}
          </h4>
          <p className="text-gray-900 leading-relaxed font-bold">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
