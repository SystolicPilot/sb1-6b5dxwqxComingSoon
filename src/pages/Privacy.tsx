import React from 'react';
import { LegalLayout } from '../components/LegalLayout';

export const Privacy: React.FC = () => {
  return (
    <LegalLayout title="A320 Hub Customer Privacy Notice">
      <p className="text-sm text-gray-600 mb-6">Registered name: Leonix Innovations Ltd</p>
      
      <p>This privacy notice tells you what to expect us to do with your personal information.</p>

      <h2>Contact Details</h2>
      <p>Email: <a href="mailto:hello@a320prep.com" className="text-primary-600 hover:text-primary-500">hello@a320prep.com</a></p>

      <h2>What Information We Collect, Use, and Why</h2>
      <p>We collect or use the following information to provide and improve products and services for clients:</p>
      <ul>
        <li>Names and contact details</li>
        <li>Addresses</li>
        <li>Occupation</li>
        <li>Date of birth</li>
        <li>Payment details (including card or bank information for transfers and direct debits)</li>
        <li>Usage data (including information about how you interact with and use our website, products and services)</li>
        <li>Records of meetings and decisions</li>
        <li>Account access information</li>
        <li>Website user information</li>
      </ul>

      <p>We collect or use the following personal information for the operation of client or customer accounts:</p>
      <ul>
        <li>Names and contact details</li>
        <li>Addresses</li>
        <li>Purchase or service history</li>
        <li>Account information, including registration details</li>
        <li>Information used for security purposes</li>
        <li>Marketing preferences</li>
        <li>Technical data, including information about browser and operating systems</li>
      </ul>

      <p>We collect or use the following personal information for information updates or marketing purposes:</p>
      <ul>
        <li>Names and contact details</li>
        <li>Addresses</li>
        <li>Profile information</li>
        <li>Marketing preferences</li>
        <li>Purchase or account history</li>
        <li>Website and app user journey information</li>
        <li>IP addresses</li>
      </ul>

      <p>We collect or use the following personal information for research or archiving purposes:</p>
      <ul>
        <li>Names and contact details</li>
        <li>Addresses</li>
        <li>Purchase or client account history</li>
        <li>Website and app user journey information</li>
        <li>IP addresses</li>
      </ul>

      <p>We collect or use the following personal information to comply with legal requirements:</p>
      <ul>
        <li>Name</li>
        <li>Contact information</li>
        <li>Any other personal information required to comply with legal obligations</li>
      </ul>

      <p>We collect or use the following personal information for dealing with queries, complaints or claims:</p>
      <ul>
        <li>Names and contact details</li>
        <li>Address</li>
        <li>Payment details</li>
        <li>Account information</li>
        <li>Purchase or service history</li>
        <li>Customer or client accounts and records</li>
        <li>Correspondence</li>
        <li>Location data</li>
      </ul>

      <h2>Lawful Bases and Data Protection Rights</h2>
      <p>Under UK data protection law, we must have a "lawful basis" for collecting and using your personal information. There is a list of possible lawful bases in the UK GDPR. You can find out more about lawful bases on the ICO's website.</p>

      <p>Your data protection rights include:</p>
      <ul>
        <li><strong>Right of access</strong> - You have the right to ask us for copies of your personal information.</li>
        <li><strong>Right to rectification</strong> - You have the right to ask us to correct or delete personal information you think is inaccurate or incomplete.</li>
        <li><strong>Right to erasure</strong> - You have the right to ask us to delete your personal information.</li>
        <li><strong>Right to restriction of processing</strong> - You have the right to ask us to limit how we can use your personal information.</li>
        <li><strong>Right to object to processing</strong> - You have the right to object to the processing of your personal data.</li>
        <li><strong>Right to data portability</strong> - You have the right to ask that we transfer the personal information you gave us to another organisation, or to you.</li>
        <li><strong>Right to withdraw consent</strong> - When we use consent as our lawful basis you have the right to withdraw your consent at any time.</li>
      </ul>

      <p>If you make a request, we must respond to you without undue delay and in any event within one month.</p>

      <h2>Our Lawful Bases</h2>
      <p>For all our data processing activities, our lawful basis is:</p>
      <p><strong>Consent</strong> - we have permission from you after we gave you all the relevant information. All of your data protection rights may apply, except the right to object. To be clear, you do have the right to withdraw your consent at any time.</p>

      <h2>Where We Get Personal Information From</h2>
      <p>Directly from you</p>

      <h2>How to Complain</h2>
      <p>If you have any concerns about our use of your personal data, you can make a complaint to us using the contact details at the top of this privacy notice.</p>

      <p>If you remain unhappy with how we've used your data after raising a complaint with us, you can also complain to the ICO.</p>

      <p>The ICO's address:</p>
      <address className="ml-4 mt-2">
        Information Commissioner's Office<br />
        Wycliffe House<br />
        Water Lane<br />
        Wilmslow<br />
        Cheshire<br />
        SK9 5AF
      </address>

      <p className="mt-4">Helpline number: 0303 123 1113</p>
      <p>Website: <a href="https://www.ico.org.uk/make-a-complaint" className="text-primary-600 hover:text-primary-500">https://www.ico.org.uk/make-a-complaint</a></p>

      <p className="mt-8 text-sm text-gray-600">Last updated: 9 January 2025</p>
    </LegalLayout>
  );
};