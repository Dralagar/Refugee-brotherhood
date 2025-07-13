import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Advocacy.module.css';

export default function AdvocacyProgramPage() {
  return (
    <main className={styles.programDetailContainer}>
      <section className={styles.heroSection + ' fadeInUp'}>
        <div className={styles.heroImage}>
          <Image
            src="/images/rb14.jpg"
            alt="Advocacy Program"
            width={800}
            height={400}
            style={{ objectFit: 'cover', borderRadius: '12px' }}
            priority
          />
        </div>
      </section>
      <section className={styles.programIntroSection}>
        <div className={styles.programIntroContent}>
          <h1>Advocacy</h1>
          <p>
            Our Advocacy program advances refugee rights and self-reliance through policy change, community storytelling, and collaboration with other organizations.
          </p>
        </div>
      </section>
      <div className={styles.contentWrapper}>
        <section className={styles.section + ' fadeInUp'}>
          <h2>Our Advocacy Work</h2>
          <p>
            We run campaigns, share community voices, and work with a consortium of refugee-led organizations to influence policy and create lasting change for refugees and host communities.
          </p>
        </section>
        <section className={styles.section + ' fadeInUp'}>
          <h2>Program Features</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <strong>Policy Advocacy</strong>
              <p>Championing refugee rights at local and international levels.</p>
            </div>
            <div className={styles.featureCard}>
              <strong>Rights Awareness</strong>
              <p>Educating communities about legal rights and resources.</p>
            </div>
            <div className={styles.featureCard}>
              <strong>Legal Support</strong>
              <p>Providing access to legal aid and representation.</p>
            </div>
            <div className={styles.featureCard}>
              <strong>Community Mobilization</strong>
              <p>Empowering refugees to lead and participate in advocacy efforts.</p>
            </div>
          </div>
        </section>
        <section className={styles.section + ' fadeInUp'}>
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
        </section>
      </div>
    </main>
  );
} 