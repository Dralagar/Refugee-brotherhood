"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';

const NavBar: React.FC = () => {


  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/"><img src="/images/logo.jpg" alt="Logo" /></Link>
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/programs">Programs</Link></li>
          <li><Link href="/news">News & Stories</Link></li>
          <li><Link href="/donate">Donate</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
