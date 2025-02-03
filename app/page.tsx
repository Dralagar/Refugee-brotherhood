"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles/Home.module.css";
import Image from "next/image";
import axios from "axios";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

interface Partner {
  id: string;
  name: string;
  logo: string;
}

const Home: React.FC = () => {
  const partnersRef = useRef<HTMLDivElement>(null);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [teamResponse, partnersResponse] = await Promise.all([
          axios.get(
            process.env.NEXT_PUBLIC_TEAM_API_URL ||
              "https://example.com/api/team"
          ),
          axios.get(
            process.env.NEXT_PUBLIC_PARTNERS_API_URL ||
              "https://example.com/api/partners"
          ),
        ]);

        // Process the responses
        console.log('Team Data:', teamResponse.data);
        console.log('Partners Data:', partnersResponse.data);

        setTeamMembers(teamResponse.data);
        setPartners(partnersResponse.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Axios error:', error.message);
          console.error('Error config:', error.config);
          if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
          } else if (error.request) {
            console.error('Request made but no response received:', error.request);
          } else {
            console.error('Error message:', error.message);
          }
        } else if (error instanceof Error) {
          console.error('Unexpected error:', error.message);
        } else {
          console.error('Unexpected error:', error);
        }
      }
    };

    fetchData();
  }, []);

  const scrollPartners = (direction: "left" | "right") => {
    if (partnersRef.current) {
      const scrollAmount = 300;
      partnersRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.fontResponsiveH1}>Empowering Refugees, Building Futures</h1>
            <p className={styles.fontResponsiveP}>
              Join us in our mission to transform lives through innovative programs and strategic partnerships.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.learnMore}>Discover More</button>
              <Link href="/contact" className={styles.contactButton}>
                Get in Touch
              </Link>
            </div>
          </div>
          
        </section>

        {/* About Section */}
        <section className={styles.aboutSection}>
          <h2 className={styles.fontResponsiveH2}>About Us</h2>
          <p className={styles.fontResponsiveP}>
            At Refugee Brotherhood, we believe in the power of community and collaboration. Our mission is to empower refugees through various initiatives, partnerships, and skill-building programs to create a sustainable future for all.
          </p>
        </section>

        {/* Video and Description Section */}
        <section className={styles.videoDescriptionSection}>
          <div className={styles.videoContainer}>
            <video
              className={styles.video}
              controls
              src="/path/to/video.mp4"
              poster="/path/to/video-placeholder.jpg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.fontResponsiveH2}>Program Descriptions</h2>
            <p className={styles.fontResponsiveP}>
              Our programs are designed to empower and support refugees through education, skills training, healthcare access, and community integration. Each initiative is tailored to meet the unique needs of the communities we serve.
            </p>
          </div>
        </section>

        {/* Programs Grid Section */}
        <section className={styles.programsSection}>
          <h2 className={`${styles.sectionTitle} ${styles.fontResponsiveH2}`}>Our Programs</h2>
          <div className={styles.programsGrid}>
            <div className={`${styles.programCard} ${styles.featured}`}>
              <div className={styles.programContent}>
                <h3 className={styles.fontResponsiveH3}>Education Support</h3>
                <p className={styles.fontResponsiveP}>Providing access to quality education and learning resources for refugee children.</p>
                <ul className={styles.programStats}>
                  <li>
                    <span className={styles.statNumber}>500+</span>
                    <span className={styles.statLabel}>Students Supported</span>
                  </li>
                  <li>
                    <span className={styles.statNumber}>15</span>
                    <span className={styles.statLabel}>Partner Schools</span>
                  </li>
                </ul>
                <Link href="/programs/education" className={styles.programLink}>
                  Learn More →
                </Link>
              </div>
              <div className={styles.programImage}>
                <Image
                  src="/images/education.jpg"
                  alt="Education Program"
                  width={600}
                  height={400}
                  layout="responsive"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>

            <div className={styles.programCard}>
              <div className={styles.programContent}>
                <h3 className={styles.fontResponsiveH3}>Skills Training</h3>
                <p className={styles.fontResponsiveP}>Vocational training and skill development programs for sustainable employment.</p>
                <Link href="/programs/skills" className={styles.programLink}>
                  Learn More →
                </Link>
              </div>
            </div>

            <div className={styles.programCard}>
              <div className={styles.programContent}>
                <h3 className={styles.fontResponsiveH3}>Healthcare Access</h3>
                <p className={styles.fontResponsiveP}>Ensuring access to essential healthcare services and medical support.</p>
                <Link href="/programs/healthcare" className={styles.programLink}>
                  Learn More →
                </Link>
              </div>
            </div>

            <div className={styles.programCard}>
              <div className={styles.programContent}>
                <h3 className={styles.fontResponsiveH3}>Community Integration</h3>
                <p className={styles.fontResponsiveP}>Programs to facilitate smooth integration into local communities.</p>
                <Link href="/programs/community" className={styles.programLink}>
                  Learn More →
                </Link>
              </div>
            </div>

            <div className={styles.programMetrics}>
              <div className={styles.metric}>
                <div className={styles.metricIcon} style={{ backgroundImage: 'url(/path/to/icon1.png)' }}></div>
                <span className={styles.metricNumber}>2000+</span>
                <span className={styles.metricLabel}>Lives Impacted</span>
              </div>
              <div className={styles.metric}>
                <div className={styles.metricIcon} style={{ backgroundImage: 'url(/path/to/icon2.png)' }}></div>
                <span className={styles.metricNumber}>4</span>
                <span className={styles.metricLabel}>Core Programs</span>
              </div>
              <div className={styles.metric}>
                <div className={styles.metricIcon} style={{ backgroundImage: 'url(/path/to/icon3.png)' }}></div>
                <span className={styles.metricNumber}>12</span>
                <span className={styles.metricLabel}>Partner Organizations</span>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.teamSection}>
          <h2 className={styles.fontResponsiveH2}>Meet Our Dedicated Team</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamImageWrapper}>
                <Image
                  src="/images/profile.jpeg"
                  alt="Hassan Kazungu"
                  width={200}
                  height={200}
                  className={styles.teamImage}
                />
              </div>
              <p className={styles.fontResponsiveP}>CEO</p>
              <h3 className={styles.fontResponsiveH3}>Hassan Kazungu</h3>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImageWrapper}>
                <Image
                  src="/images/profile2.jpeg"
                  alt="Luke"
                  width={200}
                  height={200}
                  className={styles.teamImage}
                />
              </div>
              <h3 className={styles.fontResponsiveH3}>Luke</h3>
              <p className={styles.fontResponsiveP}>CTO</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImageWrapper}>
                <Image
                  src="/images/profile3.jpeg"
                  alt="Emily Johnson"
                  width={200}
                  height={200}
                  className={styles.teamImage}
                />
              </div>
              <h3 className={styles.fontResponsiveH3}>Emily Johnson</h3>
              <p className={styles.fontResponsiveP}>Lead Developer</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImageWrapper}>
                <Image
                  src="/images/profile4.jpeg"
                  alt="Michael Brown"
                  width={200}
                  height={200}
                  className={styles.teamImage}
                />
              </div>
              <h3 className={styles.fontResponsiveH3}>Michael Brown</h3>
              <p className={styles.fontResponsiveP}>Community Manager</p>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className={styles.partnersSection}>
          <h2 className={styles.fontResponsiveH2}>Our Trusted Partners</h2>
          <div className={styles.partnersWrapper}>
            <button
              className={`${styles.scrollButton} ${styles.scrollLeft}`}
              onClick={() => scrollPartners("left")}
              aria-label="Scroll left"
            >
              ←
            </button>
            <div className={styles.partnersTrack} ref={partnersRef}>
              {partners.map((partner) => (
                <div key={partner.id} className={styles.partnerCard}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={150}
                    height={150}
                    className={styles.partnerLogo}
                    priority
                  />
                </div>
              ))}
            </div>
            <button
              className={`${styles.scrollButton} ${styles.scrollRight}`}
              onClick={() => scrollPartners("right")}
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contactSection}>
          <h2 className={styles.fontResponsiveH2}>Connect With Us</h2>
          <p className={styles.fontResponsiveP}>
            We would love to hear from you. Reach out for collaborations, queries, or just to connect with us.
          </p>
          <Link href="/contact" className={styles.contactButton}>
            Contact Us
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Home;
