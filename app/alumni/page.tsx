import React from 'react';
import styles from '../styles/Alumni.module.css';
import Image from 'next/image'; // Import next/image for optimization

// Define a type for alumni data
type Alumni = {
  id: number;
  name: string;
  photo: string;
  role: string;
  description: string;
  linkedin: string;
};

const Alumni: React.FC = () => {
  // Sample alumni data with photos and descriptions
  const alumniList: Alumni[] = [
    {
      id: 1,
      name: 'Sarah Mwangi',
      photo: '/images/alumni/sarah-mwangi.jpg',
      role: 'Community Development Officer',
      description: 'Former beneficiary turned community leader, specializing in livelihood programs and micro-enterprise development for refugee communities.',
      linkedin: 'https://linkedin.com/in/sarahmwangi',
    },
    {
      id: 2,
      name: 'Ahmed Hassan',
      photo: '/images/alumni/ahmed-hassan.jpg',
      role: 'Peace Building Coordinator',
      description: 'Leading community dialogue initiatives and youth programs to foster understanding between refugee and host communities.',
      linkedin: 'https://linkedin.com/in/ahmedhassan',
    },
    {
      id: 3,
      name: 'Grace Ochieng',
      photo: '/images/alumni/grace-ochieng.jpg',
      role: 'Psychosocial Support Counselor',
      description: 'Providing trauma-informed care and mental health support to refugees and vulnerable host community members.',
      linkedin: 'https://linkedin.com/in/graceochieng',
    },
    {
      id: 4,
      name: 'Mohammed Ali',
      photo: '/images/alumni/mohammed-ali.jpg',
      role: 'Advocacy & Rights Officer',
      description: 'Advancing refugee rights through policy advocacy, community engagement, and strategic partnerships.',
      linkedin: 'https://linkedin.com/in/mohammedali',
    },
    {
      id: 5,
      name: 'Fatima Abdi',
      photo: '/images/alumni/fatima-abdi.jpg',
      role: 'Vocational Training Coordinator',
      description: 'Managing skills development programs including plumbing, nail technology, and waste management training.',
      linkedin: 'https://linkedin.com/in/fatimaabdi',
    },
    {
      id: 6,
      name: 'David Kimani',
      photo: '/images/alumni/david-kimani.jpg',
      role: 'Youth Program Manager',
      description: 'Organizing sports programs and peace cup tournaments to promote social cohesion and community integration.',
      linkedin: 'https://linkedin.com/in/davidkimani',
    },
  ];

  return (
    <div className={styles.alumniContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Our Alumni Network</h1>
        <p className={styles.heroSubtitle}>
          Connecting past and present members to foster growth, collaboration, and success.
        </p>
      </div>

      {/* Alumni Grid */}
      <div className={styles.alumniGrid}>
        {alumniList.map((alumni) => (
          <a
            key={alumni.id}
            href={alumni.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.alumniCard}
          >
            <div className={styles.alumniPhotoContainer}>
              <Image
                src={alumni.photo}
                alt={alumni.name}
                width={150} // Specify width
                height={150} // Specify height
                className={styles.alumniPhoto}
              />
            </div>
            <h3 className={styles.alumniName}>{alumni.name}</h3>
            <p className={styles.alumniRole}>{alumni.role}</p>
            <p className={styles.alumniDescription}>{alumni.description}</p>
          </a>
        ))}
      </div>

      {/* Call to Action */}
      <div className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Join Our Alumni Network</h2>
        <p className={styles.ctaText}>
          Stay connected, share your achievements, and inspire the next generation.
        </p>
        <a href="/contact" className={styles.ctaButton}>
          Get Involved
        </a>
      </div>
    </div>
  );
};

export default Alumni;