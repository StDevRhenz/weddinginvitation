import React from 'react';
import { useInView } from '../hooks/useInView';
import styles from './SectionReveal.module.css';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
}

const SectionReveal: React.FC<Props> = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${styles[direction]} ${inView ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default SectionReveal;
