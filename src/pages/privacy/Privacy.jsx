import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { getSettings } from '../../states/home';
import LegalLayout from '../../components/parts/LegalLayout';

function PrivacyPage() {
  const data = useRecoilValueLoadable(getSettings);
  const settings = data.state === "hasValue" ? data.contents : {};

  const sections = [
    {
      id: 'privacy-policy',
      label: 'Privacy Policy',
      content: settings.privacy_and_policy || '<p>Loading policy content...</p>'
    },
    {
      id: 'data-protection',
      label: 'Data Protection',
      content: '<h4>Data Protection Standards</h4><p>At WayaBank, we employ industry-leading encryption and security protocols to ensure your financial data remains private and protected at all times.</p>'
    },
    {
      id: 'security',
      label: 'Information Security',
      content: '<h4>Security Commitment</h4><p>Your trust is our priority. We continuously monitor and upgrade our systems to prevent unauthorized access and protect against emerging cyber threats.</p>'
    }
  ];

  return <LegalLayout title="Privacy Notice" sections={sections} />;
}

export default PrivacyPage;