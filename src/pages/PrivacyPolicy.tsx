import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Section className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg text-gray-700">
          <p className="mb-6"><strong>Last Updated:</strong> August 2026</p>
          
          <p className="mb-6">
            Welcome to Ashrey Systems. We are committed to protecting your personal data in compliance with the Digital Personal Data Protection (DPDP) Act, 2023. This policy outlines how we collect, process, and protect your digital personal data.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">We collect the following itemized personal data:</p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Identity Data:</strong> First name and last name.</li>
            <li><strong>Contact Data:</strong> Email address and phone number.</li>
            <li><strong>Business Data:</strong> Company name and job title.</li>
            <li><strong>Technical Data:</strong> IP address and browser type.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Purpose of Collection</h2>
          <p className="mb-4">Your personal data is collected and processed solely for the following specific, lawful purposes:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>To provide, operate, and maintain our software applications and services.</li>
            <li>To communicate with you regarding your inquiries, support requests, or service updates.</li>
            <li>To comply with legal and regulatory obligations.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Consent and Withdrawal</h2>
          <p className="mb-6">
            By using our website and services, you provide explicit, affirmative consent to the collection and processing of your data as outlined in this policy. You have the right to withdraw your consent at any time. If you choose to withdraw consent, we will cease processing your personal data, though this may affect our ability to provide certain services to you.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Your Rights as a Data Principal</h2>
          <p className="mb-4">Under the DPDP Act, you possess the following rights:</p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Right to Access:</strong> Request a summary of the personal data we hold about you and the identities of third parties with whom it has been shared.</li>
            <li><strong>Right to Correction and Erasure:</strong> Request the correction of inaccurate data or the deletion of your data once its purpose has been fulfilled.</li>
            <li><strong>Right to Grievance Redressal:</strong> Register a complaint regarding your data processing.</li>
            <li><strong>Right to Nominate:</strong> Nominate a legal heir or representative to exercise your privacy rights in the event of your death or incapacity.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Security and Storage Limitation</h2>
          <p className="mb-6">
            We implement appropriate technical and organizational safeguards to protect your personal data from unauthorized access or breaches. Personal data is retained only for as long as necessary to fulfill the purpose for which it was collected, or as required by law.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Grievance Officer</h2>
          <p className="mb-4">
            If you have any questions, concerns, or wish to exercise your rights, please contact our designated Grievance Officer:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-2"><strong>Name:</strong> Akshay J</p>
            <p className="mb-2"><strong>Email:</strong> hello@ashreysystems.com</p>
            <p className="mb-0"><strong>Address:</strong> Ashrey Systems, Anand, Gujarat, India</p>
          </div>
          <p className="mb-6">
            If your grievance is not resolved satisfactorily within the stipulated timeframe, you have the right to appeal to the Data Protection Board of India.
          </p>
        </div>
      </Section>
    </Layout>
  );
}