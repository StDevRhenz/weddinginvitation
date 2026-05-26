import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import SectionReveal from './SectionReveal';
import Divider from './Divider';
import styles from './CountdownSection.module.css';

const CountdownSection: React.FC = () => {
  const { days, hours, minutes, seconds } = useCountdown();

  const units = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Seconds' },
  ];

  return (
    <section className={styles.section} id="countdown">
      <SectionReveal>
        <p className={styles.tag}>counting down to forever</p>
        <h2 className={styles.title}>Our Big Day</h2>
      </SectionReveal>

      {/* <Divider /> */}

      <SectionReveal delay={200}>
        <div className={styles.grid}>
          {units.map(({ value, label }, i) => (
            <div key={label} className={styles.unit} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={styles.number}>{String(value).padStart(2, '0')}</div>
              <div className={styles.label}>{label}</div>
              {i < units.length - 1 && <span className={styles.colon}>:</span>}
            </div>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal delay={400}>
        <p className={styles.dateText}>Saturday, June 6 · 2026 · 4:00 PM</p>
      </SectionReveal>
    </section>
  );
};

export default CountdownSection;
