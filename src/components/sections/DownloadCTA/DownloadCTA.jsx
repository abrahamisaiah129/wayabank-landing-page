import React from 'react';
import AndroidImage from '../../../assets/android.svg';
import IOSImage from '../../../assets/ios.svg';
import PhoneInHand from '../../../assets/phone-in-hand.png';

function DownloadCTA() {
    return (
        <div className="download-container px-5 md:px-20 mt-12">
           <div className="download-cta-container py-12 w-full h-auto bg-black rounded-[3rem] grid grid-cols-1 lg:grid-cols-3 relative overflow-hidden group">
                {/* Decorative background circle */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                
                <div className="flex items-center justify-center lg:justify-end pr-0 lg:pr-12">
                    <img src={PhoneInHand} alt="WayaQuick App" className="w-3/5 md:w-1/2 lg:w-4/5 object-contain" />
                </div>
                <div className="pl-8 md:pl-16 pt-12 lg:pt-28 col-span-2 pr-8 md:pr-12 lg:pr-64 relative z-10">
                    <h4 className="text-white font-black text-4xl md:text-5xl lg:text-5xl leading-tight">Download the app</h4>
                    <p className="text-gray-400 text-lg mt-4 font-medium">Download WayaQuick and start enjoying our great features.</p>

                    <div className="flex flex-wrap gap-4 mt-10">
                        <button className="bg-white/10 hover:bg-white/20 transition-all p-1 rounded-2xl w-44 shadow-xl">
                            <img src={AndroidImage} alt="Get it on Google Play" width="100%" />
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 transition-all p-1 rounded-2xl w-44 shadow-xl">
                            <img src={IOSImage} alt="Download on the App Store" width="100%" />
                        </button>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default DownloadCTA;
