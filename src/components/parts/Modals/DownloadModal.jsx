import React from 'react';
import { Modal } from 'reactstrap';
import googleplay from '../../../assets/images/googleplay.png';
import appstore from '../../../assets/images/appstore.png';
import qrcode from '../../../assets/images/qrcode.png';

const DownloadModal = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <div className="p-4 text-center border-0 modal-content">
        <div className="mb-4 text-right">
          <button onClick={toggle} className="text-2xl text-gray-400 hover:text-gray-600">&times;</button>
        </div>
        <h2 className="mb-4 text-3xl font-bold text-black">Download Waya App</h2>
        <p className="mb-8 text-gray-600">Start your journey to financial freedom. Click the buttons below to download.</p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="transform transition-transform hover:scale-105">
            <img src={googleplay} alt="Play Store" className="h-14" />
          </a>
          <a href="https://apple.co/appstore" target="_blank" rel="noreferrer" className="transform transition-transform hover:scale-105">
            <img src={appstore} alt="App Store" className="h-14" />
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default DownloadModal;
