'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Programs.module.css';

const programData = {
  livelihood: {
    id: 'livelihood',
    title: 'Livelihood Program',
    description:
      'Empowering refugees through vocational training, micro-enterprise development, and sustainable income generation.',
    image: '/images/programs/rb1.jpg',
    stats: {
      beneficiaries: '500+',
      successRate: '85%',
      partnerships: '10+',
    },
    features: [
      'Vocational Training',
      'Business Development',
      'Market Access',
      'Financial Literacy',
    ],
  },
  psychosocial: {
    id: 'psychosocial',
    title: 'Psychosocial Support',
    description:
      'Providing mental health support and counseling services to help refugees rebuild their lives.',
    image: '/images/programs/Mental.jpg',
    stats: {
      beneficiaries: '200+',
      successRate: '90%',
      partnerships: '10+',
    },
    features: [
      'Mental Health Counseling',
      'Group Therapy',
      'Trauma Support',
      'Community Integration',
    ],
  },
  peace: {
    id: 'peace',
    title: 'Peace Building',
    description:
      'Fostering peace and understanding between refugee and host communities.',
    image: '/images/programs/rb66.jpg',
    stats: {
      beneficiaries: '1000+',
      successRate: '80%',
      partnerships: '15+',
    },
    features: [
      'Community Dialogues',
      'Conflict Resolution',
      'Cultural Exchange',
      'Youth Programs',
    ],
  },
  advocacy: {
    id: 'advocacy',
    title: 'Advocacy',
    description:
      'Advocating for refugee rights and policy changes at local and international levels.',
    image: '/images/programs/Advocate.jpg',
    stats: {
      beneficiaries: '1000+',
      successRate: '75%',
      partnerships: '5+',
    },
    features: [
      'Policy Advocacy',
      'Rights Awareness',
      'Legal Support',
      'Community Mobilization',
    ],
  },
};

export default function ProgramsOverviewPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  // Scroll to and highlight the card when hash changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('programCardActive');
          setTimeout(() => el.classList.remove('programCardActive'), 2000);
        }
      }
    }
  }, [typeof window !== 'undefined' && window.location.hash]);

  return (
    <main className={styles.programsContainer}>
      <section className={styles.header + ' fadeIn'}>
        <h1 className={styles.title}>Our Programs</h1>
        <p className={styles.subtitle}>
          Explore our core programs designed to empower refugees and foster community well-being. Click a program in the menu to jump to its details below.
        </p>
      </section>

      <div ref={gridRef} className={styles.programsFlexGrid} style={{ scrollBehavior: 'smooth' }}>
        {Object.values(programData).map((program, idx) => {
          let iconSrc = '';
          let iconAlt = '';
          if (program.id === 'peace') { iconSrc = '/globe.svg'; iconAlt = 'Peace Icon'; }
          if (program.id === 'advocacy') { iconSrc = '/window.svg'; iconAlt = 'Advocacy Icon'; }
          if (program.id === 'livelihood') { iconSrc = '/file.svg'; iconAlt = 'Livelihood Icon'; }
          if (program.id === 'psychosocial') { iconSrc = '/next.svg'; iconAlt = 'Psychosocial Icon'; }
          return (
            <div key={program.id} className={styles.programCardWrapper}>
              <a id={program.id} style={{ position: 'absolute', top: '-110px', display: 'block', height: 0, scrollMarginTop: '120px' }} aria-hidden="true"></a>
              <div
                id={program.id + '-card'}
                className={
                  styles.programCard +
                  ' fadeInUp' +
                  (styles[program.id] ? ' ' + styles[program.id] : '')
                }
                style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className={styles.cardImage}
                  />
                  {iconSrc && (
                    <span className={styles.iconOverlay} aria-hidden="true">
                      <Image src={iconSrc} width={36} height={36} alt={iconAlt} />
                    </span>
                  )}
                </div>
                <div className={styles.cardContent}>
                  <h2>{program.title}</h2>
                  <p>{program.description}</p>
                  <ul className={styles.featuresList}>
                    {program.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <div className={styles.statsRow}>
                    <div className={styles.statBlock}>
                      <span className={styles.statValue}>{program.stats.beneficiaries}</span>
                      <span className={styles.statLabel}>Beneficiaries</span>
                    </div>
                    <div className={styles.statBlock}>
                      <span className={styles.statValue}>{program.stats.successRate}</span>
                      <span className={styles.statLabel}>Success Rate</span>
                    </div>
                    <div className={styles.statBlock}>
                      <span className={styles.statValue}>{program.stats.partnerships}</span>
                      <span className={styles.statLabel}>Partnerships</span>
                    </div>
                  </div>
                  <Link href={`/programs/${program.id}`} className={styles.learnMore}>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}