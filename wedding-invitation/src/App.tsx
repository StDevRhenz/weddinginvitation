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

const App: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const { playing, toggle, ready, error, tryAutoplay } = useMusic(celesteMusic);

  const handleOpen = useCallback(() => {
    setOpened(true);
    tryAutoplay();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  }, [tryAutoplay]);
// ds
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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
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
