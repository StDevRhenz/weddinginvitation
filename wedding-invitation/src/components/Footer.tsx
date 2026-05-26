import React from 'react';
import { WEDDING } from '../utils/constants';
import SectionReveal from './SectionReveal';
import Divider from './Divider';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <Divider />
    <SectionReveal direction="fade">
      <p className={styles.closing}>with love &amp; gratitude</p>
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
  </footer>
);

export default Footer;
