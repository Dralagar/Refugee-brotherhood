    'use client';

    import React, { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import Image from 'next/image';
    import Link from 'next/link';
    import { useInView } from 'react-intersection-observer';
    import CountUp from 'react-countup';
    import styles from '../styles/About.module.css';

    // Define the type for a success story
    type SuccessStory = {
      id: number;
      name: string;
      image: string;
      quote: string;
      story: string;
    };

    export default function About() {
      const [activeStory, setActiveStory] = useState<SuccessStory | null>(null);
      const { ref: statsRef, inView: statsInView } = useInView({
        triggerOnce: true,
        threshold: 0.2
      });

      const impactStats = [
        { number: 1000, label: 'Families Helped', icon: '👨‍👩‍👧‍👦' },
        { number: 100, label: 'Communities Served', icon: '🌍' },
        { number: 7, label: 'Active Programs', icon: '📈' },
        { number: 500, label: 'Volunteers', icon: '❤️' }
      ];

      const successStories: SuccessStory[] = [
        {
          id: 1,
          name: "Sarah's Journey",
          image: "/images/stories/sarah.jpg",
          quote: "Through the Brotherhood's support, I was able to start my own business.",
          story: "After fleeing Syria, Sarah found hope through our entrepreneurship program..."
        },
        // Add more success stories
      ];

      const initiatives = [
        {
          title: "Emergency Response",
          icon: "🚨",
          description: "24/7 support for refugees in crisis",
          impact: "Helped 200+ families in emergency situations"
        },
        {
          title: "Education First",
          icon: "📚",
          description: "Quality education for all ages",
          impact: "500+ students enrolled in various programs"
        },
        // Add more initiatives
      ];

      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.aboutContainer}
        >
          {/* Hero Section with Full-Screen Background Image */}
          <motion.div 
            style={{
              minHeight: '100vh', // Full viewport height
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              backgroundImage: `url('/images/rb7.jpg')`,
              backgroundSize: 'cover', // Ensures the image covers the entire section
              backgroundPosition: 'center', // Centers the image
              backgroundRepeat: 'no-repeat',
              color: 'var(--text-light)',
              position: 'relative',
              padding: '0 2rem',
              boxSizing: 'border-box',
              overflow: 'hidden'
            }}
          >
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                margin: 0,
                fontSize: '3rem',
                lineHeight: '1.2',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' // Add text shadow for better readability
              }}
            >
              Creating Lasting Change
            </motion.h1>
            <motion.div 
              className={styles.heroButtons}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                marginTop: '2rem'
              }}
            >
              <Link href="/donate">
                <motion.button 
                  className={styles.donateButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Support Our Cause
                </motion.button>
              </Link>
              <motion.button 
                className={styles.volunteerButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Volunteer
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Impact Statistics */}
          <div className={styles.statsSection} ref={statsRef}>
            <div className={styles.statsGrid}>
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={styles.statCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className={styles.statIcon}>{stat.icon}</span>
                  <div className={styles.statNumber}>
                    {statsInView && (
                      <CountUp end={stat.number} duration={2.5} separator="," />
                    )}
                  </div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={styles.sections}>
            <section className={styles.section}>
              <h2>Our Mission</h2>
              <p>
                  We are dedicated to supporting refugees and displaced individuals by providing
                  resources, education, and community support to help them rebuild their lives
                  and achieve self-sufficiency.
                </p>
              </section>
            </div>

          {/* Success Stories Carousel */}
          <div className={styles.storiesSection}>
            <h2>Success Stories</h2>
            <div className={styles.storiesGrid}>
              {successStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  className={styles.storyCard}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveStory(story)}
                >
                  <div className={styles.storyImage}>
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className={styles.storyImg}
                    />
                  </div>
                  <h3>{story.name}</h3>
                  <p>{story.quote}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div 
            className={styles.ctaSection}
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 0.8 }}
          >
            <h2>Join Our Mission</h2>
            <p>Together, we can make a difference in the lives of refugees</p>
            <div className={styles.ctaButtons}>
              <Link href="/donate">
                <motion.button
                  className={styles.primaryCta}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Make a Donation
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className={styles.secondaryCta}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Story Modal */}
          <AnimatePresence>
            {activeStory && (
              <motion.div
                className={styles.modal}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveStory(null)}
              >
                <motion.div
                  className={styles.modalContent}
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  exit={{ y: 100 }}
                  onClick={e => e.stopPropagation()}
                >
                  <button 
                    className={styles.closeButton}
                    onClick={() => setActiveStory(null)}
                  >
                    ×
                  </button>
                  <h3>{activeStory.name}</h3>
                  <p>{activeStory.story}</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      );
    }
