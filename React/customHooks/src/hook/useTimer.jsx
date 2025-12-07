// useTimer.js
import { useState, useEffect, useRef } from 'react';

export const useTimer = (start = 0) => {
  const [time, setTime] = useState(start);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => setTime(0);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return { time, startTimer, stopTimer, resetTimer };
};
