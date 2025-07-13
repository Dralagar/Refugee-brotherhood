"use client";
import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Dynamically import CountUp with no SSR
const CountUp = dynamic(() => import('react-countup'), { ssr: false });

interface Partner {
  id: string;
  name: string;
  logo: string;
}

const HomeClient: React.FC = () => {
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

  const heroImages = [
    '/images/rb12.jpg',
    '/images/hero2.jpg',
    '/images/hero3.jpg',
  ];

  useEffect(() => {
    setIsClient(true);

    const mockPartners: Partner[] = [
      { id: "1", name: "Refugepoint", logo: "/images/refugepoint.png" },
      { id: "2", name: "Mr. Green Africa", logo: "/images/GreenAfrica.png" },
      { id: "3", name: "Nairobi Industrial Institute", logo: "/images/NairobiIndustrial.jpg" },
      { id: "4", name: "Embakasi Sub-County Peace Committee", logo: "/images/EmbakasiPeace.jpg" },
      { id: "5", name: "Kenya Association of Waste Recyclers", logo: "/images/KAWR.jpg" },
      { id: "6", name: "Positive Young Women Voices", logo: "/images/Positivewomen.jpg" },
      { id: "7", name: "Youth Voices Community", logo: "/images/YVC.png" },
      { id: "8", name: "Pamoja Trust", logo: "/images/Pamojatrust.png" },
      { id: "9", name: "Umoja Refugees", logo: "/images/Umoja.png" },
      { id: "10", name: "Danish Refugee Council", logo: "/images/DRC.jpg" },
      { id: "11", name: "Family Bridges of Hope", logo: "/images/Namati.jpg" },
    ];

    setPartners(mockPartners);
  }, []);

  return (
    <div>
      <section className={styles.container}>
        <main className={styles.mainContent}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.heroBackground}></div>
            <div className={styles.heroContent}>
              <h1 className={styles.fontResponsiveH1}>Empowering Refugees, Strengthening Communities</h1>
              <p className={styles.heroSubtitle}>
                Refugee Brotherhood is a community-based, refugee-led organization dedicated to supporting displaced individuals and vulnerable host communities. Through innovative programs and strong partnerships with leading NGOs, we foster resilience, promote self-reliance, and create opportunities for all.
              </p>
              <div className={styles.heroButtons}>
                <Link href="/programs">
                  <button className={styles.learnMore}>Learn More</button>
                </Link>
                <Link href="/contact">
                  <button className={styles.contactButton}>Contact Us</button>
                </Link>
              </div>
            </div>
          </section>
          {/* About Section */}
          <section className={styles.aboutSection}>
            <h2 className={styles.fontResponsiveH2}>Who We Are</h2>
            <p className={styles.fontResponsiveP}>
              We are committed to advancing the rights and well-being of refugees and marginalized groups in Nairobi and beyond. Our holistic approach combines livelihood support, psychosocial care, peacebuilding, and advocacy, ensuring every person has the chance to thrive.
            </p>
          </section>
          {/* Video and Description Section */}
          <section className={styles.videoDescriptionSection}>
            <div className={styles.videoContainer}>
              <Image
                src="/images/rb12.jpg"
                alt="Refugee Brotherhood community event"
                width={600}
                height={400}
                className={styles.video}
                style={{ objectFit: 'cover', borderRadius: '12px' }}
                priority
              />
            </div>
            <div className={styles.descriptionContainer}>
              <h2 className={styles.fontResponsiveH2}>Our Programs</h2>
              <p className={styles.fontResponsiveP}>
                Our programs are designed to address the most pressing needs of our community. We provide vocational training, mental health support, peacebuilding initiatives, and advocacy for policy change, all in collaboration with trusted partners.
              </p>
            </div>
          </section>
          {/* Programs Grid Section */}
          <section className={styles.programsSection}>
            <h2 className={`${styles.sectionTitle} ${styles.fontResponsiveH2}`}>Our Programs</h2>
            <div className={styles.programsGrid}>
              <div className={`${styles.programCard} ${styles.featured}`}>
                <div className={styles.programContent}>
                  <h3 className={styles.fontResponsiveH3}>Livelihood</h3>
                  <p className={styles.fontResponsiveP}>We operate main projects like USLA- Urban saving and loan association, which we operate in three branches: main branch, Umoja Branch, Rongai and single mothers branch. We also have &quot;Singles for a Better Tomorrow&quot; project where we expand existing refugee businesses with 70% refugees and 30% host community or Kenyans, and we send beneficiaries for short courses to Nairobi Industrial Institute where they learn skills in plumbing, Nail Technology, braiding and weaving. Under livelihood we also have house to house plastic waste collection and trading project. Refugee Brotherhood is an aggregator under waste management in collaboration with Mr Green Africa. We are piloting our stop centre, where we put together all the activities we have in one place for easy access to the community - waste recycling, and waste management. Providing access to quality education and learning resources for refugee children.</p>
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
                  <Link href="/programs/livelihood" className={styles.programLink}>
                    Learn More →
                  </Link>
                </div>
                <div className={styles.programImage}>
                  <Image
                    src="/images/br13.jpg"
                    alt="Livelihood Program"
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
                  <div className={styles.programImageContainer}>
                    <Image
                      src="/images/psychosocial.jpg"
                      alt="Psycho Social Support Program - Refugee Brotherhood"
                      width={400}
                      height={250}
                      className={styles.programCardImage}
                      style={{ objectFit: 'cover', borderRadius: '8px' }}
                    />
                  </div>
                  <p className={styles.fontResponsiveP}>Refugee Brotherhood has an embedded psycho social support program complementing the other programs, where our main goal is self reliance. We believe for a person to be self-reliant their mental being has to be clear from their experience as refugees and vulnerable host community facing any form of abuse. We run six sessions on mental well being in a year, one session every two months. Here we provide a safe space for the community to express their feelings and emotions, and experiences. After the identification of those with dire problems beyond Refugee Brotherhood&apos;s capacity, we refer them to NGOs within our network for further intervention.</p>
                  <Link href="/programs/psychosocial" className={styles.programLink}>
                    Learn More →
                  </Link>
                </div>
              </div>

              <div className={styles.programCard}>
                <div className={styles.programContent}>
                  <h3 className={styles.fontResponsiveH3}>Peace Building</h3>
                  <div className={styles.programImageContainer}>
                    <Image
                      src="/images/rb66.jpg"
                      alt="Peace Building Program - Refugee Brotherhood"
                      width={400}
                      height={250}
                      className={styles.programCardImage}
                      style={{ objectFit: 'cover', borderRadius: '8px' }}
                    />
                  </div>
                  <p className={styles.fontResponsiveP}>We create awareness on peace building, we have peace clubs in our project areas, and we run peace walks in the community to create awareness on peace building through sports - Soccer, where we have a tournament: Community Social Cohesion and Peace Cup- Starts from 6th April- International Day of Sport for Development and Peace, where we do quarters and 20th June, World Refugee Day, we play the semi finals and subsequently on 21st September we conclude with the finals of the community social cohesion and peace cup.</p>
                  <Link href="/programs/peace" className={styles.programLink}> 
                    Learn More →
                  </Link>
                </div>
              </div>

              <div className={styles.programCard}>
                <div className={styles.programContent}>
                  <h3 className={styles.fontResponsiveH3}>Advocacy</h3>
                  <div className={styles.programImageContainer}>
                    <Image
                      src="/images/Advocate.jpg"
                      alt="Advocacy Program - Refugee Brotherhood"
                      width={400}
                      height={250}
                      className={styles.programCardImage}
                      style={{ objectFit: 'cover', borderRadius: '8px' }}
                    />
                  </div>
                  <p className={styles.fontResponsiveP}>We advocate for policy, laws, programs and systems that affect refugees. Our advocacy effort is to advance the self reliance of refugees and vulnerable host community by recommending policies on existing frameworks like Shirika Plan, 2021 Refugee Act and Global Agenda, through running a ten weeks advocacy campaign through compiling stories, blogs, voices of community, and collaborating with other refugee Led Organizations and other local host community organizations. We have united under one consortium of six refugee led organizations for collective action on &quot;Beyond my status&quot;, a project we do during the world refugee week. We have been actively engaged in the drafting of Nairobi City County Sport policy where we are proud and grateful to be part of the process.</p>
                  <Link href="/programs/advocacy" className={styles.programLink}>
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
                    alt="Hassan Kazungu - Executive Director of Refugee Brotherhood"
                    width={200}
                    height={200}
                    className={styles.teamImage}
                  />
                </div>
                <h3 className={styles.fontResponsiveH3}>Hassan Kazungu</h3>
                <p className={styles.fontResponsiveP}>Executive Director</p>
              </div>
              <div className={styles.teamCard}>
                <div className={styles.teamImageWrapper}>
                  <Image
                    src="/images/profile2.jpeg"
                    alt="Luke Karema - Deputy Director of Refugee Brotherhood"
                    width={200}
                    height={200}
                    className={styles.teamImage}
                  />
                </div>
                <h3 className={styles.fontResponsiveH3}>Luke Karema</h3>
                <p className={styles.fontResponsiveP}>Deputy Director</p>
              </div>
              <div className={styles.teamCard}>
                <div className={styles.teamImageWrapper}>
                  <Image
                    src="/images/profile3.jpeg"
                    alt="Linda Kaunda - Lead Peace Building at Refugee Brotherhood"
                    width={200}
                    height={200}
                    className={styles.teamImage}
                  />
                </div>
                <h3 className={styles.fontResponsiveH3}>Linda Kaunda</h3>
                <p className={styles.fontResponsiveP}>Lead Peace Building</p>
              </div>
              <div className={styles.teamCard}>
                <div className={styles.teamImageWrapper}>
                  <Image
                    src="/images/profile4.jpeg"
                    alt="Asnath Kabatesi - Lead Advocacy at Refugee Brotherhood"
                    width={200}
                    height={200}
                    className={styles.teamImage}
                  />
                </div>
                <h3 className={styles.fontResponsiveH3}>Asnath Kabatesi</h3>
                <p className={styles.fontResponsiveP}>Lead Advocacy</p>
              </div>
              <div className={styles.teamCard}>
                <div className={styles.teamImageWrapper}>
                  <Image
                    src="/images/profile5.jpeg"
                    alt="Christel Bakayomo - Communication Lead at Refugee Brotherhood"
                    width={200}
                    height={200}
                    className={styles.teamImage}
                  />
                </div>
                <h3 className={styles.fontResponsiveH3}>Christel Bakayomo</h3>
                <p className={styles.fontResponsiveP}>Communication Lead</p>
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
                      className="partnerLogo"
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
      </section>
    </div>
  );
};

export default HomeClient; 