'use client';

import React, { useState, useEffect } from 'react';
import styles from '../styles/Contact.module.css';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaLanguage,
  FaHandsHelping,
  FaUsers,
  FaGlobe 
} from 'react-icons/fa';

interface ContactOffice {
  id: number;
  city: string;
  address: string;
  phone: string;
  email: string;
  coordinates: { lat: number; lng: number };
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    preferredLanguage: '',
    urgency: 'normal',
    serviceType: ''
  });

  const [offices, setOffices] = useState<ContactOffice[]>([]);
  const [selectedOffice, setSelectedOffice] = useState<number>(1); // Default to first office
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setOffices([
      {
        id: 1,
        city: 'New York',
        address: '123 Refugee Support Street, NY 10001',
        phone: '+1 (555) 123-4567',
        email: 'ny@refugeebrotherhood.org',
        coordinates: { lat: 40.7128, lng: -74.0060 }
      },
      {
        id: 2,
        city: 'Los Angeles',
        address: '456 Hope Avenue, LA 90012',
        phone: '+1 (555) 987-6543',
        email: 'la@refugeebrotherhood.org',
        coordinates: { lat: 34.0522, lng: -118.2437 }
      }
    ]);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form Data:', formData);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        preferredLanguage: '',
        urgency: 'normal',
        serviceType: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const supportServices = [
    { id: 1, title: 'Legal Assistance', icon: <FaUsers /> },
    { id: 2, title: 'Housing Support', icon: <FaHandsHelping /> },
    { id: 3, title: 'Language Services', icon: <FaLanguage /> },
    { id: 4, title: 'International Aid', icon: <FaGlobe /> }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.mainTitle}>Contact Us</h1>
        <p className={styles.subtitle}>
          We&apos;re committed to supporting refugees. Reach out to us for any assistance or inquiries.
        </p>

        <div className={styles.servicesGrid}>
          {supportServices.map(service => (
            <div key={service.id} className={styles.serviceCard}>
              {service.icon}
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h2>Get in Touch</h2>

            <div className={styles.officeSelector}>
              <h3>Select Office Location</h3>
              <select 
                value={selectedOffice}
                onChange={(e) => setSelectedOffice(Number(e.target.value))}
              >
                {offices.map(office => (
                  <option key={office.id} value={office.id}>
                    {office.city}
                  </option>
                ))}
              </select>
            </div>

            {offices[selectedOffice - 1] && (
              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <FaMapMarkerAlt className={styles.icon} />
                  <h3>Our Location</h3>
                  <p>{offices[selectedOffice - 1].address}</p>
                </div>

                <div className={styles.infoCard}>
                  <FaPhone className={styles.icon} />
                  <h3>Phone Numbers</h3>
                  <p>{offices[selectedOffice - 1].phone}</p>
                </div>

                <div className={styles.infoCard}>
                  <FaEnvelope className={styles.icon} />
                  <h3>Email Us</h3>
                  <p>{offices[selectedOffice - 1].email}</p>
                </div>

                <div className={styles.infoCard}>
                  <FaClock className={styles.icon} />
                  <h3>Working Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Weekend: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            )}

            <div className={styles.emergencyContact}>
              <h3>Emergency Support</h3>
              <p>24/7 Helpline: +1 (555) 911-0000</p>
              <div className={styles.statusIndicator}>
                <span className={styles.statusDot}></span>
                Currently Available
              </div>
            </div>
          </div>

          <div className={styles.formContainer}>
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
                ></textarea>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="preferredLanguage">Preferred Language</label>
                
              
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="urgency">Urgency Level</label>
                <select
                  id="urgency"
                  value={formData.urgency}
                  onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                  required
                >
                  <option value="normal">Normal</option>
                  <option value="urgent">Urgent</option>
                  <option value="emergency">Emergency</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="serviceType">Service Type</label>
                <select
                  id="serviceType"
                  value={formData.serviceType}
                  onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                  required
                >
                  <option value="">Select Service</option>
                  {supportServices.map(service => (
                    <option key={service.id} value={service.title.toLowerCase()}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
