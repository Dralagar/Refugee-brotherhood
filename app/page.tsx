"use client"
import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './styles/Home.module.css';
import Image from 'next/image';
import axios from 'axios';

const Home: React.FC = () => {
  const partnersRef = useRef<HTMLDivElement>(null);
  const [teamMembers, setTeamMembers] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamResponse = await axios.get('/api/team');
        const partnersResponse = await axios.get('/api/partners');
        setTeamMembers(teamResponse.data);
        setPartners(partnersResponse.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const scrollPartners = (direction: 'left' | 'right') => {
    if (partnersRef.current) {
      const scrollAmount = 300;
      partnersRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <section className={styles.hero}>
          <div className={styles.heroBackground}></div>
          <div className={styles.heroContent}>
            <h1>Welcome to Refugee Brotherhood</h1>
            <p>We are committed to supporting refugees worldwide through comprehensive programs and partnerships.</p>
            <div className={styles.heroButtons}>
              <button className={styles.learnMore}>Learn More</button>
              <Link href="/contact" className={styles.contactButton}>
                Contact Us
              </Link>
            </div>
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
            <h2>Our Programs</h2>
            <p>Explore our diverse range of programs designed to empower and uplift refugee communities.</p>
          </div>
        </section>

        <div className={styles.fundraisingIcons}>
          <div className={styles.fundraisingIcon}>$10</div>
          <div className={styles.fundraisingIcon}>$20</div>
          <div className={styles.fundraisingIcon}>$50</div>
        </div>

        <div className={styles.moreWays}>
          <p>Discover More Ways to Contribute</p>
          <span>→</span>
        </div>

        <h2>Our Achievements</h2>
        <div className={styles.milestoneIcons}>
          <div className={styles.milestoneIcon}>Milestone 1</div>
          <div className={styles.milestoneIcon}>Milestone 2</div>
          <div className={styles.milestoneIcon}>Milestone 3</div>
        </div>

        <section className={styles.twoColumnImage}>
          <div className={styles.column}>
            <Image src="/images/rb.jpg" alt="Community Engagement" width={500} height={300} />
            <h4>Community Engagement</h4>
            <p>Our initiatives focus on building strong, supportive communities.</p>
          </div>
          <div className={styles.column}>
            <img src="/images/rb4.jpg" alt="Empowerment Programs" />
            <h4>Empowerment Programs</h4>
            <p>We provide resources and opportunities for personal and professional growth.</p>
          </div>
        </section>

        <h1 className={styles.newsStories}>Latest News and Stories</h1>
        <div className={styles.newsCards}>
          <div className={styles.newsCard}>
            <h2>Impactful Story 1</h2>
            <img src="/images/rb5.jpg" alt="Impactful Story 1" />
            <p>Read about our recent successes and ongoing projects.</p>
          </div>
          <div className={styles.newsCard}>
            <h2>Impactful Story 2</h2>
            <img src="/images/rb6.jpg" alt="Impactful Story 2" />
            <p>Discover how we are making a difference in the lives of refugees.</p>
          </div>
          <div className={styles.newsCard}>
            <h2>Impactful Story 3</h2>
            <img src="/images/rb7.jpg" alt="Impactful Story 3" />
            <p>Learn more about our initiatives and their impact.</p>
          </div>
        </div>

        <div className={styles.moreNews}>
          <p>Read More News</p>
          <span>→</span>
        </div>

        <section className={styles.teamSection}>
          <h2>Meet Our Dedicated Team</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.teamImageWrapper}>
                  <Image
                    src={(member as any).image || '/images/default-profile.jpg'}
                    alt={(member as any).name || 'Team member'} 
                    width={200}
                    height={200}
                    className={styles.teamImage}
                  />
                </div>
                <h3>{(member as any).name}</h3>
                <p>{(member as any).role}</p>
                <div className={styles.socialLinks}>
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.partnersSection}>
          <h2>Our Esteemed Partners</h2>
          <div className={styles.partnersWrapper}>
            <button 
              className={`${styles.scrollButton} ${styles.scrollLeft}`}
              onClick={() => scrollPartners('left')}
              aria-label="Scroll left"
            >
              ←
            </button>
            <div className={styles.partnersTrack} ref={partnersRef}>
              {partners.map((partner, index) => (
                <div key={index} className={styles.partnerCard}>
                  <Image
                    src={(partner as any).logo || '/images/default-logo.jpg'}
                    alt={(partner as any).name || 'Partner logo'}
                    width={150}
                    height={80}
                    className={styles.partnerLogo}
                  />
                  <p>{(partner as any).name}</p>
                </div>
              ))}
            </div>
            <button 
              className={`${styles.scrollButton} ${styles.scrollRight}`}
              onClick={() => scrollPartners('right')}
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;