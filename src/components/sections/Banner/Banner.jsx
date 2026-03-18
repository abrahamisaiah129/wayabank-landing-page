import React from 'react';
import { SafetyCertificateOutlined, ArrowRightOutlined, StarFilled, ThunderboltOutlined } from '@ant-design/icons';
import phoneImage from '../../../assets/phone-clear-image-portrait.png';
// import phoneImage from '../../../assets/iphone-waya-clear.png';
import Button from '../../parts/Button';
import './Banner.scss';
import { useSetRecoilState } from 'recoil';
import { downloadModalState } from '../../../states/home';

const Banner = ({ id }) => {
  const setDownloadModal = useSetRecoilState(downloadModalState);

  return (
    <section id={id} className="minimal-banner">
      <div className="banner-inner">

        {/* LEFT: Text Content */}
        <div className="banner-content-wrapper">
            <div className="trust-badge-top">
              <SafetyCertificateOutlined /> NDIC Insured & CBN Licensed
            </div>

            <h1 className="banner-headline">
              Open a Savings Account in <span className="text-accent-minimal">5 Minutes</span>
            </h1>

            <h2 className="banner-subhead">
          Wire your money your way <span className='text-accent-minimal'>-</span>    Experience the new age of digital banking. Secure your money, earn high interest, and manage your finances effortlessly without any hidden fees.
            </h2>

          <div className="banner-cta-wrapper">
            <Button onClick={() => setDownloadModal(true)} size="lg">
              Download Now <ArrowRightOutlined />
            </Button>
          </div>

            <div className="testimonial-preview">
              <div className="avatars">
                <img src="https://play-lh.googleusercontent.com/a-/ALV-UjW7pD0OU_DnTgN5fqrV1LpOh3qPUc9V2Jc437qw8i1NJAFnqojkpw=s128-rw" alt="Oyeniyi Muideen" />
                <img src="https://play-lh.googleusercontent.com/a-/ALV-UjWMMOpgT0wHVeWojK_Vj4MesmI6JK64q1QaB3C_f4bsKWtDhmc=s128-rw" alt="June Johnson" />
                <img src="https://play-lh.googleusercontent.com/a-/ALV-UjWl0sbgzTF5ijBxK0xC8IUBVBqYGWQTk4bXthULcHyA_-Ff7Q5J=s128-rw" alt="Tobi Olatunji" />
              </div>
              <div className="testimonial-text">
                <div style={{ color: '#fa8c16', fontSize: '14px', marginBottom: '2px' }}>
                  <StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled />
                </div>
                <span style={{ fontWeight: 800, color: 'rgba(255, 255, 255, 0.95)' }}>
                  <span style={{ color: '#FF6B00' }}>"</span>The best banking app I've used.<span style={{ color: '#FF6B00' }}>"</span>
                </span>
                <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}> — Over 500k+ users trust us.</span>
              </div>
            </div>
        </div>

        {/* RIGHT: Phone Image */}
          <div className="banner-phone-wrapper">
            <img src={phoneImage} alt="App on phone" className="banner-phone-img" />
          </div>
      </div>

      {/* Bottom trust signals — full width */}
        <div className="trust-signals-bottom">
          <div className="trust-item">
            <ThunderboltOutlined className="trust-icon" />
            <div className="trust-text">
              <span className="trust-text-main">Instant Transfers</span>
              <span className="trust-text-sub">Zero delays, always reliable</span>
            </div>
          </div>
          <div className="trust-item">
            <SafetyCertificateOutlined className="trust-icon" />
            <div className="trust-text">
              <span className="trust-text-main">Bank-grade Security</span>
              <span className="trust-text-sub">Your data is heavily encrypted</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="banner-stats-row">
          <div className="stat-unit">
            <span className="stat-value">500k+</span>
            <span className="stat-label">Downloads</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-unit">
            <span className="stat-value">1M+</span>
            <span className="stat-label">Active Users</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-unit">
            <span className="stat-value">1k+</span>
            <span className="stat-label">Trans/Hr</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-unit">
            <span className="stat-value">24/7</span>
            <span className="stat-label">Reliability</span>
          </div>
        </div>
    </section>
  );
};

export default Banner;