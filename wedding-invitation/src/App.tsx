import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloralBackground from './components/FloralBackground';
import Envelope from './components/Envelope';
import HeroSection from './components/HeroSection';
import CountdownSection from './components/CountdownSection';
import AttireSection from './components/AttireSection';
import Footer from './components/Footer';
import MusicToggle from './components/MusicToggle';
import { useMusic } from './hooks/useMusic';
import celesteMusic from './assets/Celeste.mp3';
import './App.css';

const scrollToTopSmooth = (duration = 1100) => {
  const startY = window.scrollY || window.pageYOffset;
  const startTime = performance.now();

  const easeInOutCubic = (t: number) => (
    t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2
  );

  const tick = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, startY * (1 - eased));

    if (progress < 1) {
      window.requestAnimationFrame(tick);
    }
  };

  window.requestAnimationFrame(tick);
};

const App: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const { playing, toggle, ready, error, tryAutoplay } = useMusic(celesteMusic);

  const handleOpen = useCallback(() => {
    setOpened(true);
    tryAutoplay();
    setTimeout(() => {
      scrollToTopSmooth(1200);
    }, 150);
  }, [tryAutoplay]);

  return (
    <div className="app">
      <FloralBackground />
      <Envelope
        onOpen={handleOpen}
        playing={playing}
        ready={ready}
        error={error}
        onToggleMusic={toggle}
      />
      <AnimatePresence>
        {opened && (
          <motion.main
            className="main-content"
            initial={{ opacity: 0, y: 40, scale: 0.995 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroSection />
            <CountdownSection />
            <AttireSection />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
      {opened && <MusicToggle playing={playing} onToggle={toggle} />}
    </div>
  );
};

export default App;
