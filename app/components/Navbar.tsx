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
          <Link href="/" legacyBehavior>
            <a>
              <Image
                src="/images/logo.jpg"
                alt="Logo"
                width={100}
                height={50}
                className={styles.logoImage}
              />
            </a>
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
            <Link href="/about" legacyBehavior>
              <a className={styles.navLink}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/programs" legacyBehavior>
              <a className={styles.navLink}>Programs</a>
            </Link>
          </li>
          <li>
            <Link href="/news" legacyBehavior>
              <a className={styles.navLink}>News & Stories</a>
            </Link>
          </li>
          <li>
            <Link href="/donate" legacyBehavior>
              <a className={styles.navLink}>Donate</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a className={styles.navLink}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;