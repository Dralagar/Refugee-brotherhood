'use client';
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Pyschosocial.module.css';

export default function Psychosocial() {
  return (
    <main className={styles.container}>
      <section className={styles.hero + ' fadeInUp'}>
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
        <div className={styles.heroContent + ' fadeIn'}>
          <h1 className={styles.title}>Psycho Social Support</h1>
          <p className={styles.subtitle}>
            Our psycho social support program complements all our other programs, focusing on mental well-being and self-reliance for refugees and vulnerable host communities.
          </p>
        </div>
      </section>
      <section className={styles.details + ' fadeInUp'}>
        <h2>Our Approach</h2>
        <p className={styles.textBlock}>
          We provide a safe space for the community to express their feelings and experiences. Our team runs regular mental health sessions, and refers those in need of further intervention to our trusted NGO partners.
        </p>
      </section>
      <section className={styles.details + ' fadeInUp'}>
        <h2>Program Features</h2>
        <ul className={styles.textBlock}>
          <li>Individual and group counseling</li>
          <li>Trauma support and resilience building</li>
          <li>Community integration activities</li>
          <li>Referral to specialized care</li>
        </ul>
      </section>
      <section className={styles.details + ' fadeInUp'}>
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
      </section>
    </main>
  );
} 