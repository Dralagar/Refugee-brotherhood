import React from 'react';
import styles from '../styles/Alumni.module.css';

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
      name: 'John Doe',
      photo: '/images/alumni/john-doe.jpg',
      role: 'Software Engineer',
      description: 'Passionate about building scalable and user-friendly applications.',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
    {
      id: 2,
      name: 'Jane Smith',
      photo: '/images/alumni/jane-smith.jpg',
      role: 'Data Scientist',
      description: 'Specializing in machine learning and data visualization.',
      linkedin: 'https://linkedin.com/in/janesmith',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      photo: '/images/alumni/alice-johnson.jpg',
      role: 'Product Manager',
      description: 'Driving product innovation and user-centric design.',
      linkedin: 'https://linkedin.com/in/alicejohnson',
    },
    {
      id: 4,
      name: 'Bob Brown',
      photo: '/images/alumni/bob-brown.jpg',
      role: 'UX Designer',
      description: 'Creating intuitive and delightful user experiences.',
      linkedin: 'https://linkedin.com/in/bobbrown',
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
              <img
                src={alumni.photo}
                alt={alumni.name}
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