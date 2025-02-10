import React from 'react';
import login_bg from "../assets/login_bg.jpg";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import icons

const ContactUs = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
    
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-8">
        <h2 className="text-4xl font-bold text-[#424874] text-center mb-8">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-[#424874] text-3xl" />
              <div>
                <h3 className="text-xl font-semibold text-[#424874]">Our Address</h3>
                <p className="text-lg text-[#424874]">
                  123 Main Street, Suite 4B, Cityville, XY 12345
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-[#424874] text-3xl" />
              <div>
                <h3 className="text-xl font-semibold text-[#424874]">Email</h3>
                <p className="text-lg text-[#424874]">contact@company.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-[#424874] text-3xl" />
              <div>
                <h3 className="text-xl font-semibold text-[#424874]">Phone</h3>
                <p className="text-lg text-[#424874]">+1 (123) 456-7890</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form action="#" method="POST" className="space-y-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-lg font-medium text-[#424874] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="px-4 py-3 border border-gray-300 rounded-md text-[#424874] focus:outline-none focus:ring-2 focus:ring-[#a6b1e1]"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg font-medium text-[#424874] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="px-4 py-3 border border-gray-300 rounded-md text-[#424874] focus:outline-none focus:ring-2 focus:ring-[#a6b1e1]"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-lg font-medium text-[#424874] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="px-4 py-3 border border-gray-300 rounded-md text-[#424874] focus:outline-none focus:ring-2 focus:ring-[#a6b1e1]"
                  required
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#424874] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#a6b1e1] transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
