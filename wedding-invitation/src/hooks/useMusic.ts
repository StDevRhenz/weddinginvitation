import { useState, useRef, useEffect, useCallback } from 'react';
import { Howl } from 'howler';

export function useMusic(src?: string) {
  const audioRef = useRef<Howl | null>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src) {
      audioRef.current = null;
      setReady(false);
      setPlaying(false);
      setError(false);
      return;
    }

    setReady(false);
    setPlaying(false);
    setError(false);

    const audio = new Howl({
      src: [src],
      loop: true,
      volume: 0.35,
      html5: true,
      preload: true,
      onload: () => {
        setReady(true);
        setError(false);
      },
      onloaderror: () => {
        setReady(false);
        setError(true);
      },
      onplay: () => {
        setPlaying(true);
        setError(false);
      },
      onpause: () => setPlaying(false),
      onstop: () => setPlaying(false),
      onplayerror: () => {
        setPlaying(false);
        setError(true);
      },
    });

    audioRef.current = audio;
    return () => {
      audio.stop();
      audio.unload();
      audioRef.current = null;
    };
  }, [src]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || error) return;
    if (audio.playing()) {
      audio.pause();
      setPlaying(false);
      return;
    }

    audio.play();
    setPlaying(true);
  }, [playing]);

  const tryAutoplay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || playing || error) return;
    audio.play();
    setPlaying(true);
  }, [playing, error]);

  return { playing, toggle, ready, error, tryAutoplay };
}
