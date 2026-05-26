import React from 'react';
import styles from './FloralBackground.module.css';

const FloralBackground: React.FC = () => (
  <div className={styles.root} aria-hidden="true">
    {/* Floating petals */}
    {Array.from({ length: 12 }).map((_, i) => (
      <div key={i} className={`${styles.petal} ${styles[`p${i}`]}`} />
    ))}
    {/* Corner florals */}
    <svg className={styles.cornerTL} viewBox="0 0 200 200" fill="none">
      <ellipse cx="30" cy="60" rx="18" ry="28" fill="#f2c4ce" opacity="0.35" transform="rotate(-30 30 60)" />
      <ellipse cx="60" cy="30" rx="18" ry="28" fill="#c9b8e8" opacity="0.3" transform="rotate(20 60 30)" />
      <ellipse cx="80" cy="70" rx="14" ry="22" fill="#f5c9a8" opacity="0.3" transform="rotate(-10 80 70)" />
      <ellipse cx="20" cy="100" rx="12" ry="20" fill="#b8d4b8" opacity="0.28" transform="rotate(15 20 100)" />
      <circle cx="50" cy="50" r="6" fill="#c9a96e" opacity="0.2" />
      <circle cx="75" cy="25" r="4" fill="#e8a0b0" opacity="0.25" />
    </svg>
    <svg className={styles.cornerBR} viewBox="0 0 200 200" fill="none">
      <ellipse cx="170" cy="140" rx="18" ry="28" fill="#f2c4ce" opacity="0.35" transform="rotate(30 170 140)" />
      <ellipse cx="140" cy="170" rx="18" ry="28" fill="#c9b8e8" opacity="0.3" transform="rotate(-20 140 170)" />
      <ellipse cx="120" cy="130" rx="14" ry="22" fill="#f5c9a8" opacity="0.3" transform="rotate(10 120 130)" />
      <circle cx="150" cy="150" r="6" fill="#c9a96e" opacity="0.2" />
    </svg>
    <svg className={styles.cornerTR} viewBox="0 0 200 200" fill="none">
      <ellipse cx="160" cy="50" rx="16" ry="26" fill="#b8d4e8" opacity="0.3" transform="rotate(25 160 50)" />
      <ellipse cx="180" cy="90" rx="12" ry="20" fill="#f2c4ce" opacity="0.28" transform="rotate(-15 180 90)" />
      <circle cx="155" cy="30" r="5" fill="#c9b8e8" opacity="0.3" />
    </svg>
    <svg className={styles.cornerBL} viewBox="0 0 200 200" fill="none">
      <ellipse cx="40" cy="160" rx="16" ry="26" fill="#b8d4b8" opacity="0.3" transform="rotate(-25 40 160)" />
      <ellipse cx="20" cy="120" rx="12" ry="20" fill="#c9b8e8" opacity="0.28" transform="rotate(15 20 120)" />
      <circle cx="60" cy="175" r="5" fill="#f5c9a8" opacity="0.3" />
    </svg>
  </div>
);

export default FloralBackground;
