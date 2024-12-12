"use client"
import React from 'react';
import Link from 'next/link';
import styles from './styles/Home.module.css';
import Image from 'next/image';
  
const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      
      <main className={styles.mainContent}>
        <section className={styles.hero}>
          <div className={styles.heroBackground}></div>
          <div className={styles.heroContent}>
            <h1>Welcome</h1>
            <p>Introduction text...</p>
            <button className={styles.learnMore}>Learn More</button>
          </div>
        </section>

        <section className={styles.twoColumn}>
          <div className={styles.videoContainer}>
            <video controls>
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={styles.textContainer}>
            <h2>Programs</h2>
            <p>Details about programs...</p>
          </div>
        </section>

        <div className={styles.fundraisingIcons}>
          <div className={styles.fundraisingIcon}>$10</div>
          <div className={styles.fundraisingIcon}>$20</div>
          <div className={styles.fundraisingIcon}>$50</div>
        </div>

        <div className={styles.moreWays}>
          <p>More ways to give</p>
          <span>→</span>
        </div>

        <h2>Milestones</h2>
        <div className={styles.milestoneIcons}>
          <div className={styles.milestoneIcon}>Icon 1</div>
          <div className={styles.milestoneIcon}>Icon 2</div>
          <div className={styles.milestoneIcon}>Icon 3</div>
        </div>

        <section className={styles.twoColumnImage}>
          <div className={styles.column}>
            <Image src="/images/rb.jpg" alt="Image 1" width={500} height={300} />
            <h4>Column 1 Title</h4>
            <p>Column 1 description text...</p>
          </div>
          <div className={styles.column}>
            <img src="/images/rb4.jpg" alt="Image 2" />
            <h4>Column 2 Title</h4>
            <p>Column 2 description text...</p>
          </div>
        </section>

        <h1 className={styles.newsStories}>News and Stories</h1>
        <div className={styles.newsCards}>
          <div className={styles.newsCard}>
            <h2>News Title 1</h2>
            <img src="/images/rb5.jpg" alt="Image 2" />
            <p>News description 1...</p>
          </div>
          <div className={styles.newsCard}>
            <h2>News Title 2</h2>
            <img src="/images/rb6.jpg" alt="Image 2" />
            <p>News description 2...</p>
          </div>
          <div className={styles.newsCard}>
            <h2>News Title 3</h2>
            <img src="/images/rb7.jpg" alt="Image 2" />
            <p>News description 3...</p>
          </div>
        </div>

        <div className={styles.moreNews}>
          <p>More news</p>
          <span>→</span>
        </div>
      </main>
    </div>
  );
};

export default Home;