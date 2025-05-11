"use client";
import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import Link from "next/link";
import styles from "./styles/Home.module.css";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';

// Dynamically import CountUp with no SSR
const CountUp = dynamic(() => import('react-countup'), { ssr: false });

interface Partner {
  id: string;
  name: string;
  logo: string;
}

const Home: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [partners, setPartners] = useState<Partner[]>([]);

  const { ref: metricsRef } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const metrics = [
    {
      number: 5000,
      label: 'Lives Impacted',
      icon: '/icons/lives.svg',
      suffix: '+'
    },
    {
      number: 4,
      label: 'Core Programs',
      icon: '/icons/programs.svg'
    },
    {
      number: 10,
      label: 'Partner Organizations',
      icon: '/icons/partners.svg'
    }
  ];

  useEffect(() => {
    setIsClient(true);

    // Updated mock data for development
    const mockPartners: Partner[] = [
      { id: "1", name: "Refugepoint", logo: "/images/refugepoint.png" },
      { id: "2", name: "Mr. Green Africa", logo: "/images/" },
      { id: "3", name: "Nairobi Industrial Institute", logo: "/images/NairobiIndustrial.jpg" },
      { id: "4", name: "Embakasi Sub-County Peace Committee", logo: "/images/EmbakasiPeace.jpg" },
      { id: "5", name: "Kenya Association of Waste Recyclers", logo: "/images/KAWR.jpg" },
      { id: "6", name: "Positve Young Women Voices", logo: "/images/Positivewomen.jpg" },
      { id: "7", name: "Youth Voices Community ", logo: "/images/Namati.jpg" },
      { id: "8", name: "Pamoja Trust", logo: "/images/NCC.jpg" },
      { id: "9", name: "Umoja Refugees", logo: "/images/Umoja.jpg" },
      { id: "10", name: "Danish Refugee Council", logo: "/images/Namati.jpg" },
      { id: "11", name: "Family Bridges of Hope", logo: "/images/Namati.jpg" },
    ];

    setPartners(mockPartners);

    // Uncomment this if you have valid API endpoints
    /*
    const fetchData = async () => {
      try {
        const partnersResponse = await axios.get(process.env.NEXT_PUBLIC_PARTNERS_API_URL || "https://example.com/api/partners");
        setPartners(partnersResponse.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Axios error:", error.message);
          if (error.response) {
            console.error("Response data:", error.response.data);
          } else if (error.request) {
            console.error("Request made but no response received:", error.request);
          } else {
            console.error("Error message:", error.message);
          }
        } else {
          console.error("Unexpected error:", error);
        }
      }
    };
    fetchData();
    */
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.fontResponsiveH1}>Your self Reliance is our concern</h1>
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
              src="/videos/video.mp4"
              poster="/videos/video-placeholder.jpg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.fontResponsiveH2}>Program Descriptions</h2>
            <p className={styles.fontResponsiveP}>
              Our programs are designed to empower and support refugees through livelihhood, pschosocial support program, peace building and advcacy.           </p>
          </div>
        </section>

        {/* Programs Grid Section */}
        <section className={styles.programsSection}>
          <h2 className={`${styles.sectionTitle} ${styles.fontResponsiveH2}`}>Our Programs</h2>
          <div className={styles.programsGrid}>
            <div className={`${styles.programCard} ${styles.featured}`}>
              <div className={styles.programContent}>
                <h3 className={styles.fontResponsiveH3}>Livelihood </h3>
                <p className={styles.fontResponsiveP}>we operate mains projets like USLA- Unran saving and loan assocication, which we operate in three brubch,main branch, Umoja Branch, Rongai  and single mothers branch, we also have singles or better tommorrow as project where we expand exsiting business o reugee businsss with 70 reugee and 30 % host communnuty or Kenyan, and we send beneficaries or short coarse to Nairobi Industrial Institute where they leanskill in plumbing, Nail Techology, braiding and weaving. Under livelihhood we also have house to house plastic waste collection and trading project. Refugee brother is an  aggregator under waste management in collaboration with Mr Green Africa. We are piloting our stop centre , where we put together all the activites we have in one place or easy access to the community.   waste recycling, and waste management. Providing access to quality education and learning resources for refugee children.</p>
                <ul className={styles.programStats}>
                  <li>
                    <span className={styles.statNumber}>300+</span>
                    <span className={styles.statLabel}>Beneficiaries</span>
                  </li>
                  <li>
                    <span className={styles.statNumber}>1</span>
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
                <h3 className={styles.fontResponsiveH3}>Psycho Social Support</h3>
                <p className={styles.fontResponsiveP}>Refugee brotherhood has a emmbed psycho social support program as complementing the other programs, where our main is self reliance , and we beleive for a person to be self reliance their mental being has to be clear from their experience and refugee and vulnerable host community any form of abuse, where we  run six sessions on mental well being in a year, one session in every two months. Here we provide a safe space for the community to express their feelings and emotions, and experience. After the indentication of those with dire problem beyond refugee brotherhood capacity, refferal to NGos within our network for further intervention.</p>
                <Link href="/programs/skills" className={styles.programLink}>
                  Learn More →
                </Link>
              </div>
            </div>

            <div className={styles.programCard}>
              <div className={styles.programContent}>
                <h3 className={styles.fontResponsiveH3}>Peace Building</h3>
                <p className={styles.fontResponsiveP}>We create awareness on peace building, we have peace clubs in our project areas, and we run peace walks in the community to create awareness on peace building through sports - Soccer, where we have a tournament: Community Social Cohesion and Peace Cup- Starts from 6th April- International Day of Sport for Development and Peace, where we do qourters and 20th June, World Reuge day, we play the semi finals nad subsequently on 21 st Septmeber we conclude with the finals op the community social cohesion an peace cup </p>
                <Link href="/programs/healthcare" className={styles.programLink}> 
                  Learn More →
                </Link>
              </div>
            </div>

            <div className={styles.programCard}>
              <div className={styles.programContent}>
                <h3 className={styles.fontResponsiveH3}>Advocacy</h3>
                <p className={styles.fontResponsiveP}>We advoacy for policy, laws and prorgams and systems that affects. Our advocacy effort is to advance the self reliance of refugees and vulnerable host community by recommending polices on existing rameworks like Shirika Plan, 2021 Refugee Act and Global Agenda, through running a ten weeks advocacy campaign throough compleing stories, blogs voices of community, and collorating with other other refugee Led Organisation, and  other local host community organisation. We have united a united under one consortium of six refugee led organisation for collective action on Beyond my status , a project we do during the world refugee week. We have been actively enagaged in the drating of Nairobi City County Sport policy where are proud and grateful to be part of the process.  </p>
                <Link href="/programs/community" className={styles.programLink}>
                  Learn More →
                </Link>
              </div>
            </div>

            <div className={styles.programMetrics} ref={metricsRef}>
              {metrics.map((metric, index) => (
                <div key={index} className={styles.metric}>
                  {metric.icon && (
                    <div 
                      className={styles.metricIcon} 
                      style={{ backgroundImage: `url(${metric.icon})` }}
                    />
                  )}
                  <span className={styles.metricNumber}>
                    {isClient && (
                      <CountUp
                        end={metric.number}
                        duration={2.5}
                        separator=","
                        suffix={metric.suffix}
                      />
                    )}
                  </span>
                  <span className={styles.metricLabel}>{metric.label}</span>
                </div>
              ))}
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
              <h3 className={styles.fontResponsiveH3}>Hassan Kazungu</h3>
              <p className={styles.fontResponsiveP}>CEO</p>
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
              <h3 className={styles.fontResponsiveH3}>Luke Karema</h3>
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
              <h3 className={styles.fontResponsiveH3}>Linda Kaunda</h3>
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
              <h3 className={styles.fontResponsiveH3}>Asnath Kabatesi</h3>
              <p className={styles.fontResponsiveP}>Community Manager</p>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className={styles.partnersSection}>
          <h2 className={styles.fontResponsiveH2}>Our Trusted Partners</h2>
          <div className={styles.partnersWrapper}>
            <div className={styles.partnersTrack}>
              {partners.map((partner) => (
                <div key={partner.id} className={styles.partnerCard}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={150}
                    height={100}
                    className={styles.partnerLogo}
                    priority
                  />
                </div>
              ))}
            </div>
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

