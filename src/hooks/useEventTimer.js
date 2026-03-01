// src/hooks/useEventTimer.js
import { useState, useEffect, useCallback } from 'react';
import { EVENT_CONFIG } from '../config';

const EVENT_START = new Date(EVENT_CONFIG.startDate);
const EVENT_END = new Date(EVENT_CONFIG.endDate);

function computeTimerState() {
  const now = Date.now();
  const startMs = EVENT_START.getTime();
  const endMs = EVENT_END.getTime();

  // Phase 3 — ended
  if (now >= endMs) {
    return {
      phase: 'ended',
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      hoursRemaining: 0,
    };
  }

  // Phase 2 — live
  if (now >= startMs) {
    const elapsed = now - startMs;
    const totalSec = Math.floor(elapsed / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    const elapsedHours = elapsed / 3600000;
    return {
      phase: 'live',
      days: 0,
      hours: h,
      minutes: m,
      seconds: s,
      hoursRemaining: Math.max(0, 24 - Math.floor(elapsedHours)),
    };
  }

  // Phase 1 — countdown
  const diff = startMs - now;
  const totalSec = Math.floor(diff / 1000);
  const d = Math.floor(totalSec / 86400);
  const h = Math.floor((totalSec % 86400) / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;

  return {
    phase: 'countdown',
    days: d,
    hours: h,
    minutes: m,
    seconds: s,
    hoursRemaining: 0,
  };
}

export default function useEventTimer() {
  const [timer, setTimer] = useState(computeTimerState);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer(computeTimerState());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return timer;
}
