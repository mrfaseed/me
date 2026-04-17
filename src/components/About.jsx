import React from 'react';

const About = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="about" className="mt-16 md:mt-28 space-y-8">

      {/* Section Header */}
      <div className="text-center mb-4 reveal">
        <h3 className="text-sm font-bold tracking-[0.3em] text-secondary uppercase mb-3">About Me</h3>
        <div className="relative inline-block group">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Who I Am
          </h2>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-secondary to-primary rounded-full transition-all duration-500 group-hover:w-full" />
        </div>
      </div>

      {/* ── Row 1: Intro + Profile Snapshot ── */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

        {/* Main Intro — spans 3 cols */}
        <div
          className="bento-card md:col-span-3 p-8 md:p-10 flex flex-col justify-center space-y-5 reveal relative overflow-hidden"
          onMouseMove={handleMouseMove}
        >
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-[80px] pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center">
              <span className="material-symbols-rounded text-xl text-primary">waving_hand</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Hello, I'm Faseed</h3>
          </div>

          <p className="text-textMuted leading-relaxed">
            I'm a passionate <strong className="text-white font-medium">Android developer</strong> and final-year BCA student 
            who loves turning ideas into polished, performant mobile applications. I believe in writing 
            clean, maintainable code and creating interfaces that users genuinely enjoy.
          </p>
          <p className="text-textMuted leading-relaxed">
            My journey started with curiosity about how apps work behind the screen — and that curiosity 
            quickly turned into building real products used by real people. From campus utility apps to 
            IoT-powered monitoring systems, I enjoy solving problems that matter.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 pt-2">
            {[
              { value: '3+', label: 'Projects Shipped' },
              { value: '2+', label: 'Yrs Learning' },
              { value: '∞', label: 'Curiosity' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-textMuted mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column — Education + Location stacked */}
        <div className="md:col-span-2 flex flex-col gap-6">

          {/* Education Card */}
          <div
            className="bento-card p-7 flex flex-col items-center justify-center text-center space-y-3 reveal flex-1 relative overflow-hidden"
            onMouseMove={handleMouseMove}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent pointer-events-none" />
            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center rotate-3 border border-secondary/20 relative z-10">
              <span className="material-symbols-rounded text-3xl text-secondary">school</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-white">Education</h3>
              <p className="text-textMuted text-sm mt-1.5">Bachelor of Computer Application</p>
              <p className="text-textMuted text-sm">(BCA)</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                <p className="text-secondary font-mono text-xs font-medium">2023 — 2026</p>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div
            className="bento-card p-7 flex items-center gap-5 reveal flex-1 relative overflow-hidden"
            style={{ transitionDelay: '100ms' }}
            onMouseMove={handleMouseMove}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent pointer-events-none" />
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center border border-accent/20 flex-shrink-0 relative z-10">
              <span className="material-symbols-rounded text-2xl text-accent">insights</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-base font-bold text-white">Beyond Development</h3>
              <p className="text-textMuted text-sm mt-0.5">I think in systems — performance, scalability, and long-term impact.</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Row 2: What I Do + Philosophy ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* What I Do */}
        <div
          className="bento-card p-8 md:p-10 space-y-6 reveal relative overflow-hidden"
          style={{ transitionDelay: '50ms' }}
          onMouseMove={handleMouseMove}
        >
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-primary/8 to-transparent rounded-tr-[80px] pointer-events-none" />

          <h3 className="text-xl font-bold flex items-center gap-3 text-white">
            <span className="material-symbols-rounded text-primary">build</span>
            What I Do
          </h3>

          <div className="space-y-4">
            {[
              {
                icon: 'phone_android',
                title: 'Native Android Development',
                desc: 'Kotlin, Jetpack Compose, MVVM architecture, Room DB',
                color: 'text-primary',
                bg: 'bg-primary/10',
                border: 'border-primary/15',
              },
              {
                icon: 'local_fire_department',
                title: 'Backend & Cloud',
                desc: 'Firebase Auth, Firestore, Realtime Database, Cloud Functions',
                color: 'text-orange-400',
                bg: 'bg-orange-400/10',
                border: 'border-orange-400/15',
              },
              {
                icon: 'memory',
                title: 'IoT Integration',
                desc: 'Sensor data, ESP32, real-time monitoring dashboards',
                color: 'text-green-400',
                bg: 'bg-green-400/10',
                border: 'border-green-400/15',
              },
              {
                icon: 'palette',
                title: 'UI/UX Design',
                desc: 'Material Design 3, clean layouts, smooth animations',
                color: 'text-accent',
                bg: 'bg-accent/10',
                border: 'border-accent/15',
              },
            ].map((item) => (
              <div key={item.title} className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/[0.02] transition-colors duration-300">
                <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center border ${item.border} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <span className={`material-symbols-rounded text-lg ${item.color}`}>{item.icon}</span>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{item.title}</p>
                  <p className="text-textMuted text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Approach / Philosophy */}
        <div
          className="bento-card p-8 md:p-10 space-y-6 reveal relative overflow-hidden"
          style={{ transitionDelay: '150ms' }}
          onMouseMove={handleMouseMove}
        >
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-secondary/8 to-transparent rounded-br-[80px] pointer-events-none" />

          <h3 className="text-xl font-bold flex items-center gap-3 text-white">
            <span className="material-symbols-rounded text-secondary">lightbulb</span>
            My Approach
          </h3>

          <div className="space-y-5">
            {[
              {
                title: 'Build, Ship, Learn',
                desc: 'I believe in learning by doing. Every project I ship teaches me something new — and I ship often.',
                icon: 'rocket_launch',
                color: 'text-secondary',
              },
              {
                title: 'User-First Always',
                desc: "If the user doesn't love it, the code doesn't matter. I obsess over smooth UX and intuitive flows.",
                icon: 'favorite',
                color: 'text-pink-400',
              },
              {
                title: 'Clean Code Enthusiast',
                desc: 'Readable, well-structured code matters. I follow SOLID principles and write code my future self can understand.',
                icon: 'code',
                color: 'text-primary',
              },
            ].map((item, i) => (
              <div key={item.title} className="relative pl-6 border-l-2 border-white/10 hover:border-secondary/40 transition-colors duration-300">
                <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-surface border-2 border-white/20 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary/60" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`material-symbols-rounded text-base ${item.color}`}>{item.icon}</span>
                  <p className="font-semibold text-white text-sm">{item.title}</p>
                </div>
                <p className="text-textMuted text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Mini quote */}
          <div className="mt-4 pt-5 border-t border-white/5">
            <p className="text-textMuted/60 text-xs italic leading-relaxed">
              "The best way to predict the future is to build it." — I live by this.
            </p>
          </div>
        </div>
      </div>

      {/* ── Row 3: Seeking Opportunities — Full Width CTA ── */}
      <div
        className="bento-card p-8 md:p-12 reveal relative overflow-hidden !bg-gradient-to-r from-primary/[0.06] via-surface to-secondary/[0.06]"
        style={{ transitionDelay: '200ms' }}
        onMouseMove={handleMouseMove}
      >
        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-[1.5rem] pointer-events-none" style={{
          background: 'linear-gradient(90deg, rgba(59,130,246,0.15), transparent 30%, transparent 70%, rgba(20,184,166,0.15))',
        }} />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="material-symbols-rounded text-3xl text-primary">person_search</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-3">
            <h3 className="text-2xl font-bold text-white">Seeking Opportunities</h3>
            <p className="text-textMuted leading-relaxed">
              As a student, I am in a state of rapid learning. I may not have years of enterprise experience, but
              I am incredibly fast at picking up new frameworks, reading documentation, and building functional
              software from scratch.
            </p>
            <p className="text-textMuted leading-relaxed">
              I am actively seeking <strong className="text-white font-medium">junior roles and internships</strong> where 
              I can write clean code, learn from experienced mentors, and contribute to real-world products.
            </p>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              Let's Connect
              <span className="material-symbols-rounded text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
