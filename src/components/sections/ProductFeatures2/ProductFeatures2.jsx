import React from 'react';
import FeatureCard from '../../parts/FeatureCard';

function ProductFeatures2() {
    return (
        <div className="product-features2 w-full h-auto pb-20 bg-gray-50/50">
            <div className="flex flex-col items-center pt-24 text-center">
                <h4 className="section-title">Unique <span className="section-title-accent">Features</span></h4>
                <div className="section-divider" />
                <p className="section-subtitle">Enable your business with the appropriate tools to acknowledge online payments and give the best client experience</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20 px-12 md:px-20">
                <FeatureCard 
                    title="Instant Activation"
                    description="Get enacted and execute inside 2 minutes. Totally internet onboarding with least documentation."
                    icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>}
                />
                
                <FeatureCard 
                    title="Easy Integration"
                    description="With modules for every significant stage and dialects, coordinate and go live with wayaPay in under 60 minutes."
                    icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>}
                />

                <FeatureCard 
                    title="API Driven"
                    description="Assemble your business for scale with our total API-driven robotization that requires zero manual intercession."
                    icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>}
                />

                <FeatureCard 
                    title="Multiple Payments"
                    description="Offer your customer the luxury of payment methond that waya pay supports including credit/debit cards, USSD, Bank and wallets."
                    icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>}
                />

                <FeatureCard 
                    title="Simple Pricing"
                    description="Our imaginative installment arrangements with serious evaluating simplify installments."
                    icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>}
                />

                <FeatureCard 
                    title="Industry Support"
                    description="Continuously accessible email, telephone and talk based help to help you in all your means."
                    icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>}
                />

                <FeatureCard 
                    title="Reporting"
                    description="Continuous information and bits of knowledge on your Wayapay Dashboard to settle on informed business choices."
                    icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>}
                />

                <FeatureCard 
                    title="Secure"
                    description="PCI DSS Level 1 consistent arrangement which eliminates your weight of administrative consistence."
                    icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>}
                />
            </div>
        </div>
    );
}

export default ProductFeatures2;
