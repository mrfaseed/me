import { useEffect, useRef, useState } from "react";
import "./footer.css";

const Footer = () => {
  const footerRef = useRef();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const el = footerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("footer-visible");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
  }, []);

  return (
    <footer
      ref={footerRef}
      className="footer-hidden relative mt-24 text-white"
    >

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-gradient" />

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-xl font-semibold tracking-tight hover:tracking-widest transition-all duration-500">
              Faseed / Android
            </h2>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              Crafting smooth, performant Android apps with modern tech and clean UX.
            </p>
          </div>

          {/* NAV */}
          <div>
            <h3 className="text-sm text-gray-300 mb-3 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {["Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/#${item.toLowerCase()}`}
                    className="group inline-block transition"
                  >
                    <span className="group-hover:text-white transition">
                      {item}
                    </span>
                    <span className="block h-[1px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL — with SVG logos */}
          <div>
            <h3 className="text-sm text-gray-300 mb-3 uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/mrfaseed"
                target="_blank"
                rel="noreferrer"
                className="group relative w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] hover:scale-110 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <svg className="w-[18px] h-[18px] text-gray-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-md bg-white/10 transition-opacity duration-300 pointer-events-none"></span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/mrfaseed"
                target="_blank"
                rel="noreferrer"
                className="group relative w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center transition-all duration-300 hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 hover:scale-110 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <svg className="w-[18px] h-[18px] text-gray-400 group-hover:text-[#0A66C2] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-md bg-[#0A66C2]/20 transition-opacity duration-300 pointer-events-none"></span>
              </a>

              {/* Email */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText("faseedmohamed6@gmail.com");
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="group relative w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:scale-110 hover:-translate-y-1"
                  aria-label="Copy Email"
                >
                  {copied ? (
                    <svg className="w-[18px] h-[18px] text-cyan-400 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  ) : (
                    <svg className="w-[18px] h-[18px] text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  )}
                  <span className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-md bg-cyan-400/15 transition-opacity duration-300 pointer-events-none"></span>
                </button>
                
                {/* Toast Notification */}
                <div className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-cyan-500/20 border border-cyan-400/30 text-cyan-400 text-[10px] rounded backdrop-blur-md whitespace-nowrap transition-all duration-300 ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                  Copied!
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* bottom */}
        <div className="border-t border-white/10 mt-10 mb-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p className="text-center md:text-left">
  <span className="block md:inline">© 2025 - 2026</span>
  <span className="block md:inline md:ml-2">
    Designed & developed by Faseed
  </span>
</p>

           <a
      href="/privacy-terms"
      className="hover:text-white transition underline underline-offset-4"
    >
      Privacy
    </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;