import React from 'react';
import SectionReveal from './SectionReveal';
import Divider from './Divider';
import styles from './AttireSection.module.css';
import girlsImage from '../assets/girls.png';
import boysImage from '../assets/boys.png';

const AttireSection: React.FC = () => {
  return (
    <section className={styles.section} id="attire">
      <SectionReveal>
        <h2 className={styles.title}>Attire Guide</h2>
      </SectionReveal>

      <Divider />

      <SectionReveal delay={150}>
        <div className={styles.attireText}>
          <p className={styles.attireMain}>Mixed Pastel Casual</p>
          <p className={styles.attireSub}>Kindly wear semi-formal in pastel tones</p>
        </div>
      </SectionReveal>

      <SectionReveal delay={250}>
        <p className={styles.simpleNote}>Pastel semi-formal. Choose one of the image guides below.</p>
      </SectionReveal>

      <Divider />

      <SectionReveal delay={350}>
        <div className={styles.outfitGrid}>
          <div className={styles.outfitCard}>
            <div className={styles.outfitImageWrap}>
              <img
                src={girlsImage}
                alt="Ladies attire guide — pastel semi-formal"
                className={styles.outfitImage}
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const placeholder = (e.target as HTMLElement).nextSibling as HTMLElement;
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />
              <div className={styles.imagePlaceholder} style={{ display: 'none' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--blush-deep)" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
            </div>
            <p className={styles.outfitLabel}>For the Ladies</p>
          </div>

          <div className={styles.outfitCard}>
            <div className={styles.outfitImageWrap}>
              <img
                src={boysImage}
                alt="Gentlemen attire guide — pastel semi-formal"
                className={styles.outfitImage}
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const placeholder = (e.target as HTMLElement).nextSibling as HTMLElement;
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />
              <div className={styles.imagePlaceholder} style={{ display: 'none' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--pastel-blue)" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
            </div>
            <p className={styles.outfitLabel}>For the Gentlemen</p>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};

export default AttireSection;
