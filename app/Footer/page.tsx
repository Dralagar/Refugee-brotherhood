"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/Footer.module.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import Image from 'next/image';

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
              <a href="tel:+254111449564" className={styles.contactLink}>+254 111449564</a>
            </div>
          </div>
          <div className={styles.icons}>
            <a href="https://www.facebook.com/refugeebrotherhood" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF className={styles.icon} style={{width:24, height:24}} /></a>
            <a href="https://x.com/br_refugee" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <span className={styles.icon} style={{width:24, height:24, display:'inline-flex', alignItems:'center', justifyContent:'center'}}>
                <Image src="/images/X logo.png" alt="X (formerly Twitter) Logo - Refugee Brotherhood" width={24} height={24} style={{objectFit: 'contain', width:24, height:24}} />
              </span>
            </a>
            <a href="https://www.instagram.com/refugeebrotherhood" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className={styles.icon} style={{width:24, height:24}} /></a>
            <a href="https://www.youtube.com/@refugeebrotherhood" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube className={styles.icon} style={{width:24, height:24}} /></a>
            <a href="https://ke.linkedin.com/company/refugee-brotherhood" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <span className={styles.icon} style={{width:24, height:24, display:'inline-flex', alignItems:'center', justifyContent:'center'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
              </span>
            </a>
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