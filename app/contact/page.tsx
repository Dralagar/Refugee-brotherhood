'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Contact.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form Data:', formData);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with email: ${newsletterEmail}`);
    setNewsletterEmail('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <motion.h1 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className={styles.mainTitle}
      >
        Get in Touch
      </motion.h1>
      <p className={styles.subtitle}>
        We are here to assist you. Reach out to us for any inquiries or support.
      </p>

      <div className={styles.contactGrid}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.contactInfo}
        >
          <h2>Contact Information</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <FaMapMarkerAlt className={styles.icon} />
              <h3>Our Location</h3>
              <p>456 Umoja Street, Nairobi, Kenya</p>
            </div>

            <div className={styles.infoCard}>
              <FaPhone className={styles.icon} />
              <h3>Phone Number</h3>
              <p>+254 700 123456</p>
            </div>

            <div className={styles.infoCard}>
              <FaEnvelope className={styles.icon} />
              <h3>Email Us</h3>
              <p>nairobi@refugeebrotherhood.org</p>
            </div>

            <div className={styles.infoCard}>
              <FaClock className={styles.icon} />
              <h3>Working Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Weekend: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.formContainer}
        >
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <h2>Send Us a Message</h2>

            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Enter message subject"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                rows={6}
                className={styles.textarea}
              ></textarea>
            </div>

            <motion.button 
              type="submit" 
              className={styles.submitButton}
              disabled={isLoading}
              whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
              whileTap={{ scale: 0.95 }}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>

      <div className={styles.newsletterSection}>
        <h2>Subscribe to Our Newsletter</h2>
        <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
          <input
            type="email"
            placeholder="Enter your email"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            required
            className={styles.input}
          />
          <motion.button 
            type="submit" 
            className={styles.submitButton}
            whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
