import React, { useState } from 'react';
import Navbar from '../sections/Navbar/Navbar';
import PageFooter from '../sections/Footer/Footer';
import Fade from 'react-reveal/Fade';

const LegalLayout = ({ title, sections }) => {
  const [activeTab, setActiveTab] = useState(sections[0].id);

  return (
    <div className="min-h-screen bg-[#FAFBFF]">
      <Navbar forceScrolled={true} />
      
      {/* Hero Section */}
      <div className="bg-black py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] -mr-48 -mt-48 transition-transform duration-1000"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <Fade bottom distance="20px" duration={600}>
            <div>
              <span className="text-orange-500 font-black uppercase tracking-[0.2em] text-xs mb-4 block">Legal Resources</span>
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                {title}
              </h1>
              <div className="w-24 h-2 bg-orange-500 rounded-full"></div>
            </div>
          </Fade>
        </div>
      </div>

      {/* Main Content with Tabs */}
      <div className="container mx-auto max-w-7xl px-6 md:px-12 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Tabs Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-2">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6 ml-4">Table of Contents</h3>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`w-full text-left px-6 py-4 rounded-2xl font-black transition-all duration-300 flex items-center justify-between group ${
                    activeTab === section.id 
                      ? 'bg-orange-500 text-white shadow-xl shadow-orange-500/20 translate-x-2' 
                      : 'text-gray-500 hover:bg-white hover:text-black hover:shadow-md'
                  }`}
                >
                  <span className="uppercase tracking-tight text-sm">{section.label}</span>
                  <svg className={`w-5 h-5 transition-transform ${activeTab === section.id ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100 relative min-h-[600px]">
              {/* Fade for content swap */}
              <Fade key={activeTab} right distance="20px" duration={400}>
                <div className="prose prose-xl max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-orange">
                  <h2 className="text-3xl font-black text-black uppercase tracking-tighter mb-8 border-b-4 border-orange-500 inline-block text-gray-900">
                    {sections.find(s => s.id === activeTab).label}
                  </h2>
                  <div 
                    className="text-gray-900 font-bold leading-relaxed space-y-6" 
                    dangerouslySetInnerHTML={{ __html: sections.find(s => s.id === activeTab).content }} 
                  />
                </div>
              </Fade>
            </div>
          </div>

        </div>
      </div>

      <PageFooter />
    </div>
  );
};

export default LegalLayout;
