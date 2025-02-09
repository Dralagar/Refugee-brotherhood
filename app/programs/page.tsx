'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/Programs.module.css';

export default function Programs() {
  const programs = [
    {
      title: "Education Support",
      description: "Comprehensive educational programs empowering refugees through knowledge and skills development.",
      icon: "🎓",
      image: "/images/Education.jpg",
      features: ["Language Classes", "School Integration", "Academic Support", "Tutoring", "Digital Literacy"]
    },
    {
      title: "Job Training & Employment",
      description: "Professional development programs to build careers and achieve financial independence.",
      icon: "💼",
      image: "/images/Graduation.jpg",
      features: ["Skills Development", "Career Counseling", "Job Placement", "Entrepreneurship", "Professional Networking"]
    },
    {
      title: "Community Integration",
      description: "Building bridges between refugees and local communities through cultural exchange.",
      icon: "🤝",
      image: "/images/rb3.jpg",
      features: ["Cultural Events", "Social Activities", "Local Partnerships", "Mentorship", "Community Gardens"]
    },
    {
      title: "Mental Health & Wellness",
      description: "Comprehensive mental health support for trauma recovery and emotional wellbeing.",
      icon: "🧠",
      image: "/images/Mental.jpg",
      features: ["Professional Counseling", "Support Groups", "Art Therapy", "Mindfulness", "Family Support"]
    },
    {
      title: "Garbage Collection, and Waste Management",
      description: "Expert legal guidance for immigration and settlement processes.",
      icon: "⚖️",
      image: "/images/garbage.jpg",
      features: ["Garbage Collection", "Plastic Recycling", "Waste Management", "Climate Advocacy", "Advocacy", "Sustainable Practices"]
    },
    {
      title: "Youth Development",
      description: "Empowering young refugees through specialized programs and activities.",
      icon: "🌟",
      image: "/images/rb.jpg",
      features: ["Sports Programs", "Leadership Training", "Creative Arts", "Peer Support", "Educational Workshops"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.programsContainer}
    >
      <motion.h1 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className={styles.title}
      >
        Our Programs
      </motion.h1>
      
      <div className={styles.programsGrid}>
        {programs.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 100 
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 12px 24px rgba(0,0,0,0.2)"
            }}
            className={styles.programCard}
          >
            <div className={styles.imageContainer}>
              {program.image && (
                <Image
                  src={program.image}
                  alt={program.title}
                  width={500}
                  height={300}
                  style={{ objectFit: 'cover' }}
                  priority={index < 3}
                />
              )}
              <div className={styles.iconOverlay}>
                <span className={styles.icon}>{program.icon}</span>
              </div>
            </div>

            <div className={styles.cardContent}>
              <h2>{program.title}</h2>
              <p>{program.description}</p>
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
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#f0f0f0" }}
                whileTap={{ scale: 0.95 }}
                className={styles.learnMoreButton}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
