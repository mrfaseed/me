import React, { useState, useEffect, useRef } from 'react';

const LOAD_DURATION = 2800;  // ms to reach 100%
const HOLD_DURATION = 500;   // ms to hold at 100% before implode
const IMPLODE_DURATION = 700; // ms for implode animation

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // loading | filled | imploding | done
  const rafRef = useRef(null);
  const startRef = useRef(null);

  // Animate progress counter with requestAnimationFrame
  useEffect(() => {
    startRef.current = performance.now();

    const tick = (now) => {
      const elapsed = now - startRef.current;
      const raw = Math.min(elapsed / LOAD_DURATION, 1);
      // Ease-out cubic for a natural deceleration feel
      const eased = 1 - Math.pow(1 - raw, 3);
      setProgress(Math.round(eased * 100));

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setPhase('filled');
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Phase transitions: filled → imploding → done
  useEffect(() => {
    let timer;
    if (phase === 'filled') {
      timer = setTimeout(() => setPhase('imploding'), HOLD_DURATION);
    } else if (phase === 'imploding') {
      timer = setTimeout(() => {
        setPhase('done');
        onComplete();
      }, IMPLODE_DURATION);
    }
    return () => clearTimeout(timer);
  }, [phase, onComplete]);

  // Lock body scroll while loader is visible
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (phase === 'done') return null;

  // Fill level: 0% → translate(140) (below view), 100% → translate(-10) (fully filled)
  const fillY = 140 - (progress / 100) * 150;

  return (
    <div className={`loader-screen ${phase === 'imploding' ? 'loader-exit' : ''}`}>
      {/* Subtle ambient glow behind text */}
      <div className="loader-glow" />

      <div className="loader-center">
        <svg
          className="loader-text-svg"
          viewBox="0 0 600 120"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <clipPath id="faseed-clip">
              <text
                x="300"
                y="95"
                textAnchor="middle"
                fontSize="110"
                fontWeight="800"
                fontFamily="Outfit, sans-serif"
              >
                FASEED
              </text>
            </clipPath>
            <linearGradient id="liq-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>

          {/* Text outline — always visible as a ghost frame */}
          <text
            x="300"
            y="95"
            textAnchor="middle"
            fontSize="110"
            fontWeight="800"
            fontFamily="Outfit, sans-serif"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.5"
          >
            FASEED
          </text>

          {/* Liquid fill — clipped to the text shape */}
          <g clipPath="url(#faseed-clip)">
            <g
              className="loader-fill-group"
              style={{ transform: `translateY(${fillY}px)` }}
            >
              {/* Primary wave */}
              <path
                className="loader-wave loader-wave-1"
                d="M0 8 Q37.5 0,75 8 Q112.5 16,150 8 Q187.5 0,225 8 Q262.5 16,300 8 Q337.5 0,375 8 Q412.5 16,450 8 Q487.5 0,525 8 Q562.5 16,600 8 Q637.5 0,675 8 Q712.5 16,750 8 Q787.5 0,825 8 Q862.5 16,900 8 Q937.5 0,975 8 Q1012.5 16,1050 8 Q1087.5 0,1125 8 Q1162.5 16,1200 8 L1200 200 L0 200 Z"
                fill="url(#liq-grad)"
              />
              {/* Secondary wave — slightly offset rhythm */}
              <path
                className="loader-wave loader-wave-2"
                d="M0 6 Q50 0,100 6 Q150 12,200 6 Q250 0,300 6 Q350 12,400 6 Q450 0,500 6 Q550 12,600 6 Q650 0,700 6 Q750 12,800 6 Q850 0,900 6 Q950 12,1000 6 Q1050 0,1100 6 Q1150 12,1200 6 L1200 200 L0 200 Z"
                fill="url(#liq-grad)"
                opacity="0.6"
              />
            </g>
          </g>
        </svg>

        {/* Loading percentage indicator */}
        <p className="loader-pct">Loading {progress}%</p>
      </div>
    </div>
  );
};

export default Loader;
