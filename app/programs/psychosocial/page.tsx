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
            src="/images/psycho.png"
            alt="Psycho Social Support"
            width={400}
            height={320}
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
        <div className={styles.programStats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>50+</span>
            <div className={styles.statLabel}>Beneficiaries</div>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>90%</span>
            <div className={styles.statLabel}>Success Rate</div>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>3+</span>
            <div className={styles.statLabel}>Partnerships</div>
          </div>
        </div>
      </section>
    </main>
  );
} 