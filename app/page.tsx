"use client"
import React, { useRef } from 'react';
import Link from 'next/link';
import styles from './styles/Home.module.css';
import Image from 'next/image';
  
const Home: React.FC = () => {
  const partnersRef = useRef<HTMLDivElement>(null);

  const scrollPartners = (direction: 'left' | 'right') => {
    if (partnersRef.current) {
      const scrollAmount = 300;
      partnersRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  const teamMembers = [
    { name: 'John Doe', role: 'Executive Director', image: '/images/team1.jpg' },
    { name: 'Jane Smith', role: 'Program Manager', image: '/images/team2.jpg' },
    { name: 'Mike Johnson', role: 'Community Liaison', image: '/images/team3.jpg' },
    { name: 'Sarah Williams', role: 'Outreach Coordinator', image: '/images/team4.jpg' },
  ];

  const partners = [
    { name: 'UNHCR', logo: '/images/partner1.png' },
    { name: 'Red Cross', logo: '/images/partner2.png' },
    { name: 'UNICEF', logo: '/images/partner3.png' },
    { name: 'WHO', logo: '/images/partner4.png' },
    { name: 'Save the Children', logo: '/images/partner5.png' },
  ];

  return (
    <div className={styles.container}>
      
      <main className={styles.mainContent}>
        <section className={styles.hero}>
          <div className={styles.heroBackground}></div>
          <div className={styles.heroContent}>
            <h1>Welcome</h1>
            <p>Introduction text...</p>
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
            <Image src="/images/rb4.jpg" alt="Image 2" width={500} height={300} />
            <h4>Column 2 Title</h4>
            <p>Column 2 description text...</p>
          </div>
        </section>

        <h1 className={styles.newsStories}>News and Stories</h1>
        <div className={styles.newsCards}>
          <div className={styles.newsCard}>
            <h2>News Title 1</h2>
            <Image src="/images/rb5.jpg" alt="Image 2" width={500} height={300} />
            <p>News description 1...</p>
          </div>
          <div className={styles.newsCard}>
            <h2>News Title 2</h2>
            <Image src="/images/rb6.jpg" alt="Image 2" width={500} height={300} />
            <p>News description 2...</p>
          </div>
          <div className={styles.newsCard}>
            <h2>News Title 3</h2>
            <Image src="/images/rb7.jpg" alt="Image 2" width={500} height={300} />
            <p>News description 3...</p>
          </div>
        </div>

        <div className={styles.moreNews}>
          <p>More news</p>
          <span>→</span>
        </div>

        <section className={styles.teamSection}>
          <h2>Meet Our Team</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.teamImageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
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

        <section className={styles.partnersSection}>
          <h2>Our Partners</h2>
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
                    src={partner.logo}
                    alt={partner.name}
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