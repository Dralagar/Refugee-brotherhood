'use client';
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Programs.module.css';

export default function PeaceBuildingProgramPage() {
  return (
    <main className={styles.programDetailContainer}>
      <section className={styles.heroSection + ' fadeInUp'}>
        <div className={styles.heroImage}>
          <Image
            src="/images/peacecomit.jpg"
            alt="Peace Building"
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
        <h2 style={{fontWeight: 800, fontSize: '1.5rem', margin: 0, color: '#fff', letterSpacing: '0.5px'}}>Peace Building</h2>
        <div style={{fontSize: '1.08rem', color: '#e6f7fa', marginBottom: '0.5rem'}}>Fostering social cohesion and harmony between refugees and host communities through sports, cultural exchange, and community dialogues.</div>
      </div>
      <div className={styles.contentWrapper}>
        <section className={styles.section + ' fadeInUp'}>
          <h2>Community Impact</h2>
          <p>
            We organize peace walks, soccer tournaments, and awareness campaigns, culminating in the Community Social Cohesion and Peace Cup. Our efforts promote unity and understanding across diverse groups.
          </p>
        </section>
        <section className={styles.section + ' fadeInUp'}>
          <h2>Program Features</h2>
          <ul className={styles.featuresList}>
            <li><strong>Community Dialogues</strong><br/>Facilitating open conversations for conflict resolution.</li>
            <li><strong>Peace Clubs</strong><br/>Engaging youth in peace-building activities and leadership.</li>
            <li><strong>Sports for Peace</strong><br/>Uniting communities through friendly competitions and events.</li>
            <li><strong>Cultural Exchange</strong><br/>Promoting understanding through shared traditions and arts.</li>
          </ul>
        </section>
        <section className={styles.section + ' fadeInUp'}>
          <h2>Program Stats</h2>
          <div className={styles.statsRow}>
            <div className={styles.statBlock}>
              <span className={styles.statValue}>1000+</span>
              <span className={styles.statLabel}>Beneficiaries</span>
            </div>
            <div className={styles.statBlock}>
              <span className={styles.statValue}>80%</span>
              <span className={styles.statLabel}>Success Rate</span>
            </div>
            <div className={styles.statBlock}>
              <span className={styles.statValue}>15+</span>
              <span className={styles.statLabel}>Partnerships</span>
            </div>
          </div>
        </section>
      </div>
      {/* Newsletter Signup */}
      <div style={{
        maxWidth: '540px',
        margin: '2.5rem auto 1.5rem auto',
        background: '#fff',
        color: '#3674B5',
        borderRadius: '18px',
        boxShadow: '0 2px 12px rgba(54,116,181,0.10)',
        padding: '2rem 2.2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        fontSize: '1.08rem',
        fontWeight: 500,
        textAlign: 'center',
      }}>
        <h3 style={{fontWeight: 800, fontSize: '1.2rem', margin: 0, color: '#3674B5', letterSpacing: '0.5px'}}>Stay informed with news updates</h3>
        <form style={{display:'flex',gap:'0.5rem',width:'100%',justifyContent:'center',flexWrap:'wrap'}}>
          <input type="email" placeholder="Enter email" required style={{padding:'0.6rem 1rem',borderRadius:'8px',border:'1.5px solid #A1E3F9',fontSize:'1rem',width:'220px',maxWidth:'100%'}} />
          <button type="submit" style={{background:'#3674B5',color:'#fff',padding:'0.6rem 1.2rem',borderRadius:'8px',fontWeight:700,border:'none',fontSize:'1rem',cursor:'pointer'}}>Sign Up</button>
        </form>
        <div style={{fontSize:'0.95rem',color:'#578FCA',marginTop:'0.5rem'}}>We respect your privacy. No spam, ever.</div>
      </div>
      {/* Footer */}
      <footer style={{
        width: '100%',
        background: 'linear-gradient(90deg, #A1E3F9 0%, #3674B5 100%)',
        color: '#fff',
        textAlign: 'center',
        padding: '1.2rem 0 0.7rem 0',
        marginTop: '2rem',
        borderRadius: '18px 18px 0 0',
        fontSize: '1rem',
      }}>
        <div style={{fontWeight:700,letterSpacing:'0.5px'}}>Refugee Brotherhood, All rights reserved 2025</div>
        <div style={{fontSize:'0.95rem',marginTop:'0.2rem'}}>Built by Dralagar George /ReactNowDev</div>
      </footer>
    </main>
  );
} 