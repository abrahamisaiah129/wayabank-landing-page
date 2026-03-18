import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { getSettings } from '../../states/home';
import LegalLayout from '../../components/parts/LegalLayout';

function TermsOfUse() {
  const data = useRecoilValueLoadable(getSettings);
  const settings = data.state === "hasValue" ? data.contents : {};

  const sections = [
    {
      id: 'terms-of-use',
      label: 'Terms of Use',
      content: settings.terms_of_use || '<p>Loading terms content...</p>'
    },
    {
      id: 'acceptable-use',
      label: 'Acceptable Use',
      content: '<h4>Proper Usage</h4><p>By using WayaBank services, you agree to abide by all local and international financial regulations. Fraudulent activities or misuse of the platform will lead to immediate account suspension.</p>'
    },
    {
      id: 'compliance',
      label: 'Regulatory Compliance',
      content: '<h4>CBN Standards</h4><p>Our terms are designed to comply with Central Bank of Nigeria guidelines, ensuring a safe and transparent banking experience for all users.</p>'
    }
  ];

  return <LegalLayout title="Terms & Conditions" sections={sections} />;
}

export default TermsOfUse;