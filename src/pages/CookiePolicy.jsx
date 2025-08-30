import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto mt-4 px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Cookie Policy</h1>
      <p className="text-gray-600 mb-8 text-center">Last Updated: August 30, 2025</p>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. What Are Cookies</h2>
        <p className="mb-4">
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the site owners.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. How We Use Cookies</h2>
        <p className="mb-4">We use different types of cookies for various purposes, including:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Essential Cookies:</strong> These are necessary for the website to function and cannot be switched off.</li>
          <li><strong>Performance Cookies:</strong> These allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
          <li><strong>Functional Cookies:</strong> These enable the website to provide enhanced functionality and personalization.</li>
          <li><strong>Targeting Cookies:</strong> These may be set through our site by our advertising partners to build a profile of your interests.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Third-Party Cookies</h2>
        <p className="mb-4">
          We may use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on. These cookies may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Your Cookie Choices</h2>
        <p className="mb-4">
          You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Types of Cookies We Use</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 mt-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-left">Name</th>
                <th className="py-2 px-4 border-b text-left">Purpose</th>
                <th className="py-2 px-4 border-b text-left">Expiry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">session_id</td>
                <td className="py-2 px-4 border-b">Maintains your session on our website</td>
                <td className="py-2 px-4 border-b">Session</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-2 px-4 border-b">_ga</td>
                <td className="py-2 px-4 border-b">Google Analytics - Used to distinguish users</td>
                <td className="py-2 px-4 border-b">2 years</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">_gid</td>
                <td className="py-2 px-4 border-b">Google Analytics - Used to distinguish users</td>
                <td className="py-2 px-4 border-b">24 hours</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-2 px-4 border-b">cookie_consent</td>
                <td className="py-2 px-4 border-b">Stores your cookie consent preferences</td>
                <td className="py-2 px-4 border-b">1 year</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Changes to This Cookie Policy</h2>
        <p className="mb-4">
          We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date at the top of this Cookie Policy.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Cookie Policy, please contact us at:
          <br />
          Email: stonewiseconstruction@gmail.com
          <br />
          Address: Cassava Street J327, Adenta- Aviation, Ghana.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;
