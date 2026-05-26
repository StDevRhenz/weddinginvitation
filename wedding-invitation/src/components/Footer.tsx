import React from 'react';
import { WEDDING } from '../utils/constants';
import SectionReveal from './SectionReveal';
import Divider from './Divider';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <Divider />
    <SectionReveal direction="fade">
      <p className={styles.closing}>With Love &amp; Warm Wishes</p>
      <h2 className={styles.names}>{WEDDING.groom} &amp; {WEDDING.bride}</h2>
      <p className={styles.date}>June 6, 2026</p>
    </SectionReveal>

    <SectionReveal delay={300} direction="fade">
      <div className={styles.hearts}>
        {['♡', '♡', '♡'].map((h, i) => (
          <span key={i} className={styles.heart} style={{ animationDelay: `${i * 0.4}s` }}>{h}</span>
        ))}
      </div>
    </SectionReveal>

    <div className={styles.creditRow}>
      <p className={styles.credit}>
        Made by Love: <a href="https://www.facebook.com/rhenzprince.ganotice/" className={styles.creditLink}>Rhenz</a>
      </p>
    </div>
  </footer>
);

export default Footer;
