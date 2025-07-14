"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

// Add X (formerly Twitter) SVG icon
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M17.53 3H21.5l-7.19 8.21L23 21h-6.18l-4.36-5.36L7.5 21H3.47l7.53-8.6L1 3h6.32l4.02 4.94L17.53 3zm-1.02 15.5h1.71l-5.19-6.38-1.37 1.57L16.51 18.5zm-9.2 0h1.7l2.1-2.5-2.8-3.44-3.01 5.94zm13.41-13h-1.62l-2.06 2.44 2.7 3.32 2.98-5.76zm-9.13 2.44L6.49 5.5H4.8l2.98 5.76 2.7-3.32zm1.34 1.65l-1.06 1.3 5.19 6.38 1.06-1.3-5.19-6.38z" />
  </svg>
);

const TopContactBar: React.FC = () => (
  <div className={styles.topContactBar}>
    <div className={styles.topContactInfoRow}>
      <span className={styles.topContactItem}>
        <FaMapMarkerAlt /> 
        <span className={styles.desktopText}>Patanisho Kayole, Nairobi </span>
        <span className={styles.mobileText}> Panisho, Kayole, Nairobi</span>
      </span>
      <a href="mailto:info@refugeebrotherhood.org" className={styles.topContactItem}>
        <FaEnvelope /> 
        <span className={styles.desktopText}>info@refugeebrotherhood.org</span>
        <span className={styles.mobileText}>info@refugeebrotherhood.org</span>
      </a>
      <a href="tel:+254794693898" className={styles.topContactItem}>
        <FaPhone /> 
        <span className={styles.desktopText}>+254 794 693898</span>
        <span className={styles.mobileText}>+254 794 693898</span>
      </a>
    </div>
    <div className={styles.topContactSocialRow}>
      <div className={styles.topContactRight}>
        <a href="https://www.facebook.com/refugeebrotherhood" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://x.com/br_refugee" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
          <Image src="/images/X logo.png" alt="X (formerly Twitter) Logo" width={24} height={24} style={{objectFit: 'contain'}} />
        </a>
        <a href="https://www.instagram.com/refugeebrotherhood" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/@refugeebrotherhood" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube />
        </a>
        <a href="https://ke.linkedin.com/company/refugee-brotherhood" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
          </svg>
        </a>
      </div>
      <div className={styles.topContactDonateRow}>
        <Link href="/donate" className={styles.donateButton} aria-label="Donate">
          <span className={styles.donateIcon}>❤️</span>
          <span className={styles.donateText}>Donate</span>
        </Link>
      </div>
    </div>
  </div>
);

const aboutSections = [
  { id: 'mission', label: 'Our Mission' },
  { id: 'team', label: 'Our Team' },
  { id: 'impact', label: 'Our Impact' },
  { id: 'partners', label: 'Partners' },
];

