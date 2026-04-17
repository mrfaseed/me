import React, { useEffect, useRef, useCallback } from 'react';

/**
 * ScrollEnergy — A premium, futuristic scroll progress indicator.
 *
 * Replaces the native scrollbar with:
 *   • A thin top-fixed neon progress line with eased lag
 *   • A glowing gradient (cyan → blue → purple) that reacts to scroll speed
 *   • Energy pulse waves on fast scrolling
 *   • Particle sparks trailing the progress edge
 *   • A glow burst when reaching the bottom
 */

// ─── Tiny particle class (GPU-friendly, canvas-based) ─────────────
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2 - 1;
    this.life = 1;
    this.decay = 0.02 + Math.random() * 0.03;
    this.size = 1 + Math.random() * 2;
    // Random color between cyan and purple
    this.hue = 180 + Math.random() * 100; // 180 (cyan) → 280 (purple)
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life -= this.decay;
    this.size *= 0.97;
  }
  draw(ctx) {
    if (this.life <= 0) return;
    ctx.save();
    ctx.globalAlpha = this.life * 0.8;
    ctx.fillStyle = `hsla(${this.hue}, 100%, 70%, 1)`;
    ctx.shadowBlur = 6;
    ctx.shadowColor = `hsla(${this.hue}, 100%, 60%, 0.8)`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

const ScrollEnergy = () => {
  const progressRef = useRef(0);      // actual scroll %
  const displayRef = useRef(0);       // eased display %
  const speedRef = useRef(0);         // current scroll speed (abs)
  const lastScrollRef = useRef(0);
  const rafRef = useRef(null);
  const particlesRef = useRef([]);

  const barRef = useRef(null);
  const glowRef = useRef(null);
  const pulseRef = useRef(null);
  const canvasRef = useRef(null);
  const burstRef = useRef(null);

  // ─── Scroll handler ─────────────────────────────────────────────
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const rawProgress = docHeight > 0 ? scrollTop / docHeight : 0;
    progressRef.current = Math.min(Math.max(rawProgress, 0), 1);

    // Scroll speed (clamped)
    const delta = Math.abs(scrollTop - lastScrollRef.current);
    speedRef.current = Math.min(delta / 10, 1); // 0 → 1
    lastScrollRef.current = scrollTop;

    // Spawn particles on movement
    if (delta > 2 && canvasRef.current) {
      const edgeX = progressRef.current * canvasRef.current.width;
      const count = Math.ceil(delta / 8);
      for (let i = 0; i < count && i < 5; i++) {
        particlesRef.current.push(new Particle(edgeX, canvasRef.current.height / 2));
      }
      // Cap particles
      if (particlesRef.current.length > 60) {
        particlesRef.current = particlesRef.current.slice(-60);
      }
    }
  }, []);

  // ─── Animation loop (requestAnimationFrame) ────────────────────
  const animate = useCallback(() => {
    // Ease display towards actual progress (smooth lag)
    const ease = 0.08;
    displayRef.current += (progressRef.current - displayRef.current) * ease;

    // Decay speed
    speedRef.current *= 0.92;

    const pct = displayRef.current * 100;
    const speed = speedRef.current;

    // ── 1. Progress bar (transform-based, GPU composited) ──────
    if (barRef.current) {
      barRef.current.style.transform = `scaleX(${displayRef.current})`;
    }

    // ── 2. Glow intensity reacts to speed ──────────────────────
    if (glowRef.current) {
      const glowOpacity = 0.4 + speed * 0.6;
      const glowBlur = 8 + speed * 20;
      const glowHeight = 3 + speed * 5;
      glowRef.current.style.opacity = glowOpacity;
      glowRef.current.style.filter = `blur(${glowBlur}px)`;
      glowRef.current.style.height = `${glowHeight}px`;
      glowRef.current.style.transform = `scaleX(${displayRef.current})`;
    }

    // ── 3. Pulse wave on fast scroll ───────────────────────────
    if (pulseRef.current) {
      if (speed > 0.3) {
        pulseRef.current.style.opacity = (speed - 0.3) * 1.4;
        pulseRef.current.style.transform = `scaleX(${displayRef.current}) scaleY(${1 + speed * 2})`;
      } else {
        pulseRef.current.style.opacity = 0;
      }
    }

    // ── 4. Bottom-reached glow burst ───────────────────────────
    if (burstRef.current) {
      if (progressRef.current > 0.995) {
        burstRef.current.style.opacity = '1';
        burstRef.current.style.transform = 'scaleX(1)';
      } else {
        burstRef.current.style.opacity = '0';
        burstRef.current.style.transform = 'scaleX(0.5)';
      }
    }

    // ── 5. Canvas particles ────────────────────────────────────
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      particlesRef.current = particlesRef.current.filter((p) => p.life > 0);
      particlesRef.current.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  // ─── Setup & teardown ──────────────────────────────────────────
  useEffect(() => {
    // Size canvas to viewport width
    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = 20; // small strip
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', handleScroll, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll, animate]);

  return (
    <>
      {/* ── Container: fixed at top, full-width ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '20px',
          zIndex: 9998,
          pointerEvents: 'none',
          overflow: 'visible',
        }}
      >
        {/* ── Bottom glow burst (scroll-to-end effect) ── */}
        <div
          ref={burstRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.6) 20%, rgba(99,102,241,0.8) 50%, rgba(168,85,247,0.6) 80%, transparent 100%)',
            filter: 'blur(10px)',
            opacity: 0,
            transformOrigin: 'left center',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
            willChange: 'opacity, transform',
          }}
        />

        {/* ── Pulse / energy wave layer ── */}
        <div
          ref={pulseRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '3px',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.4) 30%, rgba(168,85,247,0.5) 70%, transparent 100%)',
            filter: 'blur(6px)',
            opacity: 0,
            transformOrigin: 'left center',
            willChange: 'transform, opacity',
          }}
        />

        {/* ── Soft glow (speed-reactive) ── */}
        <div
          ref={glowRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '3px',
            background:
              'linear-gradient(90deg, rgba(6,182,212,0.8) 0%, rgba(59,130,246,0.9) 40%, rgba(168,85,247,0.8) 100%)',
            filter: 'blur(8px)',
            opacity: 0.4,
            transformOrigin: 'left center',
            willChange: 'transform, opacity, filter',
          }}
        />

        {/* ── Main progress bar ── */}
        <div
          ref={barRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '2.5px',
            background:
              'linear-gradient(90deg, #06b6d4 0%, #3b82f6 35%, #8b5cf6 65%, #a855f7 100%)',
            transformOrigin: 'left center',
            transform: 'scaleX(0)',
            willChange: 'transform',
            borderRadius: '0 2px 2px 0',
          }}
        />

        {/* ── Particle canvas overlay ── */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '20px',
            pointerEvents: 'none',
          }}
        />
      </div>
    </>
  );
};

export default ScrollEnergy;
