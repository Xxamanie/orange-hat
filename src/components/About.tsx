import React from 'react';
import { motion } from 'framer-motion';
import { APP_CONFIG, PROGRAMS_INFO, FUTURE_PLANS } from '../utils/constants';

const About: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {APP_CONFIG.vision}
          </p>
        </motion.div>

        {/* History Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Orange Hat Childcare Foundation began in <strong>{APP_CONFIG.founded}</strong> out of a small shop in Hwolshe, Jos, 
                with a simple mission: to serve children with quality literature and caring role-models 
                to inspire their minds to imagine the possibilities.
              </p>
              <p>
                What started as a small initiative has grown into a comprehensive foundation, 
                extending learning and growth opportunities to the children of Hwolshe who have 
                become young adults.
              </p>
              <p>
                In <strong>{APP_CONFIG.ngoRegistration}</strong>, we officially registered as an NGO in Plateau State, 
                formalizing our commitment to partner with local business owners and community 
                leaders to see transformational education and growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/orange-hat-history.jpg"
              alt="Orange Hat Foundation History"
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
          </motion.div>
        </div>

        {/* Current Operations */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-cream rounded-3xl p-8 md:p-12 mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Where We Operate
          </h3>
          <p className="text-gray-600 text-center mb-8">
            Orange Hat currently operates out of a building provided by COCIN Church Jiyep, 
            where we continue to make meaningful impact in the community through our various programs.
          </p>
          <div className="text-center">
            <p className="text-orangeHat font-semibold">
              📍 {APP_CONFIG.address}
            </p>
          </div>
        </motion.div>

        {/* Future Plans */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Future Plans
          </h3>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Plans are being formed to locate a property within Hwolshe where Orange Hat 
            can carry on meaningful impact in the community with expanded facilities.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FUTURE_PLANS.newFacility.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-orangeHat text-2xl mb-3">🏢</div>
                <p className="text-gray-700 font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Impact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Community Matters
          </h3>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            We believe in the power of community. Parents, mentors, volunteers, and business owners 
            are all carriers of the vision of Orange Hat through their prayers and support. 
            Together, we create lasting transformation in the lives of children and young adults.
          </p>
          
          <div className="mt-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block bg-gradient-to-r from-orangeHat to-greenHat text-white px-8 py-4 rounded-full font-semibold text-lg"
            >
              Be part of the impact! 🧡
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;