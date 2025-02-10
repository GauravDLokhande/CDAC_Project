import React from "react";
import { FaEnvelope, FaPhoneAlt, FaQuestionCircle } from "react-icons/fa";

const HelpSupport = () => {
  return (
    <div className="min-h-screen bg-[#Dcd6f7] flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-8">
        <h2 className="text-4xl font-bold text-[#424874] text-center mb-8">
          Help and Support
        </h2>

        {/* Introduction Section */}
        <div className="mb-8">
          <p className="text-lg text-[#424874] text-center">
            Welcome to ByteLearn's Help and Support page. We are here to assist you with any issues or questions you may have while using our platform. Please read through our FAQs or reach out to our support team for further assistance.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#424874] mb-4">How to Contact Us</h3>
          <div className="text-lg text-[#424874]">
            <p className="mb-4">
              <FaEnvelope className="inline mr-2 text-[#424874]" />
              <strong>Email Support:</strong> For general inquiries or technical issues, please email us at 
              <a href="mailto:support@bytelearn.com" className="text-[#a6b1e1] hover:underline"> support@bytelearn.com</a>.
            </p>
            <p>
              <FaPhoneAlt className="inline mr-2 text-[#424874]" />
              <strong>Phone Support:</strong> If you need immediate assistance, you can reach our support team at +1 (800) 123-4567.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#424874] mb-4">Frequently Asked Questions (FAQ)</h3>
          <ul className="list-disc pl-6 text-[#424874]">
            <li className="mb-2">
              <strong>How do I reset my password?</strong> <br />
              If you've forgotten your password, click the "Forgot Password" link on the login page to reset it.
            </li>
            <li className="mb-2">
              <strong>How can I enroll in a course?</strong> <br />
              To enroll in a course, simply visit the course page and click the "Enroll Now" button.
            </li>
            <li className="mb-2">
              <strong>Do you offer certifications?</strong> <br />
              Yes! After successfully completing a course, you will receive a certificate of completion.
            </li>
          </ul>
        </div>

        {/* Help Articles Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#424874] mb-4">Help Articles and Guides</h3>
          <ul className="list-disc pl-6 text-[#424874]">
            <li className="mb-2">
              <a href="/help/how-to-enroll" className="text-[#a6b1e1] hover:underline">How to Enroll in a Course</a>
            </li>
            <li className="mb-2">
              <a href="/help/track-progress" className="text-[#a6b1e1] hover:underline">How to Track Your Learning Progress</a>
            </li>
            <li className="mb-2">
              <a href="/help/payment-issues" className="text-[#a6b1e1] hover:underline">Troubleshooting Payment Issues</a>
            </li>
          </ul>
        </div>

        {/* Technical Support Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#424874] mb-4">Technical Support</h3>
          <p className="text-lg text-[#424874]">
            If you are experiencing technical issues with the website, such as login errors, video playback problems, or other platform-related issues, please refer to our troubleshooting guides or contact us via email or phone for personalized support.
          </p>
        </div>

        {/* Final Note */}
        <div className="text-center">
          <p className="text-lg text-[#424874]">
            Our support team is available Monday through Friday, from 9:00 AM to 5:00 PM (EST). We aim to respond to all inquiries within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
