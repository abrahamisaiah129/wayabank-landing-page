import React, { useState, useEffect } from 'react';
import './FloatingBot.css';

const FloatingBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHelpMsg, setShowHelpMsg] = useState(false);

  useEffect(() => {
    // Show help message after 2 seconds if bot isn't open
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowHelpMsg(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const toggleBot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setShowHelpMsg(false);
    }
  };

  const closeHelpMsg = (e) => {
    e.stopPropagation();
    setShowHelpMsg(false);
  };

  return (
    <div className="floating-bot-container">
      {isOpen && (
        <div className="bot-window animate-fade-in-up">
          <div className="bot-header">
            <h3>WayaCare Support</h3>
            <button onClick={toggleBot} className="close-bot">&times;</button>
          </div>
          <div className="bot-body">
            {/* Zoho SalesIQ / CRM Chat Widget Template */}
            <div className="zoho-template">
              <p className="font-bold text-gray-800">Support is Online</p>
              <div className="fake-chat-bubble">Hello! Welcome to WayaBank. How can we assist you with WayaQuick today?</div>
              
              <div className="mt-4 p-3 bg-orange-50 border border-orange-100 rounded-lg text-xs text-orange-800">
                <strong>ZOHO CRM INTEGRATION:</strong><br/>
                This bot is ready to be linked to your Zoho SalesIQ account. 
              </div>

              <div className="zoho-footer">
                <span>Integrated with Zoho CRM</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {showHelpMsg && !isOpen && (
        <div className="help-message-box animate-fade-in-right">
          <button className="close-help-msg" onClick={closeHelpMsg} aria-label="Close help message">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="help-text">
            Hi 👋. Need any help?
          </div>
        </div>
      )}
      
      <button 
        className={`bot-toggle-btn ${isOpen ? 'active' : ''}`} 
        onClick={toggleBot}
        aria-label="Toggle Support Bot"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default FloatingBot;
