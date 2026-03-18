import React from 'react';
import '../../components/FeatureCard.css';
/**
 * FeatureCard - A reusable, branded card component for services and features.
 * Based on the premium WayaBank design system.
 * 
 * @param {Object} props
 * @param {React.ElementType|React.ReactNode} props.icon - Icon component or SVG/Image node
 * @param {string} props.title - The primary title of the card
 * @param {string} props.description - The descriptive text
 * @param {React.ReactNode} [props.footer] - Optional footer content (e.g., links or buttons)
 * @param {string} [props.className] - Additional classes for the inner card
 * @param {string} [props.containerClassName] - Additional classes for the outer wrapper
 */
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  footer, 
  variant = "default", // "default" or "logo"
  className = "",
  containerClassName = "",
  titleClassName = "",
  descriptionClassName = ""
}) => {
  return (
    <div className={`waya-feature-card-container ${containerClassName}`}>
      <div className={`bg-white rounded-[2.5rem] shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col group overflow-hidden relative ${className}`}>
        <div className="p-8 md:p-10 flex flex-col h-full">
          {/* Icon Wrapper */}
          <div className={`mb-8 transition-all transform-gpu group-hover:scale-110 flex items-center justify-start ${variant === 'logo' ? 'w-full h-auto max-w-[200px]' : 'w-16 h-16 md:w-20 md:h-20 waya-icon-bg'}`}>
            <div className={`${variant === 'logo' ? 'w-full h-full' : 'w-8 h-8 md:w-10 md:h-10 text-white flex items-center justify-center'}`}>
              {typeof Icon === 'function' ? <Icon /> : Icon}
            </div>
          </div>

          {/* Content */}
          {title && (
            <h4 className={`text-2xl font-black text-[#FF6700] mb-4 tracking-tight group-hover:text-[#E65A00] transition-colors duration-300 ${titleClassName}`}>
              {title}
            </h4>
          )}
          <p className={`text-gray-900 leading-relaxed font-bold mb-auto ${descriptionClassName}`}>
            {description}
          </p>

          {/* Footer */}
          {footer && (
            <div className="mt-8">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
