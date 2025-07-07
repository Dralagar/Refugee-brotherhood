'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import styles from '../../styles/PsychoSocialSupport.module.css';
// Removed broken Navbar import

export default function PsychoSocialSupport() {
  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={styles.container}
      >
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={styles.title}
            >
              Psychosocial Support
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={styles.subtitle}
            >
              Refugee Brotherhood&apos;s embedded psychosocial support complements our other
              programs, recognizing that true self-reliance begins with mental well-being.
            </motion.p>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/programs/psychosocial.jpg"
              alt="Psychosocial Support"
              width={800}
              height={500}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>

        <section className={styles.details}>
          <div className={styles.textBlock}>
            <h2>Our Approach</h2>
            <p>
              We believe for a person to be self-reliant, their mental well-being must be
              clear of trauma and pain caused by displacement, abuse, or conflict. Refugee
              Brotherhood creates a safe space for both refugees and vulnerable host
              communities to process and heal.
            </p>
          </div>
        </section>
      </motion.main>
    </>
  );
}
