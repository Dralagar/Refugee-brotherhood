'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../../styles/Advocacy.module.css';

export default function Advocacy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.programDetailContainer}
    >
      <motion.div 
        className={styles.heroSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.heroImage}>
          <Image
            src="/images/advocacy.jpg"
            alt="Advocacy"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <h1>Advocacy</h1>
          <p>Advancing refugee rights and self-reliance through policy advocacy and community engagement</p>
        </div>
      </motion.div>

      <div className={styles.contentWrapper}>
        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Program Overview</h2>
          <p>
            Our Advocacy program works to advance refugee rights and promote self-reliance through
            policy advocacy, community engagement, and strategic partnerships. We collaborate with
            Refugee-Led Organizations (RLOs) and engage with local government to create lasting change.
          </p>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2>Key Features</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h3>Policy Advocacy</h3>
              <p>Campaigns for refugee rights and inclusive policies</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Community Storytelling</h3>
              <p>Amplifying refugee voices and experiences</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Consortium Leadership</h3>
              <p>Coordinating with 6 Refugee-Led Organizations</p>
            </div>
            <div className={styles.featureCard}>
              <h3>City Engagement</h3>
              <p>Working with Nairobi City County on refugee issues</p>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2>Impact Statistics</h2>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <span className={styles.statValue}>10+</span>
              <span className={styles.statLabel}>Campaign Weeks</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>6</span>
              <span className={styles.statLabel}>RLO Partners</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>2+</span>
              <span className={styles.statLabel}>Policy Changes</span>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2>Get Involved</h2>
          <p>Join us in advocating for refugee rights and self-reliance</p>
          <div className={styles.ctaButtons}>
            <Link href="/volunteer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.primaryButton}
              >
                Volunteer
              </motion.button>
            </Link>
            <Link href="/donate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.secondaryButton}
              >
                Donate
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}
