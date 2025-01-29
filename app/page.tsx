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
        const [teamResponse, partnersResponse] = await Promise.all([
          axios.get('https://example.com/api/team'),
          axios.get('https://example.com/api/partners')
        ]);
        setTeamMembers(teamResponse.data);
        setPartners(partnersResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
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
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}></div>
          <div className={styles.heroContent}>
            <h1>Welcome to Refugee Brotherhood</h1>
            <p>We are committed to supporting refugees worldwide through comprehensive programs and partnerships.</p>
            <div className={styles.heroButtons}>
              <button className={styles.learnMore}>Learn More</button>
              <Link href="/contact" legacyBehavior>
                <a className={styles.contactButton}>Contact Us</a>
              </Link>
            </div>
          </div>
        </section>

        {/* Programs Section */}
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

        {/* Fundraising Section */}
        <div className={styles.fundraisingIcons}>
          {['$10', '$20', '$50'].map((amount, index) => (
            <div key={index} className={styles.fundraisingIcon}>{amount}</div>
          ))}
        </div>

        <div className={styles.moreWays}>
          <p>Discover More Ways to Contribute</p>
          <span>→</span>
        </div>

        {/* Achievements Section */}
        <h2>Our Achievements</h2>
        <div className={styles.milestoneIcons}>
          {['Milestone 1', 'Milestone 2', 'Milestone 3'].map((milestone, index) => (
            <div key={index} className={styles.milestoneIcon}>{milestone}</div>
          ))}
        </div>

        {/* Image Section */}
        <section className={styles.twoColumnImage}>
          {[
            { src: '/images/rb.jpg', alt: 'Community Engagement', title: 'Community Engagement', description: 'Our initiatives focus on building strong, supportive communities.' },
            { src: '/images/rb4.jpg', alt: 'Empowerment Programs', title: 'Empowerment Programs', description: 'We provide resources and opportunities for personal and professional growth.' }
          ].map((item, index) => (
            <div key={index} className={styles.column}>
              <Image src={item.src} alt={item.alt} width={500} height={300} />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </section>

        {/* News Section */}
        <h1 className={styles.newsStories}>Latest News and Stories</h1>
        <div className={styles.newsCards}>
          {[
            { title: 'Impactful Story 1', src: '/images/rb5.jpg', description: 'Read about our recent successes and ongoing projects.' },
            { title: 'Impactful Story 2', src: '/images/rb6.jpg', description: 'Discover how we are making a difference in the lives of refugees.' },
            { title: 'Impactful Story 3', src: '/images/rb7.jpg', description: 'Learn more about our initiatives and their impact.' }
          ].map((story, index) => (
            <div key={index} className={styles.newsCard}>
              <h2>{story.title}</h2>
              <Image src={story.src} alt={story.title} width={500} height={300} />
              <p>{story.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.moreNews}>
          <p>Read More News</p>
          <span>→</span>
        </div>

        {/* Team Section */}
        <section className={styles.teamSection}>
          <h2>Meet Our Dedicated Team</h2>
          <div className={styles.teamGrid}>
            {[
              { name: 'Hassan Kazungu', role: 'Founder and Executive Director', image: '/images/alice.jpg' },
              { name: 'Bob Smith', role: 'CTO', image: '/images/bob.jpg' },
              { name: 'Carol White', role: 'CFO', image: '/images/carol.jpg' },
              { name: 'David Brown', role: 'COO', image: '/images/david.jpg' }
            ].map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.teamImageWrapper}>
                  <Image
                    src={member.image || '/images/default-profile.jpg'}
                    alt={member.name || 'Team member'}
                    width={200}
                    height={200}
                    className={styles.teamImage}
                  />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className={styles.socialLinks}>
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partners Section */}
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
              {[
                { name: 'Partner A', logo: '/images/partner-a.jpg' },
                { name: 'Partner B', logo: '/images/partner-b.jpg' },
                { name: 'Partner C', logo: '/images/partner-c.jpg' },
                { name: 'Partner D', logo: '/images/partner-d.jpg' }
              ].map((partner, index) => (
                <div key={index} className={styles.partnerCard}>
                  <Image
                    src={partner.logo || '/images/default-logo.jpg'}
                    alt={partner.name || 'Partner logo'}
                    width={150}
                    height={80}
                    className={styles.partnerLogo}
                  />
                  <p>{partner.name}</p>
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