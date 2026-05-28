import React, { useState } from 'react';
import { ATTIRE_SWATCHES } from '../utils/constants';
import SectionReveal from './SectionReveal';
import Divider from './Divider';
import styles from './AttireSection.module.css';
import girlsImage from '../assets/girls.png';
import boysImage from '../assets/boys.png';

const MISTAKES = [
  { icon: '🎨', text: 'using too many strong colors' },
  { icon: '◐',  text: 'creating harsh contrast' },
  { icon: '🌸', text: 'overcrowding florals' },
  { icon: '☁️', text: 'losing the soft, airy feel' },
];

const AttireSection: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

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
        <div className={styles.paletteWrap}>
          <div className={styles.legend}>
            {ATTIRE_SWATCHES.map((s, i) => (
              <button
                key={s.name}
                className={`${styles.legendItem} ${active === i ? styles.legendActive : ''}`}
                onClick={() => setActive(active === i ? null : i)}
              >
                <span className={styles.legendDot} style={{ background: s.hex }} />
                <span className={styles.legendName}>{s.name}</span>
              </button>
            ))}
          </div>
        </div>
      </SectionReveal>

      <Divider />

      <SectionReveal delay={350}>
        <div className={styles.outfitGrid}>
          <div className={styles.outfitCard}>
            <img
              src={boysImage}
              alt="Gentlemen attire guide — pastel semi-formal"
              className={styles.outfitImageOutside}
              loading="lazy"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <p className={styles.outfitLabel}>For the Gentlemen</p>
          </div>
          <div className={styles.outfitCard}>
            <img
              src={girlsImage}
              alt="Ladies attire guide — pastel semi-formal"
              className={styles.outfitImageOutside}
              loading="lazy"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <p className={styles.outfitLabel}>For the Ladies</p>
          </div>
        </div>
      </SectionReveal>

      {/* ── Mistakes section ── */}
      <Divider />

      <SectionReveal delay={450}>
        <div className={styles.mistakesWrap}>
          <p className={styles.mistakesTag}>common</p>
          <h3 className={styles.mistakesTitle}>mistakes to avoid ✦</h3>

          <ul className={styles.mistakesList}>
            {MISTAKES.map((item) => (
              <li key={item.text} className={styles.mistakeItem}>
                <span className={styles.mistakeIcon}>{item.icon}</span>
                <span className={styles.mistakeText}>{item.text}</span>
              </li>
            ))}
          </ul>

          <p className={styles.mistakesFooter}>
            keep it
            <span className={styles.mistakesFooterBold}> light, soft,</span>
            <span className={styles.mistakesFooterBold}>and balanced</span> 🩶
          </p>
        </div>
      </SectionReveal>
    </section>
  );
};

export default AttireSection;