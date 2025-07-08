import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.programsContainer}
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={styles.header}
      >
        <h1 className={styles.title}>Our Programs</h1>
        <p className={styles.subtitle}>
          Explore our core programs designed to empower refugees and foster community well-being.
        </p>
      </motion.section>

      <div className={styles.programsGrid}>
        {Object.values(programData).map((program) => (
          <motion.div
            key={program.id}
            className={styles.programCard}
            whileHover={{ scale: 1.03, boxShadow: '0 4px 24px rgba(51,132,208,0.12)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.programImageWrapper}>
              <Image
                src={program.image}
                alt={program.title}
                width={400}
                height={250}
                className={styles.programImage}
                style={{ objectFit: 'cover', borderRadius: '12px 12px 0 0' }}
              />
            </div>
            <div className={styles.programCardContent}>
              <h2 className={styles.programCardTitle}>{program.title}</h2>
              <p className={styles.programCardDesc}>{program.description}</p>
              <Link href={`/programs/${program.id}`} className={styles.programCardLink}>
                Learn More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}

export const generateMetadata = () => ({
  title: "Refugee Brotherhood | Refugee Led Organisation in Nairobi, Embakasi, Patanisho, Kayole",
  description: "Refugee Brotherhood is a refugee-led organisation empowering communities in Nairobi, Embakasi, Patanisho, and Kayole through livelihood, psychosocial support, peace building, and advocacy programs.",
  keywords: [
    "refugee led organisation",
    "Nairobi",
    "Embakasi",
    "Patanisho",
    "Kayole",
    "refugee programs",
    "livelihood",
    "psychosocial support",
    "peace building",
    "advocacy",
    "Refugee Brotherhood"
  ].join(", "),
  openGraph: {
    title: "Refugee Brotherhood | Refugee Led Organisation in Nairobi, Embakasi, Patanisho, Kayole",
    description: "Empowering refugees in Nairobi, Embakasi, Patanisho, and Kayole through sustainable programs.",
    url: "https://www.refugeebrotherhood.org/programs",
    siteName: "Refugee Brotherhood",
    images: [
      {
        url: "https://www.refugeebrotherhood.org/images/logo.jpg",
        width: 800,
        height: 600,
        alt: "Refugee Brotherhood Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refugee Brotherhood | Refugee Led Organisation in Nairobi, Embakasi, Patanisho, Kayole",
    description: "Empowering refugees in Nairobi, Embakasi, Patanisho, and Kayole through sustainable programs.",
    images: ["https://www.refugeebrotherhood.org/images/logo.jpg"],
  },
});