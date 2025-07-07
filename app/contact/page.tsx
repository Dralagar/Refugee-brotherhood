'use client';

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaClock } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const contactInfo = {
    address: 'Patanisho Kayole, Nairobi, Kenya',
    email: 'info@refugeebrotherhood.org',
    phone: '+254 794 693898',
    whatsapp: '+254 111449564',
    hours: {
      weekdays: '9:00 AM - 6:00 PM',
      weekends: '10:00 AM - 2:00 PM'
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.contactPageSection}>
      <div className={styles.contactHero}>
        <h1>Contact Us</h1>
        <p>We&apos;re here to help and answer any questions you might have</p>
      </div>

      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.row}>
            <div className={styles.formColumn}>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className={errors.name ? styles.errorInput : ''}
                  />
                  {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className={errors.email ? styles.errorInput : ''}
                  />
                  {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone"
                    className={errors.phone ? styles.errorInput : ''}
                  />
                  {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                  />
                </div>

                <div className={styles.formGroup}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    className={errors.message ? styles.errorInput : ''}
                  />
                  {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className={styles.themeBtn}
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <div className={styles.successMessage}>
                    Message sent successfully!
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className={styles.errorMessage}>
                    Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </div>

            <div className={styles.infoColumn}>
              <h2>Get in Touch</h2>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <FaMapMarkerAlt className={styles.icon} />
                  <div>
                    <h3>Our Location</h3>
                    <p>{contactInfo.address}</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <FaEnvelope className={styles.icon} />
                  <div>
                    <h3>Email Us</h3>
                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <FaPhone className={styles.icon} />
                  <div>
                    <h3>Call Us</h3>
                    <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <FaWhatsapp className={styles.icon} />
                  <div>
                    <h3>WhatsApp</h3>
                    <a href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}>
                      {contactInfo.whatsapp}
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <FaClock className={styles.icon} />
                  <div>
                    <h3>Working Hours</h3>
                    <p>Weekdays: {contactInfo.hours.weekdays}</p>
                    <p>Weekends: {contactInfo.hours.weekends}</p>
                  </div>
                </div>
              </div>

              <div className={styles.emergencyContact}>
                <h3>24/7 Emergency Support</h3>
                <div className={styles.emergencyButtons}>
                  <a href={`tel:${contactInfo.phone}`} className={styles.emergencyButton}>
                    <FaPhone /> Call Now
                  </a>
                  <a href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`} className={styles.emergencyButton}>
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>

              <div className={styles.newsletterSection}>
                <h3>Subscribe to Our Newsletter</h3>
                <form className={styles.newsletterForm}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                  <button type="submit" className={styles.submitButton}>
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage; 