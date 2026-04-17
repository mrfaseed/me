import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <>
      {/* Projects Showcase Section */}
      <section id="projects" className="space-y-12 pt-12">
        <div className="flex items-end justify-between reveal">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold">Featured Projects.</h2>
            <p className="text-textMuted mt-2 text-lg">Apps I've built while exploring Android Dev.</p>
          </div>
          <a href="https://github.com/mrfaseed" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10">
            View GitHub <span className="material-symbols-rounded text-lg">arrow_outward</span>
          </a>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Project 1 */}
          <div className="bento-card flex flex-col h-[450px] group reveal" onMouseMove={handleMouseMove}>
            <div className="h-[250px] w-full overflow-hidden relative bg-[#1c1c24] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              <span className="material-symbols-rounded text-7xl text-white/20 group-hover:scale-125 transition-transform duration-700">task_alt</span>
            </div>
            <div className="p-8 bento-content flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Sports Vhnsnc</h3>
                  <p className="text-textMuted mt-1">Indoor stadium membership management system <br /> (real time project used by college <a className="text-primary" href="https://vhnsnc.edu.in/">VHNSNC</a>)</p>
                </div>
                <Link to="/project/sports-vhnsnc" className="w-10 h-10 rounded-full bg-surfaceBorder flex items-center justify-center text-white group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all">
                  <span className="material-symbols-rounded">arrow_outward</span>
                </Link>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-primary">flutter</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono">mysqli</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono">php</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono">dart</span>
                </div>
                <Link to="/project/sports-vhnsnc" className="text-xs font-mono text-primary hover:text-white transition-colors flex items-center gap-1 flex-shrink-0">
                  View More <span className="material-symbols-rounded text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bento-card flex flex-col h-[450px] group reveal" style={{ transitionDelay: '100ms' }} onMouseMove={handleMouseMove}>
            <div className="h-[250px] w-full overflow-hidden relative bg-[#1c1c24] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent"></div>
              <span className="material-symbols-rounded text-7xl text-white/20 group-hover:scale-125 transition-transform duration-700">partly_cloudy_day</span>
            </div>
            <div className="p-8 bento-content flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Kare Transport tracking system</h3>
                  <p className="text-textMuted mt-1"> An real time android application for tracking the buses <br/> from home to college and college to home.           </p>
                </div>
                <Link to="/project/kare-transport" className="w-10 h-10 rounded-full bg-surfaceBorder flex items-center justify-center text-white group-hover:bg-secondary group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all">
                  <span className="material-symbols-rounded">arrow_outward</span>
                </Link>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-secondary">Jetpack Compose</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono">Firebase</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono">IOT</span>
                </div>
                <Link to="/project/kare-transport" className="text-xs font-mono text-secondary hover:text-white transition-colors flex items-center gap-1 flex-shrink-0">
                  View More <span className="material-symbols-rounded text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bento-card flex flex-col h-[450px] group reveal" onMouseMove={handleMouseMove}>
            <div className="h-[250px] w-full overflow-hidden relative bg-[#1c1c24] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent"></div>
              <span className="material-symbols-rounded text-7xl text-white/20 group-hover:scale-125 transition-transform duration-700">forum</span>
            </div>
            <div className="p-8 bento-content flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Soil Monitoring System</h3>
                  <p className="text-textMuted mt-1">an android application for monitoring the soil moisture</p>
                </div>
                <Link to="/project/soil-monitoring" className="w-10 h-10 rounded-full bg-surfaceBorder flex items-center justify-center text-white group-hover:bg-accent group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all">
                  <span className="material-symbols-rounded">arrow_outward</span>
                </Link>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-accent">Kotlin</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono">Firebase</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono">IOT</span>
                </div>
                <Link to="/project/soil-monitoring" className="text-xs font-mono text-accent hover:text-white transition-colors flex items-center gap-1 flex-shrink-0">
                  View More <span className="material-symbols-rounded text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Open Source / More */}
          <div className="bento-card flex flex-col items-center justify-center h-[450px] text-center p-8 group reveal hover:bg-surfaceBorder/30" style={{ transitionDelay: '100ms' }} onMouseMove={handleMouseMove}>
            <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-rounded text-4xl">code</span>
            </div>
            <h3 className="text-2xl font-bold text-white">More on GitHub</h3>
            <p className="text-textMuted mt-2 mb-8 max-w-sm">I am constantly pushing experiments, university assignments, and practice apps here.</p>
            <a href="https://github.com/mrfaseed" className="bg-white text-black px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all flex items-center gap-2">
              View Repositories <span className="material-symbols-rounded">arrow_forward</span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default Projects;
