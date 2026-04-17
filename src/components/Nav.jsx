import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="ambient-glow"></div>

      {/* Navigation Island */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 floating-nav px-4 md:px-10 py-3 md:py-4 rounded-2xl md:rounded-full flex items-center justify-between w-[92%] md:w-[90%] max-w-4xl shadow-2xl">
        
        {/* Logo */}
        <a href="/#home" className="font-bold text-xl tracking-tight text-white flex items-center gap-2">
          Faseed / Android
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
          <a href="/#projects" className="hover:text-white transition-colors">Work/projects</a>
          <a href="/#about" className="hover:text-white transition-colors">About</a>
          <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right Actions Desktop */}
        <div className="hidden md:flex items-center gap-3">
          {/* Cmd+K Search Button */}
          <button 
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
            className="group flex items-center gap-2 text-xs font-medium text-gray-400 bg-[#121217] border border-white/10 px-3 py-1.5 rounded-xl hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-white transition-all shadow-inner"
          >
            <span className="material-symbols-rounded text-[16px] group-hover:text-cyan-400 transition-colors">search</span>
            <span>Search</span>
            <kbd className="font-mono text-[10px] bg-white/5 text-gray-500 group-hover:text-cyan-400 px-1.5 py-0.5 rounded border border-white/5 transition-colors">Ctrl K</kbd>
          </button>

          <a href="/#contact" className="border border-white/10 bg-white/5 text-white px-5 py-1.5 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all">
            Let's Talk
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          id="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 bg-white/5 border border-white/10 rounded-xl z-[60]"
          aria-expanded={isMenuOpen}
          aria-label="Toggle mobile menu"
          aria-controls="mobile-menu"
        >
          <span className={`w-5 h-0.5 bg-white transition-all duration-300 transform ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} id="bar-1"></span>
          <span className={`w-5 h-0.5 bg-white transition-all duration-300 transform ${isMenuOpen ? 'opacity-0' : ''}`} id="bar-2"></span>
          <span className={`w-5 h-0.5 bg-white transition-all duration-300 transform ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} id="bar-3"></span>
        </button>
      </nav>

      {/* Clean Mobile Navigation */}
      <div 
        id="mobile-menu" 
        className={`fixed inset-0 z-40 bg-[#0a0a0c]/98 backdrop-blur-xl flex flex-col items-center justify-center transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center gap-8 text-2xl font-medium text-white">
          <a href="/#home" onClick={() => setIsMenuOpen(false)} className="mobile-link hover:text-blue-400 transition-colors">Home</a>
          <a href="/#projects" onClick={() => setIsMenuOpen(false)} className="mobile-link hover:text-teal-400 transition-colors">Projects</a>
          <a href="/#about" onClick={() => setIsMenuOpen(false)} className="mobile-link hover:text-purple-400 transition-colors">About</a>
          <a href="/#contact" onClick={() => setIsMenuOpen(false)} className="mobile-link hover:text-blue-400 transition-colors">Contact</a>
          <a href="/#contact" onClick={() => setIsMenuOpen(false)} className="mobile-link mt-6 px-8 py-3 rounded-full border border-white/20 text-lg hover:bg-white hover:text-black transition-all">
            Let's Talk
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
