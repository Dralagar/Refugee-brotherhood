'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../styles/Livelihood.module.css';

export default function Livelihood() {
  return (
    <main className={styles.programDetailContainer}>
      <motion.section className={styles.heroSection} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className={styles.heroImage}>
          <Image
            src="/images/education.jpg"
            alt="Livelihood Program"
            width={800}
            height={400}
            style={{ objectFit: 'cover', borderRadius: '12px' }}
            priority
          />
        </div>
        <motion.div className={styles.heroContent} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <h1>Livelihood</h1>
          <p>
            Our Livelihood program empowers refugees through vocational training, business development, and sustainable income generation, in partnership with local organizations and NGOs.
          </p>
        </motion.div>
      </motion.section>
      <div className={styles.contentWrapper}>
        <motion.section className={styles.section} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2>Key Initiatives</h2>
          <p>
            We operate projects like USLA (Urban Saving and Loan Association), business expansion for refugees and host communities, and skills training at Nairobi Industrial Institute. We also lead waste management and recycling initiatives in collaboration with Mr Green Africa.
          </p>
        </motion.section>
        <motion.section className={styles.section} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <h2>Program Features</h2>
          <div className={styles.featuresGrid}>
            <motion.div className={styles.featureCard} whileHover={{ scale: 1.05 }}>
              <strong>Vocational Training</strong>
              <p>Skills development for sustainable employment.</p>
            </motion.div>
            <motion.div className={styles.featureCard} whileHover={{ scale: 1.05 }}>
              <strong>Business Development</strong>
              <p>Support for micro-enterprises and entrepreneurship.</p>
            </motion.div>
            <motion.div className={styles.featureCard} whileHover={{ scale: 1.05 }}>
              <strong>Market Access</strong>
              <p>Connecting refugees to local and regional markets.</p>
            </motion.div>
            <motion.div className={styles.featureCard} whileHover={{ scale: 1.05 }}>
              <strong>Financial Literacy</strong>
              <p>Training in savings, loans, and financial management.</p>
            </motion.div>
          </div>
        </motion.section>
        <motion.section className={styles.section} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
          <h2>Program Stats</h2>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <span className={styles.statValue}>500+</span>
              <span className={styles.statLabel}>Beneficiaries</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>85%</span>
              <span className={styles.statLabel}>Success Rate</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>10+</span>
              <span className={styles.statLabel}>Partnerships</span>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
} 