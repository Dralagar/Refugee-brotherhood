'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../../styles/Programs.module.css';

export default function PeaceBuilding() {
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
            src="/images/peace.jpg"
            alt="Peace Building"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <h1>Peace Building</h1>
          <p>Promoting social cohesion and peace through sports and community engagement</p>
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
            Our Peace Building program uses sports and community activities to foster social cohesion
            and peace among refugees and host communities. Through regular tournaments, peace walks,
            and community events, we create spaces for dialogue and understanding.
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
              <h3>Peace Clubs</h3>
              <p>Community-based groups promoting dialogue and understanding</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Soccer Tournaments</h3>
              <p>Regular sports events bringing communities together</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Peace Walks</h3>
              <p>Community marches promoting unity and solidarity</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Special Events</h3>
              <p>World Refugee Day and International Day of Sport celebrations</p>
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
              <span className={styles.statValue}>8</span>
              <span className={styles.statLabel}>Peace Teams</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>3</span>
              <span className={styles.statLabel}>Major Tournaments</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>200+</span>
              <span className={styles.statLabel}>Participants</span>
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
          <p>Join us in building peace and unity in our communities</p>
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
