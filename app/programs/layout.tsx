import React from 'react';
import styles from '../styles/Programs.module.css';
import { baseMetadata } from './metadata';

export const metadata = baseMetadata;

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.programsLayout}>
      <div className={styles.programsContent}>
        <div className={styles.programsWrapper}>
          {children}
        </div>
      </div>
    </div>
  );
} 