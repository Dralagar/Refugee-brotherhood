"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
          onClick={() => setIsOpen(false)}
        >
          <li>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li>
            <Link href="/programs" className={styles.navLink}>
              Programs
            </Link>
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