import React from 'react';
import styles from '../styles/Partners.module.css';
import Image from 'next/image';

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
      name: "Refugepoint",
      logo: "/images/refugepoint.png",
      description: "Supporting refugees with innovative solutions.",
      website: "https://refugepoint.org",
    },
    {
      id: 2,
      name: "Mr. Green Africa",
      logo: "/images/GreenAfrica.png",
      description: "Pioneering sustainable waste management in Africa.",
      website: "https://mrgreenafrica.com",
    },
    {
      id: 3,
      name: "Nairobi Industrial Institute",
      logo: "/images/NairobiIndustrial.jpg",
      description: "Empowering youth with technical skills.",
      website: "https://nairobiiinstitute.ac.ke",
    },
    {
      id: 4,
      name: "Embakasi Sub-County Peace Committee",
      logo: "/images/EmbakasiPeace.jpg",
      description: "Promoting peace and community cohesion.",
      website: "#",
    },
    {
      id: 5,
      name: "Kenya Association of Waste Recyclers",
      logo: "/images/KAWR.jpg",
      description: "Advancing recycling and environmental sustainability.",
      website: "#",
    },
    {
      id: 6,
      name: "Positive Young Women Voices",
      logo: "/images/Positivewomen.jpg",
      description: "Empowering young women for positive change.",
      website: "#",
    },
    {
      id: 7,
      name: "Namati",
      logo: "/images/Namati.jpg",
      description: "Legal empowerment for communities.",
      website: "https://namati.org",
    },
    {
      id: 8,
      name: "Pamoja Trust",
      logo: "/images/NCC.jpg",
      description: "Community development and advocacy.",
      website: "#",
    },
    {
      id: 9,
      name: "Umoja Refugees",
      logo: "/images/Umoja.jpg",
      description: "Supporting refugee integration and empowerment.",
      website: "#",
    },
    {
      id: 10,
      name: "Danish Refugee Council",
      logo: "/images/Namati.jpg",
      description: "Humanitarian support for refugees.",
      website: "https://drc.ngo",
    },
    {
      id: 11,
      name: "Family Bridges of Hope",
      logo: "/images/Namati.jpg",
      description: "Building hope for vulnerable families.",
      website: "#",
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
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={100}
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