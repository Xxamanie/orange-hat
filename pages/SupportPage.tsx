import React from 'react';
import { motion } from 'framer-motion';
import Support from '../components/Support';
import { NavigationProps } from '../types';

const SupportPage: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <main className="pt-[90px] bg-white text-gray-800">
      {/* Header */}
      <section className="bg-cream py-20 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }} 
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Support Our Mission
        </motion.h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Your support enables Orange Hat Childcare Foundation to continue creating safe spaces 
          where children and their caregivers can grow and thrive in our community.
        </p>
      </section>

      {/* Support Component */}
      <section className="py-20">
        <Support />
      </section>

      {/* Direct Bank Transfer Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-medium text-gray-800 mb-4 text-center">
            Direct Bank Transfer (Optional)
          </h2>
          
          <p className="text-gray-600 mb-8 text-center leading-relaxed">
            Some partners prefer to support the work through direct bank transfers. 
            If this is your preference, you may use the account details below.
          </p>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Account Name:</span>
                <span className="text-gray-800 font-medium">Orange Hat Foundation International</span>
              </div>
              
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Bank Name:</span>
                <span className="text-gray-800 font-medium">Zenith Bank</span>
              </div>
              
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Account Number:</span>
                <span className="text-gray-800 font-medium">XXXXXXXX</span>
              </div>
              
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Account Type:</span>
                <span className="text-gray-800 font-medium">Current</span>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-6 text-center">
            For accountability and record-keeping, you may notify us after making a transfer.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 mb-8"
          >
            Your Impact
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="text-orangeHat text-3xl mb-4">📚</div>
              <h3 className="font-semibold text-gray-800 mb-2">Education Support</h3>
              <p className="text-gray-600 text-sm">
                Your donation helps provide quality literature and learning materials 
                for our After School Adventure and Holiday programs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="text-greenHat text-3xl mb-4">🏠</div>
              <h3 className="font-semibold text-gray-800 mb-2">Safe Spaces</h3>
              <p className="text-gray-600 text-sm">
                Support helps maintain Rooted House and fund our mentorship programs 
                that provide safe spaces for growth and healing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="text-orangeHat text-3xl mb-4">🎯</div>
              <h3 className="font-semibold text-gray-800 mb-2">Skills Training</h3>
              <p className="text-gray-600 text-sm">
                Your contribution enables our Lovin' Oven Bakery and Hwolemen programs 
                to empower young people with practical skills.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orangeHat text-white py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Every Contribution Matters
          </h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Whether big or small, your support helps us continue our mission of creating 
            safe spaces where children and their caregivers can grow and thrive.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-orangeHat px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition"
          >
            Contact Us
          </button>
        </motion.div>
      </section>
    </main>
  );
};

export default SupportPage;