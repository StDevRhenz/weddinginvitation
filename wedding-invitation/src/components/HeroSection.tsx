import React from 'react';
import { WEDDING } from '../utils/constants';
import SectionReveal from './SectionReveal';
import Divider from './Divider';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => (
  <section className={styles.section} id="hero">
    <div className={styles.card}>
      {/* Inner border */}
      <div className={styles.innerBorder}>

        <SectionReveal direction="fade">
          <p className={styles.together}>Together with their families</p>
        </SectionReveal>

        <SectionReveal delay={100}>
          <p className={styles.joyfully}>joyfully invite you to celebrate the marriage of</p>
        </SectionReveal>

        <Divider />

        <SectionReveal delay={200}>
          <h1 className={styles.coupleLine}>
            {WEDDING.groom} <span className={styles.coupleAnd}>&amp;</span> {WEDDING.bride}
          </h1>
        </SectionReveal>

        <Divider />

        <SectionReveal delay={300}>
          <div className={styles.details}>
            <div className={styles.detailBlock}>
              <p className={styles.detailLabel}>The Ceremony</p>
              <p className={styles.detailValue}>Saturday</p>
              <p className={styles.detailBig}>June 6, 2026</p>
              <p className={styles.detailValue}>{WEDDING.time}</p>
            </div>

            <div className={styles.detailDivider} />

            <div className={styles.detailBlock}>
              <p className={styles.detailLabel}>The Venue</p>
              <p className={styles.detailBig}>{WEDDING.venue}</p>
              <p className={styles.detailAddress}>{WEDDING.venueAddress}</p>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={400}>
          <div className={styles.mapRow}>
            <a
              href={WEDDING.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapBtn}
              aria-label="Open venue in Google Maps"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              View on Google Maps
            </a>
          </div>
        </SectionReveal>

        <Divider label="with love" />

        <SectionReveal delay={500} direction="fade">
          <p className={styles.rsvpNote}>
            Your presence is the greatest gift.
          </p>
        </SectionReveal>

      </div>
    </div>
  </section>
);

export default HeroSection;
