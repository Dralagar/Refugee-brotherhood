'use client';

import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import styles from '../styles/News.module.css';

const NewsPage = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' }
  });

  const newsItems = [
    {
      id: 1,
      title: "Supporting Refugee Education",
      date: "2024-01-15",
      category: "Education",
      image: "/images/education.jpg",
      summary: "New initiatives launched to provide educational resources..."
    },
    {
      id: 2,
      title: "Community Integration Program",
      date: "2024-01-12",
      category: "Community",
      image: "/images/community.jpg",
      summary: "Successful launch of our new community integration..."
    },
    {
      id: 3,
      title: "Healthcare Access Initiative",
      date: "2024-01-10",
      category: "Healthcare",
      image: "/images/healthcare.jpg",
      summary: "Expanding healthcare services for refugee families..."
    },
    {
      id: 4,
      title: "Employment Workshop Series",
      date: "2024-01-08",
      category: "Employment",
      image: "/images/employment.jpg",
      summary: "Monthly workshops helping refugees find meaningful work..."
    },
    {
      id: 5,
      title: "Cultural Exchange Festival",
      date: "2024-01-05",
      category: "Culture",
      image: "/images/culture.jpg",
      summary: "Annual festival celebrating diversity and heritage..."
    },
    {
      id: 6,
      title: "Housing Support Program",
      date: "2024-01-03",
      category: "Housing",
      image: "/images/housing.jpg",
      summary: "New partnerships to provide affordable housing solutions..."
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.parallaxBackground}></div>
      <animated.div style={fadeIn} className={styles.content}>
        <h1 className={styles.title}>Latest Updates</h1>
        <div className={styles.categoryFilter}>
          <button className={styles.active}>All</button>
          <button>Education</button>
          <button>Community</button>
          <button>Healthcare</button>
          <button>Employment</button>
        </div>
        <div className={styles.newsGrid}>
          {newsItems.map((item) => (
            <div key={item.id} className={styles.newsCard}>
              <div className={styles.imageContainer}>
                <img src={item.image} alt={item.title} />
                <span className={styles.category}>{item.category}</span>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.date}>{item.date}</span>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
                <button className={styles.readMore}>Read More →</button>
              </div>
            </div>
          ))}
        </div>
      </animated.div>
    </div>
  );
};

export default NewsPage;