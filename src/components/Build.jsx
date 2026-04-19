import React, { useEffect } from 'react';
import useSEO from '../hooks/useSEO';

const Build = () => {
  useSEO({
    title: "How I Built This - Faseed",
    description: "A look under the hood of my portfolio. Stack, architecture, performance, and philosophy.",
    url: "https://mohamedfaseed.vercel.app/build"
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-24 text-gray-300">
      
      {/* Background typographic watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl pointer-events-none select-none -z-10 flex justify-center overflow-hidden opacity-[0.03]">
        <h1 className="text-[10rem] md:text-[14rem] font-bold font-mono tracking-tighter whitespace-nowrap">
          /DEV
        </h1>
      </div>

      {/* Hero Section (2-Column) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        
        {/* Left: Title */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest">For Developers</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">How I Built This</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-transparent rounded-full"></div>
        </div>

        {/* Right: Visuals */}
        <div className="hidden md:flex relative h-[250px] w-full justify-center items-center pointer-events-none">
          {/* Faint animated grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-80"></div>
          
          {/* Slow moving gradient orb */}
          <div className="absolute w-[250px] h-[250px] bg-gradient-to-tr from-cyan-500/20 to-blue-500/10 rounded-full blur-[60px] animate-[spin_10s_linear_infinite] mix-blend-screen"></div>
          
          {/* Code snippet blur */}
          <div className="relative border border-white/10 bg-[#0a0a0c]/40 rounded-xl p-5 backdrop-blur-xl transform rotate-[3deg] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex gap-1.5 mb-4 opacity-40">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <pre className="font-mono text-xs leading-relaxed text-cyan-100/60 font-medium">
              <code className="block"><span className="text-pink-400/80">const</span> <span className="text-blue-300/90">tech</span> = {'{'}</code>
              <code className="block ml-4">framework: <span className="text-green-300/80">'React'</span>,</code>
              <code className="block ml-4">styling: <span className="text-green-300/80">'Tailwind'</span>,</code>
              <code className="block ml-4">mindset: <span className="text-green-300/80">'Performance'</span></code>
              <code className="block">{'}'};</code>
              <code className="block mt-2 opacity-50">{'// Native rendering pipeline'}</code>
            </pre>
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/5 to-transparent rounded-xl pointer-events-none"></div>
          </div>
        </div>

      </div>

      {/* Body Content - Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative">
        
        {/* Sticky Sidebar Index */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="sticky top-32 flex flex-col gap-6 text-xs font-mono text-gray-500 tracking-widest">
            <a href="#stack" className="hover:text-cyan-400 transition-colors">01 // STACK</a>
            <a href="#architecture" className="hover:text-cyan-400 transition-colors">02 // ARCHITECTURE</a>
            <a href="#ui" className="hover:text-cyan-400 transition-colors">03 // UI & INTERACTION</a>
            <a href="#performance" className="hover:text-cyan-400 transition-colors">04 // PERFORMANCE</a>
            <a href="#challenges" className="hover:text-cyan-400 transition-colors">05 // CHALLENGES</a>
            <a href="#philosophy" className="hover:text-cyan-400 transition-colors">06 // PHILOSOPHY</a>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-9 space-y-24 font-sans leading-relaxed max-w-2xl">
          
          <section>
            <p className="text-lg text-gray-400 font-medium">
              I built this site to take complete control over my digital identity. Relying on templates or standard platforms felt restrictive. I needed a space where every interaction, layout shift, and performance metric was a deliberate choice I made.
            </p>
          </section>

          <section id="stack" className="scroll-mt-32">
            <h2 className="text-xl font-semibold text-white mb-6">Stack</h2>
            <ul className="space-y-4">
              <li><span className="text-cyan-400 font-mono text-sm mr-2">React</span> For component encapsulation and state-driven UI.</li>
              <li><span className="text-cyan-400 font-mono text-sm mr-2">Tailwind CSS</span> For rapid, inline styling without context-switching. It scales well when utility classes are managed cleanly.</li>
              <li><span className="text-cyan-400 font-mono text-sm mr-2">Vite</span> Because Webpack is too slow. Instant HMR keeps the momentum going.</li>
              <li><span className="text-cyan-400 font-mono text-sm mr-2">Vercel</span> Edge routing, seamless deployments, and zero configuration needed to get production-ready.</li>
            </ul>
          </section>

          <section id="architecture" className="scroll-mt-32">
            <h2 className="text-xl font-semibold text-white mb-6">Architecture Thinking</h2>
            <p className="mb-4">
              The structure is deliberately flat. I kept components strictly isolated—data stays in custom hooks, and presentation stays in JSX. 
            </p>
            
            {/* Visual Proof */}
            <div className="my-6 p-5 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-[11px] md:text-xs text-cyan-100/60 inline-block shadow-lg">
              <code className="block"><span className="text-pink-400/80">import</span> {'{'} Suspense, lazy {'}'} <span className="text-pink-400/80">from</span> <span className="text-green-300/80">'react'</span>;</code>
              <code className="block mt-2 text-gray-500">{'// Lazy loaded routes for faster initial paint'}</code>
              <code className="block"><span className="text-pink-400/80">const</span> ProjectDetail = <span className="text-blue-300/90">lazy</span>(() =&gt; <span className="text-blue-300/90">import</span>(<span className="text-green-300/80">'./ProjectDetail'</span>));</code>
            </div>

            <p>
              I avoided massive animation libraries where possible. Most transitions are native CSS or rely on lightweight Framer Motion wrappers. Over-engineering a portfolio is a trap. I wanted a lightweight bundle, not a dependency nightmare.
            </p>
          </section>

          <section id="ui" className="scroll-mt-32">
            <h2 className="text-xl font-semibold text-white mb-6">UI & Interaction</h2>
            <p className="mb-4">
              The design relies heavily on "feel". The custom cursor, the command palette, the glassmorphic hover states—they exist to provide immediate visual feedback. 
            </p>
            <p>
              Some ideas in this design were inspired by platforms like ReactBits and developers like Brittany Chiang. I genuinely appreciate their work—it pushed me to explore better design and interaction patterns. Everything here, though, is built and implemented from scratch in my own way.
            </p>
          </section>

          <section id="performance" className="scroll-mt-32">
            <h2 className="text-xl font-semibold text-white mb-6">Performance Mindset</h2>
            <p className="mb-4">
              Speed is a feature. I removed third-party font requests and self-hosted variable fonts locally to prevent layout shifts. Analytics are deferred until the user interacts with the page.
            </p>

            {/* Performance Metrics */}
            <div className="flex flex-wrap gap-4 my-8">
              <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-white/[0.02] border border-white/5 min-w-[120px]">
                <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">LCP</span>
                <span className="text-cyan-400 font-bold font-mono text-lg">{'<'} 1.2s</span>
              </div>
              <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-white/[0.02] border border-white/5 min-w-[120px]">
                <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">DOM Depth</span>
                <span className="text-cyan-400 font-bold font-mono text-lg">Shallow</span>
              </div>
              <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-white/[0.02] border border-white/5 min-w-[120px]">
                <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Lighthouse</span>
                <span className="text-green-400 font-bold font-mono text-lg">100/100</span>
              </div>
            </div>

            <p>
              The initial paint happens fast, and heavy components are lazy-loaded. Performance here was intentional, never an afterthought.
            </p>
          </section>

          <section id="challenges" className="scroll-mt-32">
            <h2 className="text-xl font-semibold text-white mb-6">Challenges</h2>
            
            {/* Terminal Mock */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0c] font-mono text-xs shadow-2xl mb-6">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/5">
                <div className="flex gap-1.5 opacity-50">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <span className="ml-2 text-[10px] text-gray-500 tracking-widest uppercase">bash -- portfolio-dev</span>
              </div>
              
              {/* Terminal Body */}
              <div className="p-5 space-y-4 text-gray-400">
                <div>
                  <span className="text-red-400">error</span> <span className="text-gray-300">Layout overflow detected on mobile viewports.</span>
                  <br/>
                  <span className="text-gray-500">→ Caused by: Absolute positioned glowing orbs exceeding 100vw.</span>
                </div>
                
                <div>
                  <span className="text-cyan-400">~</span> <span className="text-pink-400">git</span> commit -m "fix: refactor root layout overflow"
                  <br/>
                  <span className="text-gray-500">Fixing focus traps and scroll-locking for the command palette.</span>
                </div>

                <div className="pt-3 mt-3 border-t border-white/5">
                  <span className="text-green-400">success</span> <span className="text-gray-300">Build compiled successfully. (120ms)</span>
                </div>
                
                <div className="flex gap-2 items-center mt-2">
                  <span className="text-cyan-400">➜</span>
                  <span className="text-pink-400">~</span>
                  <span className="w-2 h-4 bg-gray-400 animate-pulse"></span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-400">
              Handling keyboard focus traps and scroll-locking while maintaining smooth animations caused multiple edge-case bugs. Mobile responsiveness also broke early on due to fixed absolute positioning of background glow effects.
            </p>
          </section>

          <section id="philosophy" className="scroll-mt-32">
            <h2 className="text-xl font-semibold text-white mb-6">Philosophy</h2>
            <p>
              I write clean code because messy code is expensive. I prioritize UX because if the interface frustrates the user, the underlying engineering does not matter. I build with performance first, treating every millisecond of load time as a scarce resource.
            </p>
          </section>

          <section className="pt-12 border-t border-white/10">
            <p className="text-gray-500 font-mono text-xs tracking-widest uppercase">
              Always improving. Always refining.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Build;
