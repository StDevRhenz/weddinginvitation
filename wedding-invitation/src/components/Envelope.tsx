import React, { useState } from 'react';
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

  const handleClick = () => {
    if (phase !== 'idle') return;
    setPhase('opening');
    setTimeout(() => {
      setPhase('done');
      setTimeout(onOpen, 500);
    }, 2200);
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
          {/* ── Envelope card ── */}
          <motion.div
            className={styles.envelopeWrap}
            onClick={handleClick}
            whileHover={phase === 'idle' ? { scale: 1.015, transition: { duration: 0.3 } } : {}}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            role="button"
            aria-label="Open wedding invitation"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && handleClick()}
          >
            {/* Main olive body */}
            <div className={styles.envBody}>

              {/* Linen texture overlay */}
              <div className={styles.texture} aria-hidden="true" />

              {/* ── Inside geometry (visible when flap is closed) ── */}
              {/* Left side shadow fold */}
              <div className={styles.sideLeft} aria-hidden="true" />
              {/* Right side shadow fold */}
              <div className={styles.sideRight} aria-hidden="true" />
              {/* Bottom V */}
              <div className={styles.bottomV} aria-hidden="true" />

              {/* ── Top flap – flips open ── */}
              <motion.div
                className={styles.flapWrap}
                style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
                animate={phase === 'opening' ? { rotateX: -175 } : { rotateX: 0 }}
                transition={{ duration: 1.3, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
              >
                {/* Front of flap */}
                <div className={styles.flapFront} />
                {/* Back of flap (shows when flipped) */}
                <div className={styles.flapBack} />
              </motion.div>

              {/* ── Wax seal sits on the flap fold ── */}
              <motion.div
                className={styles.seal}
                animate={
                  phase === 'opening'
                    ? { scale: 0, opacity: 0 }
                    : { scale: 1, opacity: 1 }
                }
                transition={{ duration: 0.22, ease: 'easeIn' }}
              >
                <svg viewBox="0 0 100 100" width="100" height="100">
                  {/* Scalloped edge */}
                  {Array.from({ length: 24 }).map((_, i) => {
                    const angle = (i / 24) * Math.PI * 2;
                    const r = 46;
                    const cx = 50 + r * Math.cos(angle);
                    const cy = 50 + r * Math.sin(angle);
                    return <circle key={i} cx={cx} cy={cy} r="4.5" fill="#e8e0ca" />;
                  })}
                  {/* Main circle */}
                  <circle cx="50" cy="50" r="40" fill="#eae2cc" />
                  {/* Inner ring */}
                  <circle cx="50" cy="50" r="34" fill="none" stroke="#c8bfa0" strokeWidth="1.2" />
                  {/* Initials */}
                  <text
                    x="50" y="57"
                    textAnchor="middle"
                    fill="#3a4a2e"
                    fontSize="20"
                    fontFamily="Cinzel, serif"
                    fontWeight="500"
                    letterSpacing="5"
                  >A|W</text>
                </svg>
              </motion.div>

              {/* ── Card that slides up from inside on open ── */}
              <motion.div
                className={styles.innerCard}
                animate={
                  phase === 'opening'
                    ? { y: '-60%', opacity: 1 }
                    : { y: '0%', opacity: 0 }
                }
                transition={{ duration: 1.1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className={styles.innerCardSub}>Wedding Invitation</p>
                <p className={styles.innerCardNames}>Alyssa &amp; Marvin</p>
                <p className={styles.innerCardDate}>June 6, 2026</p>
              </motion.div>

            </div>
          </motion.div>

          {/* ── Hint ── */}
          <motion.div
            className={styles.hintRow}
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'idle' ? 1 : 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <span className={styles.hintLine} />
            <span className={styles.hintText}>tap to open</span>
            <span className={styles.hintLine} />
          </motion.div>

          {/* ── Music toggle ── */}
          <MusicToggle playing={playing} onToggle={onToggleMusic} className={styles.musicBtn} />

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Envelope;
