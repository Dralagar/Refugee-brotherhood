"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles/Home.module.css";
import Image from "next/image";
import axios from "axios";

const Home: React.FC = () => {
  const partnersRef = useRef<HTMLDivElement>(null);
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [partners, setPartners] = useState<any[]>([]);

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
        setTeamMembers(teamResponse.data);
        setPartners(partnersResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
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
            <h1>Empowering Refugees, Building Futures</h1>
            <p>
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

        {/* Programs Section */}
        <section className={styles.twoColumn}>
          <div className={styles.videoContainer}>
            <video controls>
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={styles.textContainer}>
            <h2>Our Initiatives</h2>
            <p>
              Dive into our comprehensive programs designed to uplift and empower refugee communities globally.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.teamSection}>
          <h2>Meet Our Dedicated Team</h2>
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
              <p>CEO</p>
              <h3>Hassan Kazungu</h3>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImageWrapper}>
                <Image
                  src="/images/profile2.jpeg"
                  alt="Jane Smith"
                  width={200}
                  height={200}
                  className={styles.teamImage}
                />
              </div>
              <h3>Jane Smith</h3>
              <p>CTO</p>
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
              <h3>Emily Johnson</h3>
              <p>Lead Developer</p>
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
              <h3>Michael Brown</h3>
              <p>Community Manager</p>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className={styles.partnersSection}>
          <h2>Our Trusted Partners</h2>
          <div className={styles.partnersWrapper}>
            <button
              className={`${styles.scrollButton} ${styles.scrollLeft}`}
              onClick={() => scrollPartners("left")}
              aria-label="Scroll left"
            >
              ←
            </button>
            <div className={styles.partnersTrack} ref={partnersRef}>
              {[
                { logo: "/images/yvc-logo.png" },
                { logo: "/images/refugepoint.png" },
                { logo: "/images/yvc-logo.png" },
                { logo: "/images/yvc-logo.png" },
                { logo: "/images/yvc-logo.png" },
              ].map((partner, index) => (
                <div key={index} className={styles.partnerCard}>
                  <Image
                    src={partner.logo}
                    alt="Partner logo"
                    width={150}
                    height={150}
                    className={styles.partnerLogo}
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

        {/* About Section */}
        <section className={styles.aboutSection}>
          <h2>About Us</h2>
          <p>
            At Refugee Brotherhood, we believe in the power of community and collaboration. Our mission is to empower refugees through various initiatives, partnerships, and skill-building programs to create a sustainable future for all.
          </p>
        </section>

        {/* Contact Section */}
        <section className={styles.contactSection}>
          <h2>Connect With Us</h2>
          <p>
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
