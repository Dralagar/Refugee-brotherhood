'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles/Programs.module.css';

type Program = {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  stats: Record<string, string>;
  link: string;
};

const programs: Program[] = [
  {
    id: "livelihood",
    title: "Livelihood Program",
    description: "Empowering refugees through sustainable income generation and financial inclusion through USLA groups, business expansion, and vocational training.",
    icon: "💼",
    image: "/images/livelihood.jpg",
    features: [
      "USLA Groups (3 branches)",
      "Single Mothers Support",
      "Business Expansion (70% refugees, 30% host community)",
      "Vocational Training at Nairobi Industrial Institute",
      "House-to-house Plastic Waste Collection",
      "Waste Management with Mr. Green Africa"
    ],
    stats: {
      beneficiaries: "300+",
      branches: "3",
      partners: "2"
    },
    link: "/programs/livelihood"
  },
  {
    id: "psychosocial",
    title: "Psychosocial Support",
    description: "Comprehensive mental health support program providing safe spaces for emotional healing and trauma recovery.",
    icon: "🧠",
    image: "/images/mental-health.jpg",
    features: [
      "Bi-monthly Mental Well-being Sessions",
      "Safe Space for Emotional Expression",
      "Trauma Recovery Support",
      "Referral Network to Partner NGOs",
      "Community Support Groups",
      "Professional Counseling"
    ],
    stats: {
      sessions: "6 per year",
      participants: "100+",
      partners: "5+"
    },
    link: "/programs/psychosocial"
  },
  {
    id: "peace",
    title: "Peace Building",
    description: "Promoting social cohesion and peace through sports, community engagement, and awareness programs.",
    icon: "🤝",
    image: "/images/peace.jpg",
    features: [
      "Community Peace Clubs",
      "Peace Walks",
      "Soccer Tournaments",
      "Community Social Cohesion Cup",
      "International Day of Sport Events",
      "World Refugee Day Celebrations"
    ],
    stats: {
      teams: "8",
      events: "3 major tournaments",
      participants: "200+"
    },
    link: "/programs/peace"
  },
  {
    id: "advocacy",
    title: "Advocacy",
    description: "Advancing refugee rights and self-reliance through policy advocacy and community engagement.",
    icon: "📢",
    image: "/images/advocacy.jpg",
    features: [
      "Policy Advocacy Campaigns",
      "Refugee Rights Education",
      "Community Storytelling",
      "Consortium Leadership",
      "Nairobi City County Engagement",
      "World Refugee Week Initiatives"
    ],
    stats: {
      campaigns: "10+ weeks",
      partners: "6 RLOs",
      policies: "2+"
    },
    link: "/programs/advocacy"
  }
];

export default function Programs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.programsContainer}
    >
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className={styles.header}
      >
        <h1 className={styles.title}>Our Programs</h1>
        <p className={styles.subtitle}>
          Empowering refugees through sustainable solutions and community support
        </p>
      </motion.div>
      
      <div className={styles.programsGrid}>
        {programs.map((program, index) => (
          <motion.div
            key={program.id}
            id={program.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 100 
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 8px 16px rgba(0,0,0,0.1)"
            }}
            className={styles.programCard}
          >
            <div className={styles.imageContainer}>
              <Image
                src={program.image}
                alt={program.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.cardImage}
                priority={index < 2}
              />
              <div className={styles.iconOverlay}>
                <span className={styles.icon}>{program.icon}</span>
              </div>
            </div>

            <div className={styles.cardContent}>
              <h2>{program.title}</h2>
              <p>{program.description}</p>
              
              <div className={styles.statsContainer}>
                {Object.entries(program.stats).map(([key, value]) => (
                  <div key={key} className={styles.stat}>
                    <span className={styles.statValue}>{value}</span>
                    <span className={styles.statLabel}>
                      {key.split(/(?=[A-Z])/).join(' ')}
                    </span>
                  </div>
                ))}
              </div>

              <ul className={styles.featuresList}>
                {program.features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + idx * 0.1 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
              
              <Link href={program.link} passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={styles.learnMoreButton}
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={styles.ctaSection}
      >
        <h2>Want to Get Involved?</h2>
        <p>Join us in our mission to empower refugees and build stronger communities</p>
        <div className={styles.ctaButtons}>
          <Link href="/volunteer" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.primaryButton}
            >
              Volunteer With Us
            </motion.button>
          </Link>
          <Link href="/donate" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.secondaryButton}
            >
              Make a Donation
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}