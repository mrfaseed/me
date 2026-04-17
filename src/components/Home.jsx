import React, { useEffect, useRef, useState } from 'react';

const Home = ({ isLoaded }) => {
  const heroWaveRef = useRef(null);
  const heroGradientRef = useRef(null);
  const [animationsTriggered, setAnimationsTriggered] = useState(false);

  useEffect(() => {
    // Only trigger animations once, when loading completes
    if (!isLoaded || animationsTriggered) return;
    setAnimationsTriggered(true);

    // Hero Wave Animation — character-by-character reveal
    if (heroWaveRef.current) {
      const text = "Hi, I'm Faseed.";
      heroWaveRef.current.innerHTML = '';
      heroWaveRef.current.style.perspective = '600px';

      let charIndex = 0;
      for (const char of text) {
        if (char === ' ') {
          const space = document.createElement('span');
          space.className = 'char-space';
          heroWaveRef.current.appendChild(space);
        } else {
          const span = document.createElement('span');
          span.className = 'char';
          span.textContent = char;
          // Stagger: 50ms per character for smooth wave
          span.style.animationDelay = `${0.15 + charIndex * 0.05}s`;
          heroWaveRef.current.appendChild(span);
          charIndex++;
        }
      }
    }

    // Hero Gradient Flow Delay
    if (heroGradientRef.current) {
      requestAnimationFrame(() => {
        heroGradientRef.current.classList.add('animate-in');
      });
    }
  }, [isLoaded, animationsTriggered]);

  return (
    <section id="home" className="min-h-[75vh] flex flex-col justify-center relative reveal mt-[-2rem] md:mt-[-4rem]">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-primary/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none mix-blend-screen -z-10"></div>

      {/* Left Floating Background Icons */}
      <div className={`flex lg:flex absolute left-[2%] xl:left-[8%] top-[15%] opacity-10 animate-drift-left pointer-events-none text-white select-none home-entrance ${isLoaded ? 'entered' : ''}`} style={{ '--entrance-delay': '0.6s' }}>
        <span className="material-symbols-rounded text-[90px]">android</span>
      </div>
      <div className={`flex lg:flex absolute left-[8%] xl:left-[12%] top-[60%] opacity-5 animate-drift-left-slow pointer-events-none text-white select-none home-entrance ${isLoaded ? 'entered' : ''}`} style={{ '--entrance-delay': '0.8s' }}>
        <span className="material-symbols-rounded text-[70px]">smartphone</span>
      </div>
      <div className={`flex lg:flex absolute left-[1%] xl:left-[4%] top-[80%] opacity-[0.07] animate-drift-left pointer-events-none text-white select-none home-entrance ${isLoaded ? 'entered' : ''}`} style={{ '--entrance-delay': '1.0s' }}>
        <span className="material-symbols-rounded text-[110px]">code</span>
      </div>

      {/* Right Floating Background Icons */}
      <div className={`flex lg:flex absolute right-[5%] xl:right-[10%] top-[25%] opacity-[0.08] animate-drift-right pointer-events-none text-white select-none home-entrance ${isLoaded ? 'entered' : ''}`} style={{ '--entrance-delay': '0.7s' }}>
        <span className="material-symbols-rounded text-[100px]">widgets</span>
      </div>
      <div className={`flex lg:flex absolute right-[10%] xl:right-[15%] top-[65%] opacity-[0.06] animate-drift-right-slow pointer-events-none text-white select-none home-entrance ${isLoaded ? 'entered' : ''}`} style={{ '--entrance-delay': '0.9s' }}>
        <span className="material-symbols-rounded text-[80px]">developer_board</span>
      </div>
      <div className={`flex lg:flex absolute right-[2%] xl:right-[6%] top-[85%] opacity-5 animate-drift-right pointer-events-none text-white select-none home-entrance ${isLoaded ? 'entered' : ''}`} style={{ '--entrance-delay': '1.1s' }}>
        <span className="material-symbols-rounded text-[60px]">devices</span>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-8 md:space-y-10">

        <div className="space-y-2 md:space-y-4 lg:mt-20">
          <h1 ref={heroWaveRef} className="hero-wave text-5xl md:text-8xl lg:text-[7rem] font-bold tracking-tight leading-[1] md:leading-[0.9] text-white">
            Hi, I'm Faseed.
          </h1>
          <h2 ref={heroGradientRef} className="hero-gradient text-4xl md:text-7xl lg:text-[6rem] font-bold tracking-tight leading-[1] md:leading-[0.9] pb-2 md:pb-4">
            I build mobile apps.
          </h2>
        </div>

        <p className={`text-textMuted text-base md:text-xl max-w-2xl mx-auto leading-relaxed px-4 home-entrance ${isLoaded ? 'entered' : ''}`} style={{ '--entrance-delay': '1.2s' }}>
          I design and build smooth Android apps with real-world performance
        </p>

        <div className={`flex flex-col sm:flex-row items-center gap-4 md:gap-6 pt-4 home-entrance ${isLoaded ? 'entered' : ''}`} style={{ '--entrance-delay': '1.4s' }}>
          <a href="#projects" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            See what I've built <span className="material-symbols-rounded">arrow_downward</span>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white hover:text-accent font-bold transition-colors flex items-center gap-2">
            View GitHub <span className="material-symbols-rounded text-sm">open_in_new</span>
          </a>
        </div>
        <p className={`text-textMuted/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed px-4 home-entrance ${isLoaded ? 'entered' : ''}`} style={{ '--entrance-delay': '1.6s' }}>
          Real apps. Used by real people
        </p>
        <span className={`text-textMuted/50 text-xl animate-[bounce_2s_infinite] home-entrance ${isLoaded ? 'entered' : ''}`} style={{ '--entrance-delay': '1.8s' }}>
          ↓
        </span>
      </div>
    </section>
  );
};

export default Home;
