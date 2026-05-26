import React from 'react';
import styles from './Divider.module.css';

interface Props { label?: string; }

const Divider: React.FC<Props> = ({ label }) => (
  <div className={styles.divider} aria-hidden="true">
    <div className={styles.line} />
    {label ? (
      <span className={styles.label}>{label}</span>
    ) : (
      <svg className={styles.diamond} viewBox="0 0 24 24" width="16" height="16">
        <path d="M12 2L22 12L12 22L2 12Z" fill="var(--gold)" opacity="0.7" />
        <path d="M12 6L18 12L12 18L6 12Z" fill="var(--ivory)" />
        <path d="M12 9L15 12L12 15L9 12Z" fill="var(--gold)" opacity="0.5" />
      </svg>
    )}
    <div className={styles.line} />
  </div>
);

export default Divider;
