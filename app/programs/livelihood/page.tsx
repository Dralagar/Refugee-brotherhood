'use client';
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Livelihood.module.css';

export default function Livelihood() {
  return (
    <main className={styles.programDetailContainer}>
      <section className={styles.heroSection + ' fadeInUp'}>
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
        <div className={styles.heroContent + ' fadeIn'}>
          <h1>Livelihood</h1>
          <p>
            Our Livelihood program empowers refugees through vocational training, business development, and sustainable income generation, in partnership with local organizations and NGOs.
          </p>
        </div>
      </section>
      <div className={styles.contentWrapper}>
        <section className={styles.section + ' fadeInUp'}>
          <h2>Key Initiatives</h2>
          <p>
            We operate projects like USLA (Urban Saving and Loan Association), business expansion for refugees and host communities, and skills training at Nairobi Industrial Institute. We also lead waste management and recycling initiatives in collaboration with Mr Green Africa.
          </p>
        </section>
        <section className={styles.section + ' fadeInUp'}>
          <h2>Program Features</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <strong>Vocational Training</strong>
              <p>Skills development for sustainable employment.</p>
            </div>
            <div className={styles.featureCard}>
              <strong>Business Development</strong>
              <p>Support for micro-enterprises and entrepreneurship.</p>
            </div>
            <div className={styles.featureCard}>
              <strong>Market Access</strong>
              <p>Connecting refugees to local and regional markets.</p>
            </div>
            <div className={styles.featureCard}>
              <strong>Financial Literacy</strong>
              <p>Training in savings, loans, and financial management.</p>
            </div>
          </div>
        </section>
        <section className={styles.section + ' fadeInUp'}>
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
        </section>
      </div>
    </main>
  );
} 