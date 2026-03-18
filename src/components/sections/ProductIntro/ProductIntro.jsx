import React from 'react';
import Rocket from '../../../assets/big-rocket.svg';

function ProductIntro() {
    return (
        <div className="flex flex-col py-24 px-8 md:px-12 bg-white">
            <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 lg:pb-16 gap-16">
                <div className="h-full flex w-full justify-center lg:justify-end items-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-black/5 rounded-[3rem] rotate-6 scale-105 transition-transform duration-700 group-hover:rotate-0"></div>
                        <img src={Rocket} alt="product_rocket" className="relative mx-auto w-full max-w-sm transition-transform duration-700 group-hover:scale-105" />
                    </div>
                </div>
                <div className="w-full flex flex-col items-start justify-center">
                    <h4 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-8">Get onboarded and begin accepting payments in no time.</h4>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 shadow-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <p className="text-lg text-gray-600 font-medium pt-1"><span className="text-black font-black">Register</span> account with us.</p>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 shadow-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <p className="text-lg text-gray-600 font-medium pt-1">Perform test mode transactions by using test API keys.</p>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 shadow-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <p className="text-lg text-gray-600 font-medium pt-1">Submit compliance form</p>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 shadow-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <p className="text-lg text-gray-600 font-medium pt-1">Start collecting real-life payment from your customers either by integrating with our platforms or using our payment link feature.</p>
                        </li>
                    </ul>

                    <div className="mt-12">
                        <button className="bg-black text-white px-10 py-5 rounded-2xl font-black text-sm shadow-xl hover:bg-gray-800 transition-all transform hover:-translate-y-1">
                            REGISTER NOW
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col items-center mt-32">
                <h4 className="text-black text-4xl font-black mb-10">WayaQuick Products</h4>

                <div className="toggle border border-gray-100 flex items-center w-full max-w-md h-16 rounded-full bg-gray-50 p-1.5 shadow-inner">
                    <div className="w-1/2 h-full flex items-center justify-center rounded-full bg-black shadow-lg">
                        <p className="text-white text-sm font-black tracking-wider uppercase">Web POS</p>
                    </div>
                    <div className="w-1/2 h-full flex items-center justify-center rounded-full">
                        <p className="text-gray-400 text-sm font-black tracking-wider uppercase">Terminal POS</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductIntro;
