"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false);
        setProgramsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setAboutDropdownOpen(false);
    setProgramsDropdownOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAboutDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAboutDropdownOpen(!aboutDropdownOpen);
    setProgramsDropdownOpen(false);
  };

  const toggleProgramsDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setProgramsDropdownOpen(!programsDropdownOpen);
    setAboutDropdownOpen(false);
  };

  const closeAllDropdowns = () => {
    setAboutDropdownOpen(false);
    setProgramsDropdownOpen(false);
    setIsOpen(false);
  };

  const handleAboutLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    closeAllDropdowns();
    
    if (!pathname.startsWith('/about')) {
      router.push(`/about#${section}`);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleProgramLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    closeAllDropdowns();
    router.push(path);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoImage}>
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={100}
              height={50}
              priority
            />
          </Link>
        </div>
        <div
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <ul
          className={`${styles.navLinks} ${isOpen ? styles.navActive : ""}`}
        >
          <li className={styles.dropdown} ref={dropdownRef}>
            <div 
              className={`${styles.navLink} ${aboutDropdownOpen ? styles.active : ''}`}
              onClick={toggleAboutDropdown}
            >
              About
              <span className={`${styles.dropdownIcon} ${aboutDropdownOpen ? styles.open : ''}`}>
                ▼
              </span>
            </div>
            {aboutDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <a 
                    href="#mission" 
                    className={styles.dropdownLink}
                    onClick={(e) => handleAboutLinkClick(e, 'mission')}
                  >
                    Our Mission
                  </a>
                </li>
                <li>
                  <a 
                    href="#team" 
                    className={styles.dropdownLink}
                    onClick={(e) => handleAboutLinkClick(e, 'team')}
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a 
                    href="#impact" 
                    className={styles.dropdownLink}
                    onClick={(e) => handleAboutLinkClick(e, 'impact')}
                  >
                    Our Impact
                  </a>
                </li>
                <li>
                  <a 
                    href="#partners" 
                    className={styles.dropdownLink}
                    onClick={(e) => handleAboutLinkClick(e, 'partners')}
                  >
                    Partners
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className={styles.dropdown}>
            <div 
              className={`${styles.navLink} ${programsDropdownOpen ? styles.active : ''}`}
              onClick={toggleProgramsDropdown}
            >
              Programs
              <span className={`${styles.dropdownIcon} ${programsDropdownOpen ? styles.open : ''}`}>
                ▼
              </span>
            </div>
            {programsDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link 
                    href="/programs/livelihood" 
                    className={styles.dropdownLink}
                    onClick={(e) => handleProgramLinkClick(e, '/programs/livelihood')}
                  >
                    Livelihood Program
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/programs/psychosocial" 
                    className={styles.dropdownLink}
                    onClick={(e) => handleProgramLinkClick(e, '/programs/psychosocial')}
                  >
                    Psychosocial Support
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/programs/peace" 
                    className={styles.dropdownLink}
                    onClick={(e) => handleProgramLinkClick(e, '/programs/peace')}
                  >
                    Peace Building
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/programs/advocacy" 
                    className={styles.dropdownLink}
                    onClick={(e) => handleProgramLinkClick(e, '/programs/advocacy')}
                  >
                    Advocacy
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/news" className={styles.navLink}>
              News & Stories
            </Link>
          </li>
          <li>
            <Link href="/donate" className={styles.navLink}>
              Donate
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;