'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800 shadow-2xl"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Terms and Conditions
            </h1>
            <p className="text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using our lead generation and marketing services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Services Description</h2>
              <p className="text-gray-300 mb-4">
                We provide lead generation and marketing services to businesses. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Lead generation and qualification</li>
                <li>Marketing campaign management</li>
                <li>Business development support</li>
                <li>Sales pipeline management</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Payment Terms</h2>
              <p className="text-gray-300 mb-4">
                Payment terms are as follows:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Immediate payment: Full payment is required before service commencement</li>
                <li>Post-lead payment: Payment is due after the first qualified lead is delivered</li>
                <li>All payments are non-refundable once services have commenced</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Service Level Agreement</h2>
              <p className="text-gray-300 mb-4">
                We commit to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Delivering qualified leads within agreed timeframes</li>
                <li>Maintaining professional communication standards</li>
                <li>Providing regular performance reports</li>
                <li>Ensuring data privacy and security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Confidentiality</h2>
              <p className="text-gray-300 mb-4">
                Both parties agree to maintain the confidentiality of all business information shared during the course of the service agreement. This includes but is not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Business strategies and plans</li>
                <li>Customer information</li>
                <li>Pricing structures</li>
                <li>Marketing materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                Either party may terminate this agreement with 30 days written notice. Termination does not relieve either party of obligations incurred prior to the termination date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                Our liability is limited to the amount paid for the services in the month preceding any claim. We are not liable for any indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.
              </p>
            </section>

            <div className="pt-8 border-t border-gray-800">
              <Link 
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-[1.02]"
              >
                Return to Signup Form
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 