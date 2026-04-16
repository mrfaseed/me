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
            href="mailto:hello@faseed.dev"
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

      {/* Focus / Skills Ribbon */}
      <div className="mt-12 md:mt-20 bento-card p-6 flex flex-col justify-center overflow-hidden reveal w-full z-20 relative bg-[#121217]/80">
        <div className="flex overflow-hidden relative w-full">
          <div className="flex gap-12 whitespace-nowrap animate-scroll items-center">
            <span className="text-2xl lg:text-3xl font-bold text-white/40 hover:text-white transition-colors cursor-default">Kotlin</span>
            <span className="material-symbols-rounded text-primary">trip_origin</span>
            <span className="text-2xl lg:text-3xl font-bold text-white/40 hover:text-white transition-colors cursor-default">Jetpack Compose</span>
            <span className="material-symbols-rounded text-secondary">trip_origin</span>
            <span className="text-2xl lg:text-3xl font-bold text-white/40 hover:text-white transition-colors cursor-default">Android Studio</span>
            <span className="material-symbols-rounded text-accent">trip_origin</span>
            <span className="text-2xl lg:text-3xl font-bold text-white/40 hover:text-white transition-colors cursor-default">Firebase</span>
            <span className="material-symbols-rounded text-primary">trip_origin</span>
            <span className="text-2xl lg:text-3xl font-bold text-white/40 hover:text-white transition-colors cursor-default">RoomDB</span>
            <span className="material-symbols-rounded text-secondary">trip_origin</span>
            {/* Duplicate for infinite scroll */}
            <span className="text-2xl lg:text-3xl font-bold text-white/40 hover:text-white transition-colors cursor-default">Kotlin</span>
            <span className="material-symbols-rounded text-primary">trip_origin</span>
            <span className="text-2xl lg:text-3xl font-bold text-white/40 hover:text-white transition-colors cursor-default">Jetpack Compose</span>
            <span className="material-symbols-rounded text-secondary">trip_origin</span>
            <span className="text-2xl lg:text-3xl font-bold text-white/40 hover:text-white transition-colors cursor-default">Android Studio</span>
            <span className="material-symbols-rounded text-accent">trip_origin</span>
            <span className="text-2xl lg:text-3xl font-bold text-white/40 hover:text-white transition-colors cursor-default">Firebase</span>
            <span className="material-symbols-rounded text-primary">trip_origin</span>
            <span className="text-2xl lg:text-3xl font-bold text-white/40 hover:text-white transition-colors cursor-default">RoomDB</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
