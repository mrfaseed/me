import React from 'react';

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
          <a href="#" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10">
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
                  <h3 className="text-2xl font-bold text-white">TaskFlow App</h3>
                  <p className="text-textMuted mt-1">Personal Productivity & Habit Tracker</p>
                </div>
                <a href="#" className="w-10 h-10 rounded-full bg-surfaceBorder flex items-center justify-center text-white group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all">
                  <span className="material-symbols-rounded">arrow_outward</span>
                </a>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-primary">Kotlin</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono">Room Database</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono">MVVM</span>
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
                  <h3 className="text-2xl font-bold text-white">Weather Cast</h3>
                  <p className="text-textMuted mt-1">Real-time dynamic weather forecasting</p>
                </div>
                <a href="#" className="w-10 h-10 rounded-full bg-surfaceBorder flex items-center justify-center text-white group-hover:bg-secondary group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all">
                  <span className="material-symbols-rounded">arrow_outward</span>
                </a>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-secondary">Jetpack Compose</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono">Retrofit APIs</span>
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
                  <h3 className="text-2xl font-bold text-white">UniChat</h3>
                  <p className="text-textMuted mt-1">Campus messaging platform prototype</p>
                </div>
                <a href="#" className="w-10 h-10 rounded-full bg-surfaceBorder flex items-center justify-center text-white group-hover:bg-accent group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all">
                  <span className="material-symbols-rounded">arrow_outward</span>
                </a>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-accent">Firebase Auth</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono">Firestore</span>
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
            <a href="#" className="bg-white text-black px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all flex items-center gap-2">
              View Repositories <span className="material-symbols-rounded">arrow_forward</span>
            </a>
          </div>

        </div>
      </section>

      {/* About / Education Bento */}
      <section id="about" className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bento-card col-span-1 p-8 text-center flex flex-col items-center justify-center space-y-4 reveal" onMouseMove={handleMouseMove}>
          <div className="w-16 h-16 bg-surfaceBorder rounded-2xl flex items-center justify-center rotate-3 border border-white/10">
            <span className="material-symbols-rounded text-4xl text-secondary">school</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Education</h3>
            <p className="text-textMuted text-sm mt-2">Bachelor of engineering (BE)</p>
            <p className="text-primary font-mono text-xs mt-1">2026</p>
          </div>
        </div>

        <div className="bento-card md:col-span-2 p-8 md:p-12 flex flex-col justify-center space-y-4 reveal" style={{ transitionDelay: '100ms' }} onMouseMove={handleMouseMove}>
          <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
            <span className="material-symbols-rounded text-primary">person_search</span> Seeking Opportunities
          </h3>
          <p className="text-textMuted leading-relaxed">
            As a student, I am in a state of rapid learning. I may not have years of enterprise experience, but
            I am incredibly fast at picking up new frameworks, reading documentation, and building functional
            software from scratch.
          </p>
          <p className="text-textMuted leading-relaxed">
            I am actively seeking <strong className="text-white font-medium">junior roles and internships</strong>
            where I can write clean code, learn from experienced mentors, and contribute to real-world products.
          </p>
        </div>

      </section>
    </>
  );
};

export default Projects;
