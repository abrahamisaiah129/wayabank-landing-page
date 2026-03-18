import React from 'react';
import Privacy from '../../../assets/privacy.png';

function ProductFeatures() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-32 py-32 relative bg-white gap-20">
            <svg width="22" height="418" className="absolute left-8 md:left-20 top-28 hidden lg:block" viewBox="0 0 22 418" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="6" fill="#ff6700" />
                <circle cx="11" cy="209" r="6" fill="#ff6700" />
                <circle cx="11" cy="407" r="6" fill="#ff6700" />
                <circle cx="11" cy="11" r="10.5" stroke="#ff6700" strokeOpacity="0.3" />
                <circle cx="11" cy="209" r="10.5" stroke="#ff6700" strokeOpacity="0.3" />
                <circle cx="11" cy="407" r="10.5" stroke="#ff6700" strokeOpacity="0.3" />
                <line x1="10.5" y1="21" x2="10.5" y2="198" stroke="#ff6700" strokeOpacity="0.1" />
                <line x1="11.5" y1="220" x2="11.5" y2="396" stroke="#ff6700" strokeOpacity="0.1" />
            </svg>

            <div className="space-y-16">
                <div className="group">
                    <h4 className="text-waya-primary text-3xl font-black mb-4 transition-transform group-hover:translate-x-2 duration-500 uppercase tracking-tight">Protected Access</h4>
                    <p className="text-gray-600 text-lg leading-relaxed font-medium max-w-lg">Your Wayapay Account is protected with multiple layers of security. If you lose your phone, you can have your Wayapay account blocked at any time.</p>
                </div>
                <div className="group">
                    <h4 className="text-waya-primary text-3xl font-black mb-4 transition-transform group-hover:translate-x-2 duration-500 uppercase tracking-tight">Secure Transcations</h4>
                    <p className="text-gray-600 text-lg leading-relaxed font-medium max-w-lg">At Wayapay, we take security seriously so every payment made on our platform is 100% secure, even exceeding industry standard.</p>
                </div>
                <div className="group">
                    <h4 className="text-waya-primary text-3xl font-black mb-4 transition-transform group-hover:translate-x-2 duration-500 uppercase tracking-tight">Data Protection</h4>
                    <p className="text-gray-600 text-lg leading-relaxed font-medium max-w-lg">Wayapay stores all personal data at a secure location and we do not disclose any personal data to third parties.</p>
                </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
                <div className="relative">
                    <div className="absolute inset-0 bg-black/5 rounded-full blur-3xl scale-110"></div>
                    <img src={Privacy} alt="Privacy & Security" className="relative w-full max-w-md drop-shadow-2xl" />
                </div>
            </div>
        </div>
    );
}

export default ProductFeatures;
