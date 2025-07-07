'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../../styles/Programs.module.css';
import Navbar from '../../../../app/components/Navbar';

const programData = {
  livelihood: {
    title: 'Livelihood Program',
    description: 'Empowering refugees through vocational training, micro-enterprise development, and sustainable income generation.',
    image: '/images/programs/livelihood.jpg',
    stats: {
      beneficiaries: '500+',
      successRate: '85%',
      partnerships: '20+'
    },
    features: [
      'Vocational Training',
      'Business Development',
      'Market Access',
      'Financial Literacy'
    ],
    longDescription: `Our Livelihood Program focuses on creating sustainable economic opportunities for refugees
    through USLA groups, business expansion, and vocational training. We work closely with
    partners like Nairobi Industrial Institute and Mr. Green Africa to provide comprehensive
    support for income generation.`
  },
  psychosocial: {
    title: 'Psychosocial Support',
    description: 'Providing mental health support and counseling services to help refugees rebuild their lives.',
    image: '/images/programs/psychosocial.jpg',
    stats: {
      beneficiaries: '300+',
      successRate: '90%',
      partnerships: '15+'
    },
    features: [
      'Mental Health Counseling',
      'Group Therapy',
      'Trauma Support',
      'Community Integration'
    ],
    longDescription: `Our Psychosocial Support program provides comprehensive mental health services
    to help refugees heal from trauma and rebuild their lives. We offer individual counseling,
    group therapy sessions, and community integration activities to promote mental well-being
    and social connection.`
  },
  peace: {
    title: 'Peace Building',
    description: 'Fostering peace and understanding between refugee and host communities.',
    image: '/images/programs/peace.jpg',
    stats: {
      beneficiaries: '400+',
      successRate: '80%',
      partnerships: '25+'
    },
    features: [
      'Community Dialogues',
      'Conflict Resolution',
      'Cultural Exchange',
      'Youth Programs'
    ],
    longDescription: `Our Peace Building program works to create harmony between refugee and host communities
    through dialogue, cultural exchange, and joint activities. We focus on building understanding,
    resolving conflicts, and creating lasting bonds between different communities.`
  },
  advocacy: {
    title: 'Advocacy',
    description: 'Advocating for refugee rights and policy changes at local and international levels.',
    image: '/images/programs/advocacy.jpg',
    stats: {
      beneficiaries: '1000+',
      successRate: '75%',
      partnerships: '30+'
    },
    features: [
      'Policy Advocacy',
      'Rights Awareness',
      'Legal Support',
      'Community Mobilization'
    ],
    longDescription: `Our Advocacy program works to protect and promote refugee rights through policy
    change, awareness raising, and legal support. We engage with local and international
    stakeholders to create lasting change in refugee policies and practices.`
  }
};

export default function ProgramPage() {
  const params = useParams();
  const programId = params.id as string;
  const program = programData[programId as keyof typeof programData];

  if (!program) {
    return (
      <div className={styles.notFound}>
        <h1>Program Not Found</h1>
        <p>The program you're looking for doesn't exist.</p>
        <Link href="/programs" className={styles.backLink}>
          Back to Programs
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* @ts-expect-error Navbar type issue */}
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.programDetailContainer}
      >
        <motion.div 
          className={styles.heroSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.heroImage}>
            <Image
              src={program.image}
              alt={program.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className={styles.heroContent}>
            <h1>{program.title}</h1>
            <p>{program.description}</p>
          </div>
        </motion.div>

        <div className={styles.contentWrapper}>
          <motion.section 
            className={styles.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2>Program Overview</h2>
            <p>{program.longDescription}</p>
          </motion.section>

          <motion.section 
            className={styles.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2>Key Features</h2>
            <div className={styles.featuresGrid}>
              {program.features.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <h3>{feature}</h3>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            className={styles.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2>Impact Statistics</h2>
            <div className={styles.statsGrid}>
              <div className={styles.stat}>
                <span className={styles.statValue}>{program.stats.beneficiaries}</span>
                <span className={styles.statLabel}>Beneficiaries</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>{program.stats.successRate}</span>
                <span className={styles.statLabel}>Success Rate</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>{program.stats.partnerships}</span>
                <span className={styles.statLabel}>Partnerships</span>
              </div>
            </div>
          </motion.section>

          <motion.section 
            className={styles.ctaSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2>Get Involved</h2>
            <p>Join us in supporting this program and making a difference</p>
            <div className={styles.ctaButtons}>
              <Link href="/volunteer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={styles.primaryButton}
                >
                  Volunteer
                </motion.button>
              </Link>
              <Link href="/donate">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={styles.secondaryButton}
                >
                  Donate
                </motion.button>
              </Link>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
}

export const generateMetadata = ({ params }: { params: { id: string } }) => {
  const program = programData[params.id as keyof typeof programData];
  
  if (!program) {
    return {
      title: 'Program Not Found | Refugee Brotherhood',
      description: 'The requested program page could not be found.',
    };
  }

  return {
    title: `${program.title} | Refugee Brotherhood - Refugee-Led Organization in Kenya`,
    description: `${program.description} Leading refugee-led initiatives in Kenya and East Africa for sustainable self-reliance and community development.`,
    keywords: `${program.title.toLowerCase()}, refugee programs, ${program.features.join(', ')}, refugee led organization, Kenya, East Africa, sustainable development, self reliance`,
    openGraph: {
      title: `${program.title} | Refugee Brotherhood - Refugee-Led Organization in Kenya`,
      description: `${program.description} Leading refugee-led initiatives in Kenya and East Africa for sustainable self-reliance and community development.`,
      url: `https://www.refugeebrotherhood.org/programs/${params.id}`,
      type: 'article',
      images: [
        {
          url: program.image,
          width: 1200,
          height: 630,
          alt: program.title,
        },
      ],
    },
  };
}; 