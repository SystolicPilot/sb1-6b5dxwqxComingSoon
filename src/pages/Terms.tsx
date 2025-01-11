import React from 'react';
import { LegalLayout } from '../components/LegalLayout';

export const Terms: React.FC = () => {
  return (
    <LegalLayout title="Platform Terms">
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing and using A320Prep's platform, you agree to be bound by these Terms of Service.
        Please read these terms carefully before using our services.
      </p>

      <h2>2. Services Description</h2>
      <p>
        A320Prep provides an online learning platform focused on A320 aircraft systems training.
        Our services include but are not limited to educational content, practice tests, and
        interactive learning materials.
      </p>

      <h2>3. User Accounts</h2>
      <p>
        Users are responsible for maintaining the confidentiality of their account credentials
        and for all activities that occur under their account.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        All content provided on A320Prep is protected by copyright and other intellectual
        property laws. Users may not copy, modify, or distribute our content without
        explicit permission.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        A320Prep provides training materials for educational purposes only. We are not
        responsible for any outcomes related to the use of our platform.
      </p>
    </LegalLayout>
  );
};