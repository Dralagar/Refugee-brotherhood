"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setAboutDropdownOpen(false);
        setProgramsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Reset on route change
  useEffect(() => {
    setIsOpen(false);
    setAboutDropdownOpen(false);
    setProgramsDropdownOpen(false);
  }, [pathname]);

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

  const navigateToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string
  ) => {
    e.preventDefault();
    closeAll();
    if (!pathname.startsWith("/about")) {
      router.push(`/about#${section}`);
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logoImage}>
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={100}
            height={50}
            priority
          />
        </Link>

        <button
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <ul className={`${styles.navLinks} ${isOpen ? styles.navActive : ""}`}>
          <li className={styles.dropdown} ref={dropdownRef}>
            <button
              className={styles.navLink}
              onClick={toggleAboutDropdown}
              aria-expanded={aboutDropdownOpen}
            >
              About
              <span
                className={`${styles.dropdownIcon} ${
                  aboutDropdownOpen ? styles.open : ""
                }`}
              >
                ▼
              </span>
            </button>
            {aboutDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <a
                    href="#mission"
                    className={styles.dropdownLink}
                    onClick={(e) => navigateToSection(e, "mission")}
                  >
                    Our Mission
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className={styles.dropdownLink}
                    onClick={(e) => navigateToSection(e, "team")}
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#impact"
                    className={styles.dropdownLink}
                    onClick={(e) => navigateToSection(e, "impact")}
                  >
                    Our Impact
                  </a>
                </li>
                <li>
                  <a
                    href="#partners"
                    className={styles.dropdownLink}
                    onClick={(e) => navigateToSection(e, "partners")}
                  >
                    Partners
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className={styles.dropdown}>
            <button
              className={styles.navLink}
              onClick={toggleProgramsDropdown}
              aria-expanded={programsDropdownOpen}
            >
              Programs
              <span
                className={`${styles.dropdownIcon} ${
                  programsDropdownOpen ? styles.open : ""
                }`}
              >
                ▼
              </span>
            </button>
            {programsDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link
                    href="/programs/livelihood"
                    className={
                      pathname.startsWith('/programs/livelihood')
                        ? `${styles.dropdownLink} ${styles.active}`
                        : styles.dropdownLink
                    }
                    onClick={closeAll}
                  >
                    Livelihood
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programs/psychosocial"
                    className={
                      pathname.startsWith('/programs/psychosocial')
                        ? `${styles.dropdownLink} ${styles.active}`
                        : styles.dropdownLink
                    }
                    onClick={closeAll}
                  >
                    Psychosocial
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programs/peace"
                    className={
                      pathname.startsWith('/programs/peace')
                        ? `${styles.dropdownLink} ${styles.active}`
                        : styles.dropdownLink
                    }
                    onClick={closeAll}
                  >
                    Peace Building
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programs/advocacy"
                    className={
                      pathname.startsWith('/programs/advocacy')
                        ? `${styles.dropdownLink} ${styles.active}`
                        : styles.dropdownLink
                    }
                    onClick={closeAll}
                  >
                    Advocacy
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/news" className={styles.navLink} onClick={closeAll}>
              News & Stories
            </Link>
          </li>
          <li>
            <Link href="/donate" className={styles.navLink} onClick={closeAll}>
              Donate
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink} onClick={closeAll}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
