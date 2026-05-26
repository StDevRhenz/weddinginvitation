import { useState, useEffect } from 'react';
import type { CountdownTime } from '../types';
import { WEDDING_DATE } from '../utils/constants';

export function useCountdown(): CountdownTime {
  const calculate = (): CountdownTime => {
    const now = new Date().getTime();
    const target = WEDDING_DATE.getTime();
    const diff = Math.max(0, target - now);

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  };

  const [time, setTime] = useState<CountdownTime>(calculate);

  useEffect(() => {
    const timer = setInterval(() => setTime(calculate()), 1000);
    return () => clearInterval(timer);
  }, []);

  return time;
}
