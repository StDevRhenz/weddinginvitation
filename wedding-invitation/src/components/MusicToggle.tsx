import React from 'react';
import styles from './MusicToggle.module.css';

interface Props {
  playing: boolean;
  onToggle: () => void;
  className?: string;
}

const MusicToggle: React.FC<Props> = ({ playing, onToggle, className }) => (
  <button
    className={`${styles.btn} ${className ?? ''} ${playing ? styles.active : ''}`}
    onClick={onToggle}
    aria-label={playing ? 'Pause music' : 'Play music'}
    title={playing ? 'Pause music' : 'Play music'}
  >
    <span className={styles.icon}>
      {playing ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16" rx="1"/>
          <rect x="14" y="4" width="4" height="16" rx="1"/>
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z"/>
        </svg>
      )}
    </span>
    <span className={styles.bars} aria-hidden="true">
      {[1,2,3,4].map(i => (
        <span key={i} className={`${styles.bar} ${playing ? styles.animated : ''}`} style={{ animationDelay: `${i * 0.1}s` }} />
      ))}
    </span>
  </button>
);

export default MusicToggle;
