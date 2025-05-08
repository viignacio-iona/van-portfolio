'use client';

import { profile } from '@/data/profile';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [showToast, setShowToast] = useState(false);
  const MESSAGE_MAX_LENGTH = 1000;

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name must not be blank.';
    if (!formData.email.trim()) newErrors.email = 'Email must not be blank.';
    if (!formData.message.trim()) newErrors.message = 'Message must not be blank.';
    if (formData.message.length > MESSAGE_MAX_LENGTH) newErrors.message = `Message must be at most ${MESSAGE_MAX_LENGTH} characters.`;
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    setErrors({});

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus the first field with error
      if (validationErrors.name) nameRef.current?.focus();
      else if (validationErrors.email) emailRef.current?.focus();
      else if (validationErrors.message) messageRef.current?.focus();
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
      setShowToast(true);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later or use different contact channels.',
      });
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 border-t border-gray-800 shadow-[0_-8px_32px_0_rgba(0,0,0,0.10)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >Contact</motion.h2>
          <motion.p
            className="mt-2 text-2xl text-gray-300 font-semibold"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >Let&apos;s Connect!</motion.p>
          <motion.p
            className="mt-4 text-lg text-gray-400"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >Feel free to reach out for collaboration, consulting, or just to say hi!</motion.p>
        </div>
        <div className="bg-gray-700 rounded-2xl shadow-xl p-12 border border-gray-700">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg shadow-lg p-8"
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center">
                    <FiMail className="w-5 h-5 text-accent" />
                    <a
                      href={`mailto:${profile.email}`}
                      className="ml-3 text-gray-600 dark:text-gray-300 hover:text-accent"
                    >
                      {profile.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FiPhone className="w-5 h-5 text-accent" />
                    <span className="ml-3 text-gray-600 dark:text-gray-300">
                      {profile.phone}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="w-5 h-5 text-accent" />
                    <span className="ml-3 text-gray-600 dark:text-gray-300">
                      {profile.location}
                    </span>
                  </div>
                </div>
                <div className="pt-2 border-t border-gray-700">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3 mt-2">
                    Connect with Me
                  </h4>
                  <div className="flex space-x-6 mt-2">
                    <a
                      href={profile.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="h-8 w-8" />
                    </a>
                    <a
                      href={profile.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                      aria-label="GitHub"
                    >
                      <FaGithub className="h-8 w-8" />
                    </a>
                    <a
                      href={profile.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="h-8 w-8" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg shadow-lg p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Toast message */}
                {showToast && submitStatus.type && (
                  <div
                    className={`fixed top-8 right-8 z-50 flex items-center p-4 rounded-md shadow-lg transition-all duration-300
                      ${submitStatus.type === 'success'
                        ? 'bg-green-800 text-white font-light'
                        : 'bg-red-800 text-white font-light'}
                    `}
                  >
                    <span className="flex-1">{submitStatus.message}</span>
                    <button
                      type="button"
                      className="ml-4 text-white hover:text-gray-200 focus:outline-none text-2xl font-light p-0 bg-transparent border-none shadow-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 focus:bg-white/30 transition-colors"
                      onClick={() => setShowToast(false)}
                      aria-label="Close notification"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10l-4.95-4.95A1 1 0 115.05 3.636L10 8.586z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                )}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    ref={nameRef}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white sm:text-sm h-12 px-3 py-2"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    ref={emailRef}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white sm:text-sm h-12 px-3 py-2"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    ref={messageRef}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={MESSAGE_MAX_LENGTH}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white sm:text-sm px-3 py-2"
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                    <span className={`text-xs ml-auto ${formData.message.length === MESSAGE_MAX_LENGTH ? 'text-red-500 font-semibold' : 'text-gray-400'}`}>{formData.message.length} / {MESSAGE_MAX_LENGTH}</span>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn ${
                      isSubmitting
                        ? 'opacity-50 cursor-not-allowed'
                        : ''
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 