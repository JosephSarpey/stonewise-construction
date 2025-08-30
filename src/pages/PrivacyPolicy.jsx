import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto mt-4 px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>
      <p className="text-gray-600 mb-8 text-center">Last Updated: August 30, 2025</p>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Introduction</h2>
        <p className="mb-4">
          Welcome to Stonewise Construction. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Data We Collect</h2>
        <p className="mb-4">We may collect, use, store, and transfer different kinds of personal data about you, including:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Identity Data (name, username, or similar identifier)</li>
          <li>Contact Data (email address, telephone numbers)</li>
          <li>Technical Data (IP address, browser type, location, etc.)</li>
          <li>Usage Data (how you use our website and services)</li>
          <li>Marketing and Communications Data (your preferences in receiving marketing)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. How We Use Your Data</h2>
        <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>To provide and maintain our services</li>
          <li>To notify you about changes to our services</li>
          <li>To allow you to participate in interactive features of our website</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our services</li>
          <li>To monitor the usage of our services</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Data Security</h2>
        <p className="mb-4">
          We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Your Legal Rights</h2>
        <p className="mb-4">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Request access to your personal data</li>
          <li>Request correction of your personal data</li>
          <li>Request erasure of your personal data</li>
          <li>Object to processing of your personal data</li>
          <li>Request restriction of processing your personal data</li>
          <li>Request transfer of your personal data</li>
          <li>Right to withdraw consent</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          Email: stonewiseconstruction@gmail.com
          <br />
          Address: Cassava Street J327, Adenta- Aviation, Ghana.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
