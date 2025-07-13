import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Programs.module.css';

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
            style={{ objectFit: 'cover', borderRadius: '18px' }}
            priority
          />
        </div>
      </section>
      {/* Summary/Intro Card (now below the hero image) */}
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
        <h2 style={{fontWeight: 800, fontSize: '1.5rem', margin: 0, color: '#fff', letterSpacing: '0.5px'}}>Advocacy</h2>
        <div style={{fontSize: '1.08rem', color: '#e6f7fa', marginBottom: '0.5rem'}}>Advocating for refugee rights and policy changes at local and international levels.</div>
        <div style={{marginTop:'0.2rem',fontSize:'1.08rem',color:'#e6f7fa'}}>We champion legal rights, raise awareness, and mobilize communities to create lasting change for refugees in Kenya and beyond.</div>
      </div>
      <div className={styles.contentWrapper}>
        <section className={styles.section + ' fadeInUp'}>
          <h2>Advocacy Program - Refugee Brotherhood</h2>
          <p style={{fontSize:'1.08rem',color:'#3674B5',fontWeight:500}}>
            We advocate for policy, laws, programs and systems that affect refugees. Our advocacy effort is to advance the self reliance of refugees and vulnerable host community by recommending policies on existing frameworks like Shirika Plan, 2021 Refugee Act and Global Agenda, through running a ten weeks advocacy campaign through compiling stories, blogs, voices of community, and collaborating with other refugee Led Organizations and other local host community organizations. We have united under one consortium of six refugee led organizations for collective action on "Beyond my status", a project we do during the world refugee week. We have been actively engaged in the drafting of Nairobi City County Sport policy where we are proud and grateful to be part of the process.
          </p>
        </section>
        <section className={styles.section + ' fadeInUp'}>
          <h2>Our Advocacy Work</h2>
          <p style={{fontSize:'1.08rem',color:'#3674B5',fontWeight:500}}>
            We run campaigns, share community voices, and work with a consortium of refugee-led organizations to influence policy and create lasting change for refugees and host communities.
          </p>
        </section>
        <section className={styles.section + ' fadeInUp'}>
          <h2>Program Features</h2>
          <ul className={styles.featuresList}>
            <li><strong>Policy Advocacy</strong><br/><span style={{color:'#578FCA'}}>Championing refugee rights at local and international levels.</span></li>
            <li><strong>Rights Awareness</strong><br/><span style={{color:'#578FCA'}}>Educating communities about legal rights and resources.</span></li>
            <li><strong>Legal Support</strong><br/><span style={{color:'#578FCA'}}>Providing access to legal aid and representation.</span></li>
            <li><strong>Community Mobilization</strong><br/><span style={{color:'#578FCA'}}>Empowering refugees to lead and participate in advocacy efforts.</span></li>
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
              <span className={styles.statValue}>75%</span>
              <span className={styles.statLabel}>Success Rate</span>
            </div>
            <div className={styles.statBlock}>
              <span className={styles.statValue}>5+</span>
              <span className={styles.statLabel}>Partnerships</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 