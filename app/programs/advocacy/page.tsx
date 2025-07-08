import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../styles/Advocacy.module.css';

export default function AdvocacyProgramPage() {
  return (
    <main className={styles.programDetailContainer}>
      <motion.section className={styles.heroSection} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className={styles.heroImage}>
          <Image
            src="/images/Advocate.jpg"
            alt="Advocacy Program"
            width={800}
            height={400}
            style={{ objectFit: 'cover', borderRadius: '12px' }}
            priority
          />
        </div>
        <motion.div className={styles.heroContent} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <h1>Advocacy</h1>
          <p>
            Our Advocacy program advances refugee rights and self-reliance through policy change, community storytelling, and collaboration with other organizations.
          </p>
        </motion.div>
      </motion.section>
      <div className={styles.contentWrapper}>
        <motion.section className={styles.section} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2>Our Advocacy Work</h2>
          <p>
            We run campaigns, share community voices, and work with a consortium of refugee-led organizations to influence policy and create lasting change for refugees and host communities.
          </p>
        </motion.section>
        <motion.section className={styles.section} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <h2>Program Features</h2>
          <div className={styles.featuresGrid}>
            <motion.div className={styles.featureCard} whileHover={{ scale: 1.05 }}>
              <strong>Policy Advocacy</strong>
              <p>Championing refugee rights at local and international levels.</p>
            </motion.div>
            <motion.div className={styles.featureCard} whileHover={{ scale: 1.05 }}>
              <strong>Rights Awareness</strong>
              <p>Educating communities about legal rights and resources.</p>
            </motion.div>
            <motion.div className={styles.featureCard} whileHover={{ scale: 1.05 }}>
              <strong>Legal Support</strong>
              <p>Providing access to legal aid and representation.</p>
            </motion.div>
            <motion.div className={styles.featureCard} whileHover={{ scale: 1.05 }}>
              <strong>Community Mobilization</strong>
              <p>Empowering refugees to lead and participate in advocacy efforts.</p>
            </motion.div>
          </div>
        </motion.section>
        <motion.section className={styles.section} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
          <h2>Program Stats</h2>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <span className={styles.statValue}>1000+</span>
              <span className={styles.statLabel}>Beneficiaries</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>75%</span>
              <span className={styles.statLabel}>Success Rate</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>5+</span>
              <span className={styles.statLabel}>Partnerships</span>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
} 