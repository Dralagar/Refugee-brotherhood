"use client"
import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
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
            <li>Home</li>
            <li>Contact</li>
            <li>Programs</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Get Involved</h4>
          <ul>
            <li>Alumni</li>
            <li>Partners</li>
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