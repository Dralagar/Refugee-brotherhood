"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  const pathname = usePathname(); 

  const isActive = (path: string) => pathname === path;

  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.column}>
          <h3>Connect with us!</h3>
          <div className={styles.icons}>
            <FaFacebookF className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaInstagram className={styles.icon} />
            <FaYoutube className={styles.icon} />
          </div>
          <p>Stay informed with news updates</p>
          <form>
            <input type="email" placeholder="Enter email" className={styles.emailInput} />
            <button type="submit" className={styles.subscribeButton}>Sign Up</button>
          </form>
        </div>
        <div className={styles.column}>
          <h4>About Us</h4>
          <ul>
            <li>
              <Link href="/about" className={isActive('/about') ? styles.activeLink : styles.navLink}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className={isActive('/contact') ? styles.activeLink : styles.navLink}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/programs" className={isActive('/programs') ? styles.activeLink : styles.navLink}>
                Programs
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Get Involved</h4>
          <ul>
            <li>
              <Link href="/alumni" className={isActive('/alumni') ? styles.activeLink : styles.navLink}>
                Alumni
              </Link>
            </li>
            <li>
              <Link href="/partners" className={isActive('/partners') ? styles.activeLink : styles.navLink}>
                Partners
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Refugee Brotherhood, All rights reserved 2024</p>
        <p>Built by Dralagar George /ReactNowDev</p>
      </div>
    </footer>
  );
};

export default Footer;