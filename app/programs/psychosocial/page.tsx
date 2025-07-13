'use client';
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Programs.module.css';

export default function Psychosocial() {
  return (
    <main className={styles.programDetailContainer}>
      <section className={styles.heroSection + ' fadeInUp'}>
        <div className={styles.heroImage}>
          <Image
            src="/images/psychosocial.jpg"
            alt="Psychosocial Support"
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
        <h2 style={{fontWeight: 800, fontSize: '1.5rem', margin: 0, color: '#fff', letterSpacing: '0.5px'}}>Psycho Social Support</h2>
        <div style={{fontSize: '1.08rem', color: '#e6f7fa', marginBottom: '0.5rem'}}>Our psycho social support program complements all our other programs, focusing on mental well-being and self-reliance for refugees and vulnerable host communities.</div>
      </div>
      <div className={styles.contentWrapper}>
        <section className={styles.section + ' fadeInUp'}>
          <h2>Our Approach</h2>
          <p>
            We provide a safe space for the community to express their feelings and experiences. Our team runs regular mental health sessions, and refers those in need of further intervention to our trusted NGO partners.
          </p>
        </section>
        <section className={styles.section + ' fadeInUp'}>
          <h2>Program Features</h2>
          <ul className={styles.featuresList}>
            <li>Individual and group counseling</li>
            <li>Trauma support and resilience building</li>
            <li>Community integration activities</li>
            <li>Referral to specialized care</li>
          </ul>
        </section>
        <section className={styles.section + ' fadeInUp'}>
          <h2>Program Stats</h2>
          <div className={styles.statsRow}>
            <div className={styles.statBlock}>
              <span className={styles.statValue}>50+</span>
              <span className={styles.statLabel}>Beneficiaries</span>
            </div>
            <div className={styles.statBlock}>
              <span className={styles.statValue}>90%</span>
              <span className={styles.statLabel}>Success Rate</span>
            </div>
            <div className={styles.statBlock}>
              <span className={styles.statValue}>3+</span>
              <span className={styles.statLabel}>Partnerships</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 