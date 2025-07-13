'use client';
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Programs.module.css';

export default function Livelihood() {
  return (
    <main className={styles.programDetailContainer}>
      <section className={styles.heroSection + ' fadeInUp'}>
        <div className={styles.heroImage}>
          <Image
            src="/images/rb28.jpg"
            alt="Livelihood Program"
            width={800}
            height={400}
            style={{ objectFit: 'cover', borderRadius: '18px' }}
            priority
          />
        </div>
      </section>
      {/* Summary/Intro Card */}
      <div style={{
        maxWidth: '540px',
        margin: '2rem auto 1.5rem auto',
        background: 'linear-gradient(120deg, #A1E3F9 0%, #3674B5 100%)',
        color: '#fff',
        borderRadius: '18px',
        boxShadow: '0 4px 24px rgba(54,116,181,0.13)',
        padding: '1.7rem 2.2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.7rem',
        fontSize: '1.13rem',
        fontWeight: 500,
        textAlign: 'center',
      }}>
        <h2 style={{fontWeight: 800, fontSize: '1.5rem', margin: 0, color: '#fff', letterSpacing: '0.5px'}}>Livelihood Program</h2>
        <div style={{fontSize: '1.08rem', color: '#e6f7fa', marginBottom: '0.5rem'}}>Empowering refugees through vocational training, micro-enterprise development, and sustainable income generation.</div>
        <div style={{fontSize: '1.08rem', color: '#fff', marginBottom: '0.5rem'}}>Our Livelihood Program supports refugees and vulnerable host communities with skills, business opportunities, and access to markets for a brighter, self-reliant future.</div>
      </div>
      <div className={styles.contentWrapper}>
        <section className={styles.section + ' fadeInUp'}>
          <h2>Key Initiatives</h2>
          <p>
            We operate projects like USLA (Urban Saving and Loan Association), business expansion for refugees and host communities, and skills training at Nairobi Industrial Institute. We also lead waste management and recycling initiatives in collaboration with Mr Green Africa.
          </p>
        </section>
        <section className={styles.section + ' fadeInUp'}>
          <h2>Program Features</h2>
          <ul className={styles.featuresList}>
            <li><strong>Vocational Training</strong><br/>Skills development for sustainable employment.</li>
            <li><strong>Business Development</strong><br/>Support for micro-enterprises and entrepreneurship.</li>
            <li><strong>Market Access</strong><br/>Connecting refugees to local and regional markets.</li>
            <li><strong>Financial Literacy</strong><br/>Training in savings, loans, and financial management.</li>
          </ul>
        </section>
        <section className={styles.section + ' fadeInUp'}>
          <h2>Program Stats</h2>
          <div className={styles.statsRow}>
            <div className={styles.statBlock}>
              <span className={styles.statValue}>500+</span>
              <span className={styles.statLabel}>Beneficiaries</span>
            </div>
            <div className={styles.statBlock}>
              <span className={styles.statValue}>85%</span>
              <span className={styles.statLabel}>Success Rate</span>
            </div>
            <div className={styles.statBlock}>
              <span className={styles.statValue}>10+</span>
              <span className={styles.statLabel}>Partnerships</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 