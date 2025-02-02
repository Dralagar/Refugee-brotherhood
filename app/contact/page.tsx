'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Contact.module.css';
import { 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, 
  FaFacebookF, FaTwitter, FaGooglePlusG, FaDribbble, 
  FaPinterestP, FaClock, FaWhatsapp, FaInstagram 
} from 'react-icons/fa';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const officeLocations = [
    {
      city: 'Nairobi Office',
      address: '456 Umoja Street, Nairobi, Kenya',
      phone: '+254 700 123456',
      email: 'nairobi@refugeebrotherhood.org',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM'
    },
    {
      city: 'Mombasa Office',
      address: '789 Beach Road, Mombasa, Kenya',
      phone: '+254 700 789012',
      email: 'mombasa@refugeebrotherhood.org',
      hours: 'Mon-Fri: 8:30 AM - 5:30 PM'
    }
  ];

  const [selectedOffice, setSelectedOffice] = useState(officeLocations[0]);

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
        phone: '',
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
    <section className={styles.contactPageSection}>
      {/* Hero Section */}
      <div className={styles.contactHero}>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We're here to help and answer any questions you might have
        </motion.p>
      </div>

      <div className={styles.container}>
        {/* Office Selector */}
        <div className={styles.officeSelector}>
          <h3>Choose an Office</h3>
          <div className={styles.officeTabs}>
            {officeLocations.map((office) => (
              <button
                key={office.city}
                className={`${styles.officeTab} ${selectedOffice.city === office.city ? styles.active : ''}`}
                onClick={() => setSelectedOffice(office)}
              >
                {office.city}
              </button>
            ))}
          </div>
        </div>

        {/* Main Contact Section */}
        <div className={styles.innerContainer}>
          <div className={styles.row}>
            {/* Form Column */}
            <div className={styles.formColumn}>
              <div className={styles.innerColumn}>
                <div className={styles.contactForm}>
                  <form onSubmit={handleSubmit}>
                    <div className={styles.row}>
                      <div className={styles.formGroup}>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          placeholder="Subject"
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="Phone"
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          placeholder="Message"
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <motion.button
                          type="submit"
                          className={styles.themeBtn}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isLoading ? 'Sending...' : 'Send Now'}
                        </motion.button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className={styles.infoColumn}>
              <div className={styles.innerColumn}>
                <h2>Contact Info</h2>
                <ul className={styles.listInfo}>
                  <li>
                    <FaGlobe />
                    {selectedOffice.address}
                  </li>
                  <li>
                    <FaEnvelope />
                    {selectedOffice.email}
                  </li>
                  <li>
                    <FaPhone />
                    {selectedOffice.phone}
                  </li>
                </ul>
                <p>{selectedOffice.hours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className={styles.emergencyContact}>
          <h3>24/7 Emergency Support</h3>
          <div className={styles.emergencyInfo}>
            <div className={styles.statusIndicator}>
              <span className={styles.statusDot}></span>
              Available Now
            </div>
            <p>Hotline: +254 700 911911</p>
            <div className={styles.emergencyButtons}>
              <a href="tel:+254700911911" className={styles.callButton}>
                <FaPhone /> Call Now
              </a>
              <a href="https://wa.me/254700911911" className={styles.whatsappButton}>
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={styles.faqSection}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>How can I volunteer?</h3>
              <p>Fill out our volunteer application form and we'll get back to you within 48 hours.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>What services do you offer?</h3>
              <p>We provide emergency support, education programs, job training, and community integration services.</p>
            </div>
            {/* Add more FAQ items */}
          </div>
        </div>

        {/* Social Media Section */}
        <div className={styles.socialSection}>
          <h2>Connect With Us</h2>
          <div className={styles.socialGrid}>
            <a href="#" className={`${styles.socialCard} ${styles.facebook}`}>
              <FaFacebookF />
              <span>Facebook</span>
            </a>
            <a href="#" className={`${styles.socialCard} ${styles.instagram}`}>
              <FaInstagram />
              <span>Instagram</span>
            </a>
            <a href="#" className={`${styles.socialCard} ${styles.twitter}`}>
              <FaTwitter />
              <span>Twitter</span>
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
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
      </div>
    </section>
  );
};

export default ContactPage;
