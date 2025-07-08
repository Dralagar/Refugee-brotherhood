'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../styles/Peace.module.css';

export default function PeaceBuildingProgramPage() {
  return (
    <main className={styles.programDetailContainer}>
      <motion.section className={styles.heroSection} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className={styles.heroImage}>
          <Image
            src="/images/rb66.jpg"
            alt="Peace Building"
            width={800}
            height={400}
            style={{ objectFit: 'cover', borderRadius: '12px' }}
            priority
          />
        </div>
        <motion.div className={styles.heroContent} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <h1>Peace Building</h1>
          <p>
            Our Peace Building program fosters social cohesion and harmony through sports, community events, and peace clubs, engaging both refugees and host communities.
          </p>
        </motion.div>
      </motion.section>
      <div className={styles.contentWrapper}>
        <motion.section className={styles.section} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2>Community Impact</h2>
          <p>
            We organize peace walks, soccer tournaments, and awareness campaigns, culminating in the Community Social Cohesion and Peace Cup. Our efforts promote unity and understanding across diverse groups.
          </p>
        </motion.section>
        <motion.section className={styles.section} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <h2>Program Features</h2>
          <div className={styles.featuresGrid}>
            <motion.div className={styles.featureCard} whileHover={{ scale: 1.05 }}>
              <strong>Community Dialogues</strong>
              <p>Facilitating open conversations for conflict resolution.</p>
            </motion.div>
            <motion.div className={styles.featureCard} whileHover={{ scale: 1.05 }}>
              <strong>Peace Clubs</strong>
              <p>Engaging youth in peace-building activities and leadership.</p>
            </motion.div>
            <motion.div className={styles.featureCard} whileHover={{ scale: 1.05 }}>
              <strong>Sports for Peace</strong>
              <p>Uniting communities through friendly competitions and events.</p>
            </motion.div>
            <motion.div className={styles.featureCard} whileHover={{ scale: 1.05 }}>
              <strong>Cultural Exchange</strong>
              <p>Promoting understanding through shared traditions and arts.</p>
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
              <span className={styles.statValue}>80%</span>
              <span className={styles.statLabel}>Success Rate</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>15+</span>
              <span className={styles.statLabel}>Partnerships</span>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
} 