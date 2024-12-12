'use client';

import React, { useState } from 'react';
import { useSpring, a, animated } from '@react-spring/web';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/Contact.module.css';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };
  return (
    <animated.div style={fadeIn} className={styles.container}>
      <div className={styles.content}>
        <h1>Contact Us</h1>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h2>Get in Touch</h2>
            <p>We're here to help and answer any questions you might have.</p>
            <div className={styles.infoItem}>
              <i className="fas fa-envelope"></i>
              <span>contact@refugeebrotherhood.org</span>
            </div>
            <div className={styles.infoItem}>
              <i className="fas fa-phone"></i>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className={styles.infoItem}>
              <i className="fas fa-map-marker-alt"></i>
              <span>123 Refugee Support Street, City, Country</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </animated.div>
  );
}

export default ContactPage;
