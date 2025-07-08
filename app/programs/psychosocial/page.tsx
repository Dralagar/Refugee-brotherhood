'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../styles/Pyschosocial.module.css';

export default function Psychosocial() {
  return (
    <main className={styles.container}>
      <motion.section className={styles.hero} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className={styles.heroImage}>
          <Image
            src="/images/psychosocial.jpg"
            alt="Psycho Social Support"
            width={400}
            height={320}
            style={{ objectFit: 'cover', borderRadius: '12px' }}
            priority
          />
        </div>
        <motion.div className={styles.heroContent} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <h1 className={styles.title}>Psycho Social Support</h1>
          <p className={styles.subtitle}>
            Our psycho social support program complements all our other programs, focusing on mental well-being and self-reliance for refugees and vulnerable host communities.
          </p>
        </motion.div>
      </motion.section>
      <motion.section className={styles.details} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2>Our Approach</h2>
        <p className={styles.textBlock}>
          We provide a safe space for the community to express their feelings and experiences. Our team runs regular mental health sessions, and refers those in need of further intervention to our trusted NGO partners.
        </p>
      </motion.section>
      <motion.section className={styles.details} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
        <h2>Program Features</h2>
        <ul className={styles.textBlock}>
          <li>Individual and group counseling</li>
          <li>Trauma support and resilience building</li>
          <li>Community integration activities</li>
          <li>Referral to specialized care</li>
        </ul>
      </motion.section>
      <motion.section className={styles.details} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
        <h2>Program Stats</h2>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#578FCA' }}>200+</span>
            <div style={{ color: '#666' }}>Beneficiaries</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#578FCA' }}>90%</span>
            <div style={{ color: '#666' }}>Success Rate</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#578FCA' }}>10+</span>
            <div style={{ color: '#666' }}>Partnerships</div>
          </div>
        </div>
      </motion.section>
    </main>
  );
} 