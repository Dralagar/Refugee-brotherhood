"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/Footer.module.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M17.53 3H21.5l-7.19 8.21L23 21h-6.18l-4.36-5.36L7.5 21H3.47l7.53-8.6L1 3h6.32l4.02 4.94L17.53 3zm-1.02 15.5h1.71l-5.19-6.38-1.37 1.57L16.51 18.5zm-9.2 0h1.7l2.1-2.5-2.8-3.44-3.01 5.94zm13.41-13h-1.62l-2.06 2.44 2.7 3.32 2.98-5.76zm-9.13 2.44L6.49 5.5H4.8l2.98 5.76 2.7-3.32zm1.34 1.65l-1.06 1.3 5.19 6.38 1.06-1.3-5.19-6.38z" />
  </svg>
);

const Footer: React.FC = () => {
  const pathname = usePathname(); 

  const isActive = (path: string) => pathname === path;

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.column}>
          <h3>Contact Us</h3>
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <span>Patanisho Kayole, Nairobi, Kenya</span>
            </div>
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.icon} />
              <a href="mailto:info@refugeebrotherhood.org" className={styles.contactLink}>info@refugeebrotherhood.org</a>
            </div>
            <div className={styles.contactItem}>
              <FaPhone className={styles.icon} />
              <a href="tel:+254794693898" className={styles.contactLink}>+254 794 693898</a>
            </div>
          </div>
          <div className={styles.icons}>
            <a href="https://facebook.com/refugeebrotherhood" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF className={styles.icon} /></a>
            <a href="https://twitter.com/refugeebrother" target="_blank" rel="noopener noreferrer" aria-label="X"><XIcon className={styles.icon} /></a>
            <a href="https://instagram.com/refugeebrotherhood" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className={styles.icon} /></a>
            <a href="https://youtube.com/@refugeebrotherhood" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube className={styles.icon} /></a>
          </div>
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
          <div className={styles.newsletterBox}>
            <p>Stay informed with news updates</p>
            <form>
              <input type="email" placeholder="Enter email" className={styles.emailInput} />
              <button type="submit" className={styles.subscribeButton}>Sign Up</button>
            </form>
            <span className={styles.privacyNote}>We respect your privacy. No spam, ever.</span>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Refugee Brotherhood, All rights reserved {currentYear}</p>
        <p>Built by Dralagar George /ReactNowDev</p>
      </div>
    </footer>
  );
};

export default Footer;