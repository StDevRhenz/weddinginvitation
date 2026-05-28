import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Envelope.module.css';
import MusicToggle from './MusicToggle';

interface Props {
  onOpen: () => void;
  playing: boolean;
  ready: boolean;
  error: boolean;
  onToggleMusic: () => void;
}

const Envelope: React.FC<Props> = ({ onOpen, playing, onToggleMusic }) => {
  const [phase, setPhase] = useState<'idle' | 'opening' | 'done'>('idle');

  const flowers = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        left: `${(index * 100) / 18}%`,
        size: 10 + (index % 4) * 2,
        duration: 18 + (index % 5) * 2.6,
        delay: (index % 6) * 1.2,
        drift: (index % 2 === 0 ? 1 : -1) * (12 + (index % 3) * 6),
        opacity: 0.18 + (index % 4) * 0.06,
      })),
    [],
  );

  const handleClick = () => {
    if (phase !== 'idle') return;
    setPhase('opening');
    setTimeout(() => {
      setPhase('done');
      setTimeout(onOpen, 250);
    }, 1600);
  };

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className={styles.scene}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className={styles.fallingFlowers} aria-hidden="true">
            {flowers.map(flower => (
              <motion.span
                key={flower.id}
                className={styles.flower}
                style={{
                  left: flower.left,
                  fontSize: `${flower.size}px`,
                  opacity: flower.opacity,
                }}
                animate={{
                  y: ['-15vh', '115vh'],
                  x: [0, flower.drift, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: flower.duration,
                  delay: flower.delay,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                ❀
              </motion.span>
            ))}
          </div>

          {/* <div className={styles.watermark} aria-hidden="true">Rhenz po hehe</div> */}

          <motion.button
            type="button"
            className={styles.inviteButton}
            onClick={handleClick}
            whileHover={phase === 'idle' ? { scale: 1.01 } : {}}
            whileTap={phase === 'idle' ? { scale: 0.99 } : {}}
            initial={{ opacity: 0, y: 24 }}
            animate={phase === 'opening' ? { opacity: 0.6, scale: 0.985 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            role="button"
            aria-label="Open wedding invitation"
          >
            <motion.div
              className={styles.inviteCopy}
              animate={phase === 'opening' ? { scale: 0.99 } : { scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <p className={styles.kicker}>THE</p>
              <p className={styles.title}>CIVIL WEDDING</p>
              <p className={styles.offLine}>--OF--</p>
              <p className={styles.names}>MARVIN & ALYSSA</p>
              <p className={styles.invited}>YOU&apos;RE INVITED</p>
              <motion.p
                className={styles.tapText}
                animate={phase === 'idle' ? { opacity: [0.35, 1, 0.35] } : { opacity: 0.55 }}
                transition={phase === 'idle' ? { duration: 3.4, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.45, ease: 'easeInOut' }}
              >
                OPEN THE INVITATION
              </motion.p>
            </motion.div>
          </motion.button>

          {/* ── Music toggle ── */}
          <MusicToggle playing={playing} onToggle={onToggleMusic} className={styles.musicBtn} />

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Envelope;
