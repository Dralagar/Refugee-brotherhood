import React from 'react';
import styles from '../styles/Partners.module.css';

// Define a type for partner data
type Partner = {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
};

const Partners: React.FC = () => {
  // Sample partner data with logos and descriptions
  const partners: Partner[] = [
    {
      id: 1,
      name: 'Partner A',
      logo: '/images/partners/partner-a.png',
      description: 'A global leader in innovation and technology.',
      website: 'https://partner-a.com',
    },
    {
      id: 2,
      name: 'Partner B',
      logo: '/images/partners/partner-b.png',
      description: 'Dedicated to sustainability and environmental impact.',
      website: 'https://partner-b.com',
    },
    {
      id: 3,
      name: 'Partner C',
      logo: '/images/partners/partner-c.png',
      description: 'Transforming education through digital solutions.',
      website: 'https://partner-c.com',
    },
    {
      id: 4,
      name: 'Partner D',
      logo: '/images/partners/partner-d.png',
      description: 'Empowering communities through healthcare initiatives.',
      website: 'https://partner-d.com',
    },
  ];

  return (
    <div className={styles.partnersContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Our Partners</h1>
        <p className={styles.heroSubtitle}>
          Collaborating with visionary organizations to drive meaningful change.
        </p>
      </div>

      {/* Partners Grid */}
      <div className={styles.partnersGrid}>
        {partners.map((partner) => (
          <a
            key={partner.id}
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.partnerCard}
          >
            <div className={styles.partnerLogoContainer}>
              <img
                src={partner.logo}
                alt={partner.name}
                className={styles.partnerLogo}
              />
            </div>
            <h3 className={styles.partnerName}>{partner.name}</h3>
            <p className={styles.partnerDescription}>{partner.description}</p>
          </a>
        ))}
      </div>

      {/* Call to Action */}
      <div className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Interested in Partnering with Us?</h2>
        <p className={styles.ctaText}>
          Join our network of partners and make a difference together.
        </p>
        <a href="/contact" className={styles.ctaButton}>
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Partners;