const programsList = [
  { id: 'livelihood', label: 'Livelihood' },
  { id: 'psychosocial', label: 'Psychosocial' },
  { id: 'peace', label: 'Peace Building' },
  { id: 'advocacy', label: 'Advocacy' },
];

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [activeAboutSection, setActiveAboutSection] = useState('');

  const pathname = usePathname();
  const router = useRouter();
  const aboutDropdownRef = useRef<HTMLLIElement>(null);
  const programsDropdownRef = useRef<HTMLLIElement>(null);

  // Close only the correct dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target as Node)
      ) {
        setAboutDropdownOpen(false);
      }
      if (
        programsDropdownRef.current &&
        !programsDropdownRef.current.contains(event.target as Node)
      ) {
        setProgramsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Scrollspy for About
  useEffect(() => {
    if (!window.location.pathname.startsWith('/about')) return;
    const handler = () => {
      let found = '';
      for (const section of aboutSections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            found = section.id;
            break;
          }
        }
      }
      setActiveAboutSection(found);
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, [typeof window !== 'undefined' && window.location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen((prev) => !prev);
    setProgramsDropdownOpen(false);
  };

  const toggleProgramsDropdown = () => {
    setProgramsDropdownOpen((prev) => !prev);
    setAboutDropdownOpen(false);
  };

  const closeAll = () => {
    setAboutDropdownOpen(false);
    setProgramsDropdownOpen(false);
    setIsOpen(false);
  };

  const isAboutActive = aboutDropdownOpen || (pathname.startsWith('/about') && activeAboutSection);
  // Programs dropdown is active if open or on a subpage
  const isProgramsActive = programsDropdownOpen || (pathname.startsWith('/programs') && programsList.some(p => pathname === `/programs/${p.id}`));

  return (
    <>
      <TopContactBar />
      <header className={styles.header}>
        <nav className={styles.navbar} aria-label="Main Navigation">
          <div className={styles.navbarTop}>
            <Link href="/" className={styles.logoImage} aria-label="Home">
              <div className={styles.logoContainer}>
                <Image
                  src="/images/logo.jpg"
                  alt="Refugee Brotherhood Logo"
                  width={90}
                  height={45}
                  priority
                  className={styles.logoImage}
                  style={{
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease, filter 0.3s ease'
                  }}
                />
                <div className={styles.logoOverlay}>
                  <span className={styles.logoText}>Refugee Brotherhood</span>
                </div>
              </div>
            </Link>

            <button
              className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="main-nav-links"
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
          </div>

          <ul
            className={`${styles.navLinks} ${isOpen ? styles.navActive : ""}`}
            id="main-nav-links"
            role="menubar"
          >
            <li className={styles.dropdown + ' ' + styles.navItem} ref={aboutDropdownRef}>
              <button
                className={styles.navLink + (isAboutActive ? ' ' + styles.active : '')}
                onClick={toggleAboutDropdown}
                aria-expanded={aboutDropdownOpen}
                aria-haspopup="true"
                aria-controls="about-dropdown-menu"
              >
                About
                <span
                  className={`${styles.dropdownIcon} ${aboutDropdownOpen ? styles.open : ""}`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
              {aboutDropdownOpen && (
                <ul className={styles.dropdownMenu + ' ' + styles.aboutDropdownMenu} id="about-dropdown-menu" role="menu">
                  {aboutSections.map((section) => (
                    <li key={section.id}>
                      <span className={styles.aboutDropdownBullet} aria-hidden="true"></span>
                      <a
                        href={`/about#${section.id}`}
                        className={styles.dropdownLink + (activeAboutSection === section.id ? ' ' + styles.active : '')}
                        onClick={(e) => {
                          e.preventDefault();
                          closeAll();
                          if (!pathname.startsWith('/about')) {
                            router.push(`/about#${section.id}`);
                          } else {
                            setTimeout(() => {
                              const el = document.getElementById(section.id);
                              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }, 10);
                            window.history.replaceState(null, '', `/about#${section.id}`);
                          }
                        }}
                        role="menuitem"
                      >
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className={styles.dropdown + ' ' + styles.navItem} ref={programsDropdownRef}>
              <button
                className={styles.navLink + (isProgramsActive ? ' ' + styles.active : '')}
                onClick={toggleProgramsDropdown}
                aria-expanded={programsDropdownOpen}
                aria-haspopup="true"
                aria-controls="programs-dropdown-menu"
              >
                Programs
                <span
                  className={`${styles.dropdownIcon} ${programsDropdownOpen ? styles.open : ""}`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
              {programsDropdownOpen && (
                <ul
                  className={styles.dropdownMenu + ' ' + styles.programsDropdownGrid}
                  id="programs-dropdown-menu"
                  role="menu"
                >
                  {programsList.map(program => {
                    let iconSrc = '';
                    let iconAlt = '';
                    if (program.id === 'peace') {
                      iconSrc = '/icons/peace.svg';
                      iconAlt = 'Peace Building Icon';
                    }
                    if (program.id === 'advocacy') {
                      iconSrc = '/icons/advocacy.svg';
                      iconAlt = 'Advocacy Icon';
                    }
                    if (program.id === 'livelihood') {
                      iconSrc = '/icons/livelihood.svg';
                      iconAlt = 'Livelihood Icon';
                    }
                    if (program.id === 'psychosocial') {
                      iconSrc = '/icons/psychosocial.svg';
                      iconAlt = 'Psychosocial Support Icon';
                    }
                    return (
                      <li key={program.id} className={styles.programsDropdownItem} data-program={program.id}>
                        <Link
                          href={`/programs/${program.id}`}
                          className={styles.dropdownLink + ' ' + styles.programsDropdownCard + (pathname === `/programs/${program.id}` ? ' ' + styles.active : '')}
                          onClick={closeAll}
                          role="menuitem"
                        >
                          {iconSrc && (
                            <span className={styles.programsDropdownIcon}>
                              <Image src={iconSrc} width={28} height={28} alt={iconAlt} />
                            </span>
                          )}
                          <span className={styles.programsDropdownLabel}>{program.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/news"
                className={styles.navLink}
                aria-current={pathname === '/news' ? 'page' : undefined}
                onClick={closeAll}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/partners"
                className={styles.navLink}
                aria-current={pathname === '/partners' ? 'page' : undefined}
                onClick={closeAll}
              >
                Partners
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={styles.navLink}
                aria-current={pathname === '/contact' ? 'page' : undefined}
                onClick={closeAll}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
