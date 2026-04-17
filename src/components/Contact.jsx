import React from 'react';

const Contact = () => {
  return (
    <>
      {/* Call to Action */}
      <section
        id="contact"
        className="bento-card !bg-gradient-to-br from-primary/20 via-background to-secondary/20 p-12 md:p-24 text-center space-y-8 reveal relative overflow-hidden border border-primary/20"
      >
        {/* Decorative blur blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/30 rounded-full blur-[100px] pointer-events-none"></div>

        <h2 className="text-5xl md:text-7xl font-bold tracking-tight relative z-10 text-white">
          Let's build
          <br />something cool.
        </h2>
        <p className="text-lg text-textMuted max-w-xl mx-auto relative z-10">
          Are you looking for a passionate and dedicated junior developer for your team? Let's connect.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 relative z-10">
          <a
            href="mailto:faseedmohamed6@gmail.com"
            className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform flex justify-center items-center gap-2"
          >
            <span className="material-symbols-rounded">mail</span> Email Me
          </a>
          <a
            href="#"
            className="w-full sm:w-auto bg-black/50 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors flex justify-center items-center gap-2 border border-white/20 backdrop-blur-md"
          >
            <span className="material-symbols-rounded">description</span> Download Resume
          </a>
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
