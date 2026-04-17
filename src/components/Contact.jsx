import React from 'react';

const Contact = () => {
  return (
    <>
      {/* Call to Action — Premium Redesign */}
      <section
        id="contact"
        className="relative reveal overflow-hidden rounded-3xl border border-white/[0.06]"
      >
        {/* Animated gradient background */}
        <div className="cta-bg absolute inset-0 pointer-events-none" />

        {/* Floating gradient orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none cta-orb cta-orb-1" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[120px] pointer-events-none cta-orb cta-orb-2" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none cta-orb cta-orb-3" />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        {/* Content */}
        <div className="relative z-10 p-12 md:p-20 lg:p-28 text-center">

          {/* Eyebrow tag */}
          <div className="cta-reveal cta-reveal-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">Available for opportunities</span>
          </div>

          {/* Heading */}
          <h2 className="cta-reveal cta-reveal-2 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]">
            Let's build
            <br />
            <span className="cta-gradient-text">something cool.</span>
          </h2>

          {/* Description */}
          <p className="cta-reveal cta-reveal-3 text-base md:text-lg text-gray-400 max-w-lg mx-auto mt-6 leading-relaxed">
            Are you looking for a passionate and dedicated junior developer for your team? Let's connect.
          </p>

          {/* Email Button */}
          <div className="cta-reveal cta-reveal-4 mt-10">
            <a
              href="mailto:faseedmohamed6@gmail.com"
              className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-base transition-all duration-300 cta-email-btn overflow-hidden"
            >
              {/* Shine sweep */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              <span className="material-symbols-rounded text-xl relative z-10">mail</span>
              <span className="relative z-10">Email Me</span>
            </a>
          </div>

          {/* Social Icons — GitHub & LinkedIn */}
          <div className="cta-reveal cta-reveal-5 flex items-center justify-center gap-4 mt-8">
            {/* GitHub */}
            <a
              href="https://github.com/mrfaseed"
              target="_blank"
              rel="noreferrer"
              className="group relative w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/mrfaseed"
              target="_blank"
              rel="noreferrer"
              className="group relative w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 hover:scale-110 hover:shadow-[0_0_25px_rgba(10,102,194,0.2)]"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-[#0A66C2] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

        </div>
      </section>

      {/* Super Unique Skills Section */}
      <div className="mt-16 md:mt-24 flex flex-col justify-center overflow-hidden reveal w-full z-20 relative">
        <div className="text-center mb-12">
          <h3 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-3">Expertise</h3>
          <div className="relative inline-block group">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              My Skills
            </h2>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500 group-hover:w-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl mx-auto px-4 md:px-0">
          {[
            { name: "Kotlin", icon: "data_object", color: "text-primary", borderColor: "group-hover:border-primary/50", glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]" },
            { name: "Compose", icon: "widgets", color: "text-secondary", borderColor: "group-hover:border-secondary/50", glow: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]" },
            { name: "Android", icon: "smartphone", color: "text-green-400", borderColor: "group-hover:border-green-400/50", glow: "group-hover:shadow-[0_0_30px_rgba(74,222,128,0.15)]" },
            { name: "Firebase", icon: "local_fire_department", color: "text-orange-500", borderColor: "group-hover:border-orange-500/50", glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]" },
            { name: "Room DB", icon: "storage", color: "text-indigo-400", borderColor: "group-hover:border-indigo-400/50", glow: "group-hover:shadow-[0_0_30px_rgba(129,140,248,0.15)]" },
            { name: "Java", icon: "coffee", color: "text-red-400", borderColor: "group-hover:border-red-400/50", glow: "group-hover:shadow-[0_0_30px_rgba(248,113,113,0.15)]" },
            { name: "Git", icon: "account_tree", color: "text-orange-400", borderColor: "group-hover:border-orange-400/50", glow: "group-hover:shadow-[0_0_30px_rgba(251,146,60,0.15)]" },
            { name: "UI/UX", icon: "palette", color: "text-pink-400", borderColor: "group-hover:border-pink-400/50", glow: "group-hover:shadow-[0_0_30px_rgba(244,114,182,0.15)]" },
          ].map((skill, index) => (
            <div 
              key={index}
              className={`group relative bento-card p-6 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-500 hover:-translate-y-2 bg-[#121217]/40 border border-white/5 ${skill.borderColor} ${skill.glow} overflow-hidden rounded-2xl`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Decorative background glow that activates on hover */}
              <div className={`absolute inset-0 bg-current ${skill.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}></div>
              
              {/* Shine effect that moves across on hover */}
              <div className="absolute inset-0 origin-left -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>
              
              {/* Icon Container */}
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-black/50 border border-white/10 group-hover:border-transparent transition-colors duration-500 z-10 group-hover:shadow-inner">
                {/* Rotating gradient ring */}
                <div className={`absolute inset-0 rounded-full border-2 border-transparent border-t-current opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-1000 ease-in-out ${skill.color}`}></div>
                
                {/* Pulsing glow inside ring */}
                <div className={`absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-20 group-hover:animate-pulse transition-opacity duration-500 ${skill.color}`}></div>

                <span className={`material-symbols-rounded text-3xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 drop-shadow-md z-20 ${skill.color}`}>
                  {skill.icon}
                </span>
              </div>

              <span className="font-bold text-white/70 group-hover:text-white transition-colors duration-500 tracking-wide z-10 text-sm md:text-base">
                {skill.name}
              </span>
              
              {/* Progress bar line filling up */}
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden z-10 mt-1">
                <div className={`h-full w-0 group-hover:w-full bg-current ${skill.color} transition-all duration-1000 ease-out`} style={{ transitionDelay: '100ms' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
