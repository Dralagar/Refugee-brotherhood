'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Link from 'next/link';
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

  // Add scroll behavior for hash links
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, []);

  const impactStats = [
    { number: 2000, label: 'Lives Impacted', icon: '👨‍👩‍👧‍👦' },
    { number: 4, label: 'Core Programs', icon: '📈' },
    { number: 12, label: 'Partner Organizations', icon: '🤝' },
    { number: 500, label: 'Active Volunteers', icon: '❤️' }
  ];

  const successStories = [
    {
      id: 1,
      name: "Niyogera Nkunda",
      image: "/images/rb10.jpg",
      quote: "Through the Brotherhood&apos;s support, I was able to start my own business.",
      story: "After fleeing Syria, Sarah found hope through our entrepreneurship program..."

    },
    // Add more success stories as needed
  ];

  // Sample team data
  const teamMembers = [
    { 
      name: 'Hassan Kazungu', 
      position: 'Executive Director', 
      image: '/images/team1.jpg',
      bio: 'Leading our mission with 10+ years of experience in refugee support and community development.'
    },
    { 
      name: 'Luke Karema', 
      position: 'Deputy Director', 
      image: '/images/team2.jpg',
      bio: 'Overseeing program implementation and community partnerships.'
    },
    { 
      name: 'Linda Kaunda', 
      position: 'Lead Peace Building', 
      image: '/images/team3.jpg',
      bio: 'Building bridges between refugee and host communities.'
    },
    { 
      name: 'Asnath Kabatesi', 
      position: 'Lead Advocacy', 
      image: '/images/team4.jpg',
      bio: 'Developing strategic partnerships for sustainable impact.'
    },
    { 
      name: 'Christel Bakayomo', 
      position: 'Communcation Lead', 
      image: '/images/team5.jpg',
      bio: 'Managing our communication and media strategies.'
    }

  ];

  // Sample partner data with at least five partners
  const partners = [
    { name: 'Refugepoint', logo: '/images/refugepoint.png' },
    { name: 'Mr. Green Africa', logo: '/images/GreenAfrica.png' },
    { name: 'Nairobi Industrial Institute', logo: '/images/NairobiIndustrial.jpg' },
    { name: 'Embakasi Sub-County Peace Committee', logo: '/images/EmbakasiPeace.jpg' },
    { name: 'Kenya Association of Waste Recyclers', logo: '/images/KAWR.jpg' }
  ];

  return (
    <div className={styles.aboutContainer + ' fadeIn'}>
      {/* Hero Section */}
      <div className={styles.heroSection + ' fadeInUp'}>
        <h1>Creating Lasting Change</h1>
        
        <p style={{ fontSize: '1.25rem', marginTop: '1.5rem', color: '#fff', fontWeight: 500, textShadow: '0 2px 8px #3674B5' }}>
          Empowering refugees through sustainable solutions and community support
        </p>
      </div>

      {/* Mission Section */}
      <section id="mission" className={styles.missionSection}>
        <h2>Our Mission</h2>
        <div className={styles.missionContent}>
          <p>
            At Refugee Brotherhood, we are dedicated to empowering refugees and displaced individuals
            by providing sustainable solutions that enable them to rebuild their lives with dignity
            and purpose. Through our comprehensive programs and community partnerships, we create
            opportunities for self-sufficiency and social integration.
          </p>
          <div className={styles.missionValues}>
            <div className={styles.valueCard}>
              <h3>Empowerment</h3>
              <p>Providing tools and resources for self-sufficiency</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Community</h3>
              <p>Building bridges between refugees and local communities</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Sustainability</h3>
              <p>Creating lasting solutions that benefit everyone</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Innovation</h3>
              <p>Finding creative solutions to complex challenges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className={styles.teamSection}>
        <h2>Our Team</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={styles.teamCard + ' fadeInUp'}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.teamImageWrapper}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.teamImage}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <h3>{member.name}</h3>
              <p className={styles.position}>{member.position}</p>
              <p className={styles.bio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className={styles.impactSection}>
        <h2>Our Impact</h2>
        <div className={styles.statsGrid} ref={statsRef}>
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className={styles.statCard + ' fadeInUp'}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className={styles.statIcon}>{stat.icon}</span>
              <div className={styles.statNumber}>
                {statsInView && (
                  <CountUp end={stat.number} duration={2.5} separator="," />
                )}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className={styles.partnersSection}>
        <h2>Our Partners</h2>
        <div className={styles.partnersGrid}>
          {partners.map((partner, index) => (
            <div
              key={index}
              className={styles.partnerCard}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={100}
                className={styles.partnerLogo}
              />
              <p>{partner.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className={styles.ctaSection + ' fadeInUp'}>
        <h2>Join Our Mission</h2>
        <p>Together, we can make a difference in the lives of refugees</p>
        <div className={styles.ctaButtons}>
          <Link href="/donate" className={styles.primaryButton}>
            Make a Donation
          </Link>
          <Link href="/contact" className={styles.secondaryButton}>
            Contact Us
          </Link>
        </div>
      </div>

      {/* Success Stories Carousel */}
      <div className={styles.storiesSection}>
        <h2>Success Stories</h2>
        <div className={styles.storiesGrid}>
          {successStories.map((story) => (
            <div
              key={story.id}
              className={styles.storyCard}
            >
              <div className={styles.storyImage}>
                <img
                  src={story.image}
                  alt={story.name}
                  className={styles.storyImg}
                />
              </div>
              <h3>{story.name}</h3>
              <p>{story.quote}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Story Modal */}
      {activeStory && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button 
              className={styles.closeButton}
              onClick={() => setActiveStory(null)}
            >
              ×
            </button>
            <h3>{activeStory.name}</h3>
            <p>{activeStory.story}</p>
          </div>
        </div>
      )}
    </div>
  );
}
