import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import styles from './FloralBackground.module.css';

const FloralBackground: React.FC = () => {
  const petals = useMemo(
    () =>
      Array.from({ length: 10 }, (_, index) => {
        const palette = ['#f2c4ce', '#c9b8e8', '#f5c9a8', '#b8d4b8', '#b8d4e8', '#e8a0b0'];
        return {
          id: index,
          left: `${(index * 100) / 16}%`,
          size: 10 + (index % 4) * 2,
          duration: 30 + (index % 5) * 3,
          delay: (index % 6) * 2.2,
          drift: (index % 2 === 0 ? 1 : -1) * (8 + (index % 4) * 3),
          opacity: 0.1 + (index % 4) * 0.035,
          color: palette[index % palette.length],
          start: -18 - (index % 4) * 4,
        };
      }),
    [],
  );

  const sparkles = useMemo(
    () =>
      Array.from({ length: 6 }, (_, index) => ({
        id: index,
        left: `${14 + (index * 12)}%`,
        top: `${18 + (index % 3) * 20}%`,
        size: 2 + (index % 3),
        duration: 8 + (index % 4) * 1.1,
        delay: index * 1.2,
        opacity: 0.12 + (index % 3) * 0.05,
      })),
    [],
  );

  return (
    <div className={styles.root} aria-hidden="true">
      <motion.div
        className={styles.ambientGlow}
        animate={{ opacity: [0.08, 0.14, 0.1], scale: [1, 1.03, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={styles.ambientGlowSecondary}
        animate={{ opacity: [0.06, 0.12, 0.08], x: [0, 6, 0], y: [0, -5, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className={styles.petalLayer}>
        {petals.map(petal => (
          <motion.span
            key={petal.id}
            className={styles.petal}
            style={{ left: petal.left, top: `${petal.start}vh`, width: `${petal.size}px`, height: `${petal.size + 6}px`, opacity: petal.opacity, background: petal.color }}
            animate={{
              y: ['-10vh', '110vh'],
              x: [0, petal.drift, petal.drift * 0.15],
              rotate: [0, 180, 360],
              scale: [0.92, 1.04, 0.96],
              opacity: [0, petal.opacity, petal.opacity * 0.75, 0],
            }}
            transition={{ duration: petal.duration, delay: petal.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className={styles.sparkleLayer}>
        {sparkles.map(sparkle => (
          <motion.span
            key={sparkle.id}
            className={styles.sparkle}
            style={{ left: sparkle.left, top: sparkle.top, width: `${sparkle.size}px`, height: `${sparkle.size}px`, opacity: sparkle.opacity }}
            animate={{ opacity: [0.08, sparkle.opacity, 0.12], scale: [0.6, 1.25, 0.75], rotate: [0, 180, 360] }}
            transition={{ duration: sparkle.duration, delay: sparkle.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <motion.svg
        className={styles.cornerTL}
        viewBox="0 0 200 200"
        fill="none"
        animate={{ x: [0, 8, 0], y: [0, -10, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ellipse cx="30" cy="60" rx="18" ry="28" fill="#f2c4ce" opacity="0.35" transform="rotate(-30 30 60)" />
        <ellipse cx="60" cy="30" rx="18" ry="28" fill="#c9b8e8" opacity="0.3" transform="rotate(20 60 30)" />
        <ellipse cx="80" cy="70" rx="14" ry="22" fill="#f5c9a8" opacity="0.3" transform="rotate(-10 80 70)" />
        <ellipse cx="20" cy="100" rx="12" ry="20" fill="#b8d4b8" opacity="0.28" transform="rotate(15 20 100)" />
        <circle cx="50" cy="50" r="6" fill="#c9a96e" opacity="0.2" />
        <circle cx="75" cy="25" r="4" fill="#e8a0b0" opacity="0.25" />
      </motion.svg>
      <motion.svg
        className={styles.cornerBR}
        viewBox="0 0 200 200"
        fill="none"
        animate={{ x: [0, -8, 0], y: [0, 10, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ellipse cx="170" cy="140" rx="18" ry="28" fill="#f2c4ce" opacity="0.35" transform="rotate(30 170 140)" />
        <ellipse cx="140" cy="170" rx="18" ry="28" fill="#c9b8e8" opacity="0.3" transform="rotate(-20 140 170)" />
        <ellipse cx="120" cy="130" rx="14" ry="22" fill="#f5c9a8" opacity="0.3" transform="rotate(10 120 130)" />
        <circle cx="150" cy="150" r="6" fill="#c9a96e" opacity="0.2" />
      </motion.svg>
      <motion.svg
        className={styles.cornerTR}
        viewBox="0 0 200 200"
        fill="none"
        animate={{ x: [0, -6, 0], y: [0, -8, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ellipse cx="160" cy="50" rx="16" ry="26" fill="#b8d4e8" opacity="0.3" transform="rotate(25 160 50)" />
        <ellipse cx="180" cy="90" rx="12" ry="20" fill="#f2c4ce" opacity="0.28" transform="rotate(-15 180 90)" />
        <circle cx="155" cy="30" r="5" fill="#c9b8e8" opacity="0.3" />
      </motion.svg>
      <motion.svg
        className={styles.cornerBL}
        viewBox="0 0 200 200"
        fill="none"
        animate={{ x: [0, 6, 0], y: [0, 8, 0], rotate: [0, -1.5, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ellipse cx="40" cy="160" rx="16" ry="26" fill="#b8d4b8" opacity="0.3" transform="rotate(-25 40 160)" />
        <ellipse cx="20" cy="120" rx="12" ry="20" fill="#c9b8e8" opacity="0.28" transform="rotate(15 20 120)" />
        <circle cx="60" cy="175" r="5" fill="#f5c9a8" opacity="0.3" />
      </motion.svg>
    </div>
  );
};

export default FloralBackground;
