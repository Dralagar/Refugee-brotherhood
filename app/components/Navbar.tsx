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
    <div className={styles.topContactLeft}>
      <span className={styles.topContactItem}><FaMapMarkerAlt /> Patanisho Kayole, Nairobi</span>
      <a href="mailto:info@refugeebrotherhood.org" className={styles.topContactItem}><FaEnvelope /> info@refugeebrotherhood.org</a>
      <a href="tel:+254794693898" className={styles.topContactItem}><FaPhone /> +254 794 693898</a>
    </div>
    <div className={styles.topContactRight}>
      <a href="https://facebook.com/refugeebrotherhood" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
      <a href="https://twitter.com/refugeebrother" target="_blank" rel="noopener noreferrer" aria-label="X"><XIcon /></a>
      <a href="https://instagram.com/refugeebrotherhood" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
      <a href="https://youtube.com/@refugeebrotherhood" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
      <a href="https://www.refugeebrotherhood.org/done" className={styles.donateButton} aria-label="Donate">
        Donate
      </a>
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
          <Link href="/" className={styles.logoImage} aria-label="Home">
            <Image
              src="/images/logo.jpg"
              alt="Refugee Brotherhood Logo"
              width={100}
              height={50}
              priority
            />
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

          <ul
            className={`${styles.navLinks} ${isOpen ? styles.navActive : ""}`}
            id="main-nav-links"
            role="menubar"
          >
            <li className={styles.dropdown} ref={aboutDropdownRef}>
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
                <ul className={styles.dropdownMenu} id="about-dropdown-menu" role="menu">
                  {aboutSections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`/about#${section.id}`}
                        className={styles.dropdownLink + (activeAboutSection === section.id ? ' ' + styles.active : '')}
                        onClick={(e) => {
                          e.preventDefault();
                          setAboutDropdownOpen(false);
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

            <li className={styles.dropdown} ref={programsDropdownRef}>
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
                  {programsList.map((program) => {
                    let iconSrc = '';
                    let iconAlt = '';
                    if (program.id === 'peace') { iconSrc = '/globe.svg'; iconAlt = 'Peace Icon'; }
                    if (program.id === 'advocacy') { iconSrc = '/window.svg'; iconAlt = 'Advocacy Icon'; }
                    if (program.id === 'livelihood') { iconSrc = '/file.svg'; iconAlt = 'Livelihood Icon'; }
                    if (program.id === 'psychosocial') { iconSrc = '/next.svg'; iconAlt = 'Psychosocial Icon'; }
                    return (
                      <li key={program.id} className={styles.programsDropdownItem}>
                        <Link
                          href={`/programs/${program.id}`}
                          className={styles.dropdownLink + ' ' + styles.programsDropdownCard + (pathname === `/programs/${program.id}` ? ' ' + styles.active : '')}
                          onClick={() => setProgramsDropdownOpen(false)}
                          role="menuitem"
                        >
                          {iconSrc && (
                            <span className={styles.programsDropdownIcon}>
                              <Image src={iconSrc} width={24} height={24} alt={iconAlt} />
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
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="/partners"
                className={styles.navLink}
                aria-current={pathname === '/partners' ? 'page' : undefined}
              >
                Partners
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={styles.navLink}
                aria-current={pathname === '/contact' ? 'page' : undefined}
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
