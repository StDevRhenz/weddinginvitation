import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Envelope.module.css';
import MusicToggle from './MusicToggle';
import { WEDDING } from '../utils/constants';

interface Props {
  onOpen: () => void;
  playing: boolean;
  ready: boolean;
  error: boolean;
  onToggleMusic: () => void;
}

const Envelope: React.FC<Props> = ({ onOpen, playing, ready, error, onToggleMusic }) => {
  const [phase, setPhase] = useState<'idle' | 'opening' | 'done'>('idle');

  const handleClick = () => {
    if (phase !== 'idle') return;
    setPhase('opening');
    setTimeout(() => {
      setPhase('done');
      setTimeout(onOpen, 600);
    }, 1800);
  };

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className={styles.scene}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
        >
          {/* Ambient glow */}
          <div className={styles.glow} aria-hidden="true" />

          {/* Title above envelope */}
          <motion.div
            className={styles.intro}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <p className={styles.introScript}>You’re invited</p>
          </motion.div>

          {/* Envelope wrapper */}
          <motion.div
            className={`${styles.envelope} ${phase === 'opening' ? styles.opening : ''}`}
            onClick={handleClick}
            whileHover={phase === 'idle' ? { y: -6, transition: { duration: 0.3 } } : {}}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
            role="button"
            aria-label="Open wedding invitation"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && handleClick()}
          >
            {/* Envelope body */}
            <div className={styles.envBody}>
              {/* Side triangles */}
              <div className={styles.triangleLeft} />
              <div className={styles.triangleRight} />
              {/* Bottom triangle */}
              <div className={styles.triangleBottom} />

              {/* Card peek */}
              <motion.div
                className={styles.cardPeek}
                animate={phase === 'opening' ? { y: -60, opacity: 1 } : { y: 0, opacity: 0.7 }}
                transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
              >
                <span className={styles.cardPeekText}>
                  {WEDDING.groom.split(' ')[0]} &amp; {WEDDING.bride.split(' ')[0]}
                </span>
              </motion.div>

              {/* Envelope liner pattern */}
              <div className={styles.liner} aria-hidden="true" />
            </div>

            {/* Flap */}
            <motion.div
              className={styles.flap}
              animate={phase === 'opening' ? { rotateX: -180 } : { rotateX: 0 }}
              transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
            >
              <div className={styles.flapFront} />
              <div className={styles.flapBack} />
            </motion.div>

            {/* Wax seal */}
            <motion.div
              className={styles.seal}
              animate={phase === 'opening' ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: phase === 'opening' ? 0 : 0 }}
            >
              <div className={styles.sealInner}>
                <svg viewBox="0 0 60 60" width="44" height="44">
                  <circle cx="30" cy="30" r="28" fill="#c9a96e" />
                  <circle cx="30" cy="30" r="24" fill="none" stroke="#fdf8f0" strokeWidth="1" opacity="0.6" />
                  <text x="30" y="27" textAnchor="middle" fill="#fdf8f0" fontSize="10" fontFamily="Cinzel, serif" letterSpacing="1">M</text>
                  <text x="30" y="38" textAnchor="middle" fill="#fdf8f0" fontSize="7" fontFamily="Cinzel, serif" letterSpacing="2">&amp;</text>
                  <text x="30" y="47" textAnchor="middle" fill="#fdf8f0" fontSize="10" fontFamily="Cinzel, serif" letterSpacing="1">S</text>
                </svg>
              </div>
            </motion.div>
          </motion.div>

          {/* Click hint */}
          <motion.div
            className={styles.hint}
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'idle' ? 1 : 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <span className={styles.hintDot} />
            <span className={styles.hintText}>tap to open</span>
            <span className={styles.hintDot} />
          </motion.div>

          <MusicToggle playing={playing} onToggle={onToggleMusic} className={styles.musicToggle} />

          <motion.p
            className={styles.musicStatus}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.4 }}
          >
          </motion.p>

          {/* Names below */}
          {/* <motion.div
            className={styles.namesBelow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
          >
            <p className={styles.namesScript}>{WEDDING.groom}</p>
            <p className={styles.namesAnd}>&amp;</p>
            <p className={styles.namesScript}>{WEDDING.bride}</p>
          </motion.div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Envelope;
