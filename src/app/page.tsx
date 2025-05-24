'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface SignupFormData {
  firstName: string;
  lastName: string;
  middleInitial?: string;
  businessName: string;
  pointOfContact: string;
  primaryEmail: string;
  secondaryEmail?: string;
  additionalNames?: string;
  serviceType: 'leads' | 'marketing' | 'both';
  paymentType: 'now' | 'afterFirstLead';
  agreedToTerms: boolean;
}

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: SignupFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          businessName: data.businessName,
          serviceType: data.serviceType,
          paymentType: data.paymentType,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send notification');
      }

      console.log(data);
      alert('Form submitted successfully! We will contact you shortly.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black z-10" />
        <div className="absolute inset-0 bg-[url('/premium-bg.jpg')] bg-cover bg-center" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Llama Leads Generation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join an elite network of industry leaders. Experience premium lead generation services tailored for high-value businesses.
          </p>
        </motion.div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800 shadow-2xl"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  {...register('firstName', { required: 'First name is required' })}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-400">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  {...register('lastName', { required: 'Last name is required' })}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-400">{errors.lastName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="middleInitial" className="block text-sm font-medium text-gray-300 mb-2">
                  Middle Initial
                </label>
                <input
                  type="text"
                  id="middleInitial"
                  maxLength={1}
                  {...register('middleInitial')}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-300 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  {...register('businessName', { required: 'Business name is required' })}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                />
                {errors.businessName && (
                  <p className="mt-1 text-sm text-red-400">{errors.businessName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="pointOfContact" className="block text-sm font-medium text-gray-300 mb-2">
                  Point of Contact *
                </label>
                <input
                  type="text"
                  id="pointOfContact"
                  {...register('pointOfContact', { required: 'Point of contact is required' })}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                />
                {errors.pointOfContact && (
                  <p className="mt-1 text-sm text-red-400">{errors.pointOfContact.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="primaryEmail" className="block text-sm font-medium text-gray-300 mb-2">
                  Primary Email *
                </label>
                <input
                  type="email"
                  id="primaryEmail"
                  {...register('primaryEmail', { 
                    required: 'Primary email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                />
                {errors.primaryEmail && (
                  <p className="mt-1 text-sm text-red-400">{errors.primaryEmail.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="secondaryEmail" className="block text-sm font-medium text-gray-300 mb-2">
                  Secondary Email
                </label>
                <input
                  type="email"
                  id="secondaryEmail"
                  {...register('secondaryEmail', {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                />
                {errors.secondaryEmail && (
                  <p className="mt-1 text-sm text-red-400">{errors.secondaryEmail.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="additionalNames" className="block text-sm font-medium text-gray-300 mb-2">
                Additional Names (Sales Representatives)
              </label>
              <textarea
                id="additionalNames"
                rows={3}
                {...register('additionalNames')}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="Enter names separated by commas"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-4">
                Services Required *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="relative">
                  <input
                    type="radio"
                    id="leads"
                    value="leads"
                    {...register('serviceType', { required: 'Please select a service type' })}
                    className="peer hidden"
                  />
                  <label
                    htmlFor="leads"
                    className="block p-4 text-center bg-gray-900 border border-gray-800 rounded-lg cursor-pointer peer-checked:border-blue-500 peer-checked:bg-blue-500/10 hover:border-gray-700 transition-colors"
                  >
                    Lead Generation
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="radio"
                    id="marketing"
                    value="marketing"
                    {...register('serviceType')}
                    className="peer hidden"
                  />
                  <label
                    htmlFor="marketing"
                    className="block p-4 text-center bg-gray-900 border border-gray-800 rounded-lg cursor-pointer peer-checked:border-blue-500 peer-checked:bg-blue-500/10 hover:border-gray-700 transition-colors"
                  >
                    Marketing Services
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="radio"
                    id="both"
                    value="both"
                    {...register('serviceType')}
                    className="peer hidden"
                  />
                  <label
                    htmlFor="both"
                    className="block p-4 text-center bg-gray-900 border border-gray-800 rounded-lg cursor-pointer peer-checked:border-blue-500 peer-checked:bg-blue-500/10 hover:border-gray-700 transition-colors"
                  >
                    Both Services
                  </label>
                </div>
              </div>
              {errors.serviceType && (
                <p className="mt-1 text-sm text-red-400">{errors.serviceType.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-4">
                Payment Type *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="radio"
                    id="now"
                    value="now"
                    {...register('paymentType', { required: 'Please select a payment type' })}
                    className="peer hidden"
                  />
                  <label
                    htmlFor="now"
                    className="block p-4 text-center bg-gray-900 border border-gray-800 rounded-lg cursor-pointer peer-checked:border-blue-500 peer-checked:bg-blue-500/10 hover:border-gray-700 transition-colors"
                  >
                    Pay Now
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="radio"
                    id="afterFirstLead"
                    value="afterFirstLead"
                    {...register('paymentType')}
                    className="peer hidden"
                  />
                  <label
                    htmlFor="afterFirstLead"
                    className="block p-4 text-center bg-gray-900 border border-gray-800 rounded-lg cursor-pointer peer-checked:border-blue-500 peer-checked:bg-blue-500/10 hover:border-gray-700 transition-colors"
                  >
                    Pay After First Lead
                  </label>
                </div>
              </div>
              {errors.paymentType && (
                <p className="mt-1 text-sm text-red-400">{errors.paymentType.message}</p>
              )}
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="agreedToTerms"
                  {...register('agreedToTerms', { 
                    required: 'You must agree to the terms and conditions' 
                  })}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-800 rounded bg-gray-900"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="agreedToTerms" className="font-medium text-gray-300">
                  I agree to the{' '}
                  <Link href="/terms" className="text-blue-400 hover:text-blue-300">
                    terms and conditions
                  </Link>
                  {' '}*
                </label>
                <p className="text-gray-500">
                  By checking this box, you agree to our terms of service and contract agreement.
                </p>
              </div>
            </div>
            {errors.agreedToTerms && (
              <p className="mt-1 text-sm text-red-400">{errors.agreedToTerms.message}</p>
            )}

            <div className="pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-4 px-6 border border-transparent rounded-lg text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-all duration-200 transform hover:scale-[1.02]"
              >
                {isSubmitting ? 'Processing...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
