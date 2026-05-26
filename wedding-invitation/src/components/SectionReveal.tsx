import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './SectionReveal.module.css';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
}

const SectionReveal: React.FC<Props> = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const offset = {
    up: { x: 0, y: 42 },
    left: { x: -36, y: 0 },
    right: { x: 36, y: 0 },
    fade: { x: 0, y: 0 },
  }[direction];

  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce), (max-width: 520px)');
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  if (reduceMotion) {
    return (
      <div className={`${styles.reveal} ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`${styles.reveal} ${className}`}
      initial={{ opacity: 0, x: offset.x, y: offset.y, scale: 0.99 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.95, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;
