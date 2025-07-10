'use client';
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Peace.module.css';

export default function PeaceBuildingProgramPage() {
  return (
    <main className={styles.programDetailContainer}>
      <section className={styles.heroSection + ' fadeInUp'}>
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
        <div className={styles.heroContent + ' fadeIn'}>
          <h1>Peace Building</h1>
          <p>
            Our Peace Building program fosters social cohesion and harmony through sports, community events, and peace clubs, engaging both refugees and host communities.
          </p>
        </div>
      </section>
      <div className={styles.contentWrapper}>
        <section className={styles.section + ' fadeInUp'}>
          <h2>Community Impact</h2>
          <p>
            We organize peace walks, soccer tournaments, and awareness campaigns, culminating in the Community Social Cohesion and Peace Cup. Our efforts promote unity and understanding across diverse groups.
          </p>
        </section>
        <section className={styles.section + ' fadeInUp'}>
          <h2>Program Features</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <strong>Community Dialogues</strong>
              <p>Facilitating open conversations for conflict resolution.</p>
            </div>
            <div className={styles.featureCard}>
              <strong>Peace Clubs</strong>
              <p>Engaging youth in peace-building activities and leadership.</p>
            </div>
            <div className={styles.featureCard}>
              <strong>Sports for Peace</strong>
              <p>Uniting communities through friendly competitions and events.</p>
            </div>
            <div className={styles.featureCard}>
              <strong>Cultural Exchange</strong>
              <p>Promoting understanding through shared traditions and arts.</p>
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
              <span className={styles.statValue}>80%</span>
              <span className={styles.statLabel}>Success Rate</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>15+</span>
              <span className={styles.statLabel}>Partnerships</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